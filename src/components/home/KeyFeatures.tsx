'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Professionelle Immobilienverwaltung',
    description: 'Umfassende Verwaltungslösungen, maßgeschneidert für die individuellen Bedürfnisse Ihrer Immobilie.',
    icon: BuildingOffice2Icon,
  },
  {
    name: '24/7 Wartungsservice',
    description: 'Rund-um-die-Uhr-Support und schnelle Reaktion auf Wartungsanfragen.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Qualitätssicherung',
    description: 'Strenge Qualitätskontrollprozesse für höchste Standards.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Echtzeit-Überwachung',
    description: 'Moderne Überwachungssysteme für proaktive Immobilienwartung.',
    icon: ClockIcon,
  },
  {
    name: 'Leistungsanalyse',
    description: 'Detaillierte Berichterstattung und Analysen für fundierte Entscheidungen.',
    icon: ChartBarIcon,
  },
  {
    name: 'Experten-Team',
    description: 'Qualifizierte Fachkräfte mit langjähriger Branchenerfahrung.',
    icon: UserGroupIcon,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
          delay: index * 0.1
        }
      } : {}}
      className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative bg-white rounded-xl p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1
            }
          } : {}}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto"
        >
          <feature.icon className="h-8 w-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1
            }
          } : {}}
        >
          <h3 className="text-xl font-serif font-semibold mb-2 text-center">{feature.name}</h3>
          <p className="text-gray text-center">{feature.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function KeyFeatures() {
  return (
    <section className="py-24 bg-gray-light overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              duration: 0.6
            }
          }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Warum Fonto wählen?
          </h2>
          <p className="text-gray text-lg">
            Erleben Sie Exzellenz in der Immobilienverwaltung mit unserem umfassenden 
            Leistungsangebot, das auf Ihre Bedürfnisse zugeschnitten ist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

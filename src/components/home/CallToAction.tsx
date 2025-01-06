'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary/5" />
      
      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Bereit für professionelle Objektbetreuung?
          </h2>
          <p className="text-gray text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die optimale Lösung für Ihre Immobilie finden. 
            Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Kontakt aufnehmen
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/leistungen"
              className="btn-secondary"
            >
              Mehr erfahren
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

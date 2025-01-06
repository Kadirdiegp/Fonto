'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    content: 'Fonto kümmert sich hervorragend um unsere Immobilien. Das Team ist stets professionell, zuverlässig und schnell zur Stelle, wenn man sie braucht.',
    author: 'Michael Weber',
    position: 'Eigentümer, Weber Immobilien GmbH',
    rating: 5,
  },
  {
    content: 'Die Zusammenarbeit mit Fonto hat unsere Erwartungen übertroffen. Besonders beeindruckend ist die proaktive Herangehensweise bei der Objektbetreuung.',
    author: 'Sandra Müller',
    position: 'Verwalterin, Stadthaus Verwaltung',
    rating: 5,
  },
  {
    content: 'Seit wir mit Fonto zusammenarbeiten, haben sich unsere Betriebskosten deutlich reduziert. Das Team findet immer die effizientesten Lösungen.',
    author: 'Thomas Schmidt',
    position: 'Geschäftsführer, Schmidt & Partner',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-primary w-5 h-5" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{testimonial.content}</p>
      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{testimonial.author}</div>
        <div className="text-sm text-gray-500">{testimonial.position}</div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray text-lg">
            Erfahren Sie aus erster Hand, wie wir unseren Kunden helfen, ihre Immobilien optimal zu betreuen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

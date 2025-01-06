'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px),
                           linear-gradient(180deg, #000 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative">
        <div className="container-custom py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-gray-600 text-lg mb-8">
                {description}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

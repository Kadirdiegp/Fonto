'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="relative min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container-custom h-full">
          <div className="min-h-screen flex items-center pt-32 md:pt-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 items-center w-full py-8 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-10 md:space-y-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  Kompetenz in{' '}
                  <span className="text-primary">Objektbetreuung</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Wir bieten umfassende Immobilienverwaltungslösungen mit deutscher Präzision und Innovation. Ihre Immobilie verdient nichts Geringeres als Exzellenz.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 pt-4">
                  <Link 
                    href="/kontakt/formular" 
                    className="btn-primary text-center"
                  >
                    Jetzt Anfragen
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="btn-secondary text-center"
                  >
                    Referenzen
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:h-[500px]"
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/hero-image.jpg"
                    alt="Hero Image"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';

const partners = [
  {
    name: 'Real Estate Pro',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=200&fit=crop',
  },
  {
    name: 'City Properties',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=200&fit=crop',
  },
  {
    name: 'Modern Living',
    logo: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=300&h=200&fit=crop',
  },
  {
    name: 'Urban Spaces',
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop',
  },
];

export default function PartnerLogos() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 md:mb-12 px-4">
          Unsere Partner und Referenzen
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 aspect-video relative group overflow-hidden"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-300 filter grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import PageHero from '@/components/layout/PageHero';

const CONTACT_ITEMS = [
  {
    icon: MapPinIcon,
    title: 'Besuchen Sie uns',
    content: 'Eichholzweg 29, 27474 Cuxhaven',
    href: 'https://maps.google.com/?q=Eichholzweg+29+27474+Cuxhaven',
    actionText: 'Wegbeschreibung',
  },
  {
    icon: PhoneIcon,
    title: 'Rufen Sie uns an',
    content: '+49 123 456 789',
    href: 'tel:+49123456789',
    actionText: 'Jetzt anrufen',
  },
  {
    icon: EnvelopeIcon,
    title: 'Schreiben Sie uns',
    content: 'info@fonto.de',
    href: 'mailto:info@fonto.de',
    actionText: 'E-Mail senden',
  },
];

function ContactCard({
  icon: Icon,
  title,
  content,
  href,
  actionText,
}: {
  icon: typeof MapPinIcon;
  title: string;
  content: string;
  href: string;
  actionText: string;
}) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isExternalLink = href.startsWith('https://');
  
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="bg-primary text-white p-3 md:p-4 rounded-xl shadow-lg inline-block mb-4">
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm md:text-base" suppressHydrationWarning>
        {content}
      </p>
      
      {isClient && (
        isExternalLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm md:text-base"
          >
            {actionText}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        ) : (
          <Link
            href={href}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm md:text-base"
          >
            {actionText}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )
      )}
    </div>
  );
}

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <PageHero
        title="Wie können wir Ihnen helfen?"
        description="Wir sind immer für Sie da. Kontaktieren Sie uns für eine persönliche 
          Beratung oder ein individuelles Angebot."
      />

      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
            {CONTACT_ITEMS.map((item) => (
              <ContactCard key={item.title} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-xl md:text-2xl font-serif font-semibold mb-3 md:mb-4">Kontaktformular</h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
              </p>
              <Link
                href="/kontakt/formular"
                className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                Zum Kontaktformular
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4">Öffnungszeiten</h2>
                <dl className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-600">Montag - Freitag</dt>
                    <dd className="font-medium">08:00 - 18:00</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-600">Samstag</dt>
                    <dd className="font-medium">Nach Vereinbarung</dd>
                  </div>
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-600">Sonntag</dt>
                    <dd className="font-medium">Geschlossen</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4">24/7 Notfallservice</h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Für technische Notfälle sind wir rund um die Uhr für Sie erreichbar.
                </p>
                {isClient && (
                  <Link
                    href="tel:+49123456789"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
                  >
                    Notfallnummer anrufen
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

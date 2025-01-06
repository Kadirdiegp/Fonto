'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Fonto Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray mb-4">
              Exzellenz in der Objektbetreuung seit 2022. Vertrauen durch Qualitätsservice.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/leistungen#immobilienverwaltung" className="text-gray hover:text-primary transition-colors">
                  Immobilienverwaltung
                </Link>
              </li>
              <li>
                <Link href="/leistungen#wartung" className="text-gray hover:text-primary transition-colors">
                  Wartung & Instandhaltung
                </Link>
              </li>
              <li>
                <Link href="/leistungen#sanierung" className="text-gray hover:text-primary transition-colors">
                  Sanierung
                </Link>
              </li>
              <li>
                <Link href="/leistungen#beratung" className="text-gray hover:text-primary transition-colors">
                  Beratung
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-gray hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="text-gray">
                Eichholzweg 29
                <br />
                27474 Cuxhaven
              </li>
              <li>
                <a href="tel:+49123456789" className="text-gray hover:text-primary transition-colors">
                  Tel.: +49 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:info@fonto.de" className="text-gray hover:text-primary transition-colors">
                  E-Mail: info@fonto.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} Fonto. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/impressum" className="text-gray hover:text-primary text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray hover:text-primary text-sm transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
    actionText: 'Anrufen',
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
  const isExternalLink = href.startsWith('https://');

  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute -top-6 left-8">
        <div className="bg-primary text-white p-4 rounded-xl shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
        <div>
          <a
            href={href}
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {actionText}
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {CONTACT_ITEMS.map((item) => (
        <ContactCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}

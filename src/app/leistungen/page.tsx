import ServiceCard from '@/components/services/ServiceCard';
import PageHero from '@/components/layout/PageHero';

const services = [
  {
    title: 'Treppenhausreinigung',
    description: 'Professionelle und gründliche Reinigung von Treppenhäusern in Mehrfamilienhäusern und Gewerbeobjekten.',
    features: [
      'Regelmäßige Grund- und Unterhaltsreinigung',
      'Fenster- und Glasreinigung im Treppenhaus',
      'Reinigung von Handläufen und Geländern',
      'Feuchtes Wischen aller Treppenstufen',
      'Entfernung von Spinnweben und Schmutz',
      'Reinigung der Eingangsbereiche'
    ],
    image: 'https://images.unsplash.com/photo-1527515862127-a4303c0c78fb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Objektreinigung',
    description: 'Umfassende Reinigung von Gemeinschaftsflächen in verschiedenen Objekten.',
    features: [
      'Reinigung von Fluren und Eingangsbereichen',
      'Pflege von Gemeinschaftsräumen',
      'Reinigung von Aufzügen',
      'Mülltonnenservice',
      'Keller- und Dachbodenreinigung',
      'Sonderreinigungen nach Bedarf'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Hausmeisterservice',
    description: 'Zuverlässiger Hausmeisterservice für die technische Betreuung und Wartung Ihrer Immobilie.',
    features: [
      'Regelmäßige Kontrollgänge',
      'Kleinreparaturen und Wartungsarbeiten',
      'Gartenpflege und Grünanlagenpflege',
      'Winterdienst und Schneeräumung',
      'Überwachung von technischen Anlagen',
      'Schlüsselverwaltung'
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Außenreinigung',
    description: 'Professionelle Reinigung und Pflege von Außenbereichen.',
    features: [
      'Reinigung von Gehwegen und Parkplätzen',
      'Pflege von Grünanlagen',
      'Laubreinigung im Herbst',
      'Unkrautbeseitigung',
      'Reinigung von Außentreppen',
      'Pflege von Außenanlagen'
    ],
    image: 'https://images.unsplash.com/photo-1584959367310-91d3a640450e?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Unsere Leistungen"
        description="Wir bieten professionelle Reinigungs- und Hausmeisterservices für Ihre Immobilie. 
          Mit jahrelanger Erfahrung sorgen wir für Sauberkeit und Ordnung in Treppenhäusern 
          und Gemeinschaftsbereichen."
      />
      
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-8">
              Aktuell betreuen wir erfolgreich verschiedene Objekte in Cuxhaven, 
              darunter das Blue Ocean, die Passat und weitere Objekte in Duhnen. 
              Sprechen Sie uns an für ein individuelles Angebot.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

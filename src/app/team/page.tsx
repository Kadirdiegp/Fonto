import TeamMember from '@/components/team/TeamMember';
import PageHero from '@/components/layout/PageHero';

const teamMembers = [
  {
    id: 1,
    name: 'Quintino Fonto',
    position: 'Gründer & Geschäftsführer',
    bio: 'Als Gründer von Fonto hat Quintino Fonto in nur drei Jahren ein beeindruckendes Portfolio aufgebaut. Seine Vision einer modernen und effizienten Immobilienverwaltung hat sich schnell bewährt: Heute betreut Fonto bereits über 50 Objekte mit einer Gesamtfläche von mehr als 100.000 m². Sein Erfolgsrezept liegt in der Kombination aus innovativen digitalen Lösungen und persönlicher Betreuung. "Jedes Objekt ist einzigartig und verdient individuelle Aufmerksamkeit", so seine Philosophie. Unter seiner Führung hat sich Fonto als verlässlicher Partner für Immobilienbesitzer etabliert, der Tradition mit Innovation verbindet.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    email: 'quintino.fonto@fonto.de',
    phone: '+49 123 456 789',
    expertise: ['Strategische Führung', 'Immobilienmanagement', 'Digitale Innovation'],
  },
  {
    id: 2,
    name: 'Marie Josephina Fonto',
    position: 'Geschäftsführerin',
    bio: 'Marie Josephina Fonto führt das Familienunternehmen gemeinsam mit ihrem Vater und bringt dabei besonders ihre Expertise in den Bereichen Nachhaltigkeit und digitale Transformation ein. Ihr Fokus liegt auf der Entwicklung zukunftsweisender Konzepte für die energieeffiziente und nachhaltige Bewirtschaftung von Immobilien.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    email: 'marie.fonto@fonto.de',
    phone: '+49 123 456 790',
    expertise: ['Digitale Transformation', 'Nachhaltigkeitsmanagement', 'Innovationsführung'],
  }
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Die Familie Fonto"
        description="Lernen Sie die Menschen kennen, die Fonto zu dem machen, was es ist. 
          Mit Leidenschaft und Expertise setzen wir uns täglich für unsere Kunden ein."
      />

      <div className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray text-lg">
              Seit der Gründung im Jahr 2019 steht der Name Fonto für exzellente Immobilienverwaltung 
              und innovative Lösungen. Was als Vision begann, hat sich in kurzer Zeit zu einem 
              der dynamischsten Unternehmen der Branche entwickelt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

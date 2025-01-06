import PageHero from '@/components/layout/PageHero';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ServiceProcess from '@/components/services/ServiceProcess';

const projects = [
  {
    id: 'blue-ocean',
    title: 'Blue Ocean',
    location: 'Cuxhaven',
    description: 'Professionelle Reinigung und Hausmeisterservice für dieses moderne Apartmentgebäude direkt an der Nordsee. Wir sorgen für makellose Sauberkeit in den Treppenhäusern, Fluren und Gemeinschaftsbereichen.',
    mainImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617653695386-1d78957d33f8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'passat',
    title: 'Passat',
    location: 'Cuxhaven',
    description: 'Regelmäßige Treppenhausreinigung und umfassender Hausmeisterservice für diese elegante Wohnanlage. Unsere Leistungen umfassen die Pflege der Außenanlagen, Winterdienst und technische Betreuung.',
    mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617653695386-1d78957d33f8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'duhnen-1',
    title: 'Residenz Duhnen',
    location: 'Cuxhaven-Duhnen',
    description: 'Professionelle Reinigung und Instandhaltung dieser exklusiven Wohnanlage im beliebten Stadtteil Duhnen. Wir gewährleisten höchste Sauberkeitsstandards und einen reibungslosen Hausmeisterservice.',
    mainImage: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617653695386-1d78957d33f8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop'
    ]
  }
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Unsere Referenzen"
        description="Entdecken Sie unsere aktuellen Projekte in Cuxhaven. Qualität und Zuverlässigkeit 
          sind unser Markenzeichen - davon profitieren bereits viele zufriedene Kunden."
      />

      <div className="py-16">
        <div className="container-custom">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>

      <ServiceProcess />
    </>
  );
}

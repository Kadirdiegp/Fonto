import Hero from '@/components/home/Hero';
import KeyFeatures from '@/components/home/KeyFeatures';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import PartnerLogos from '@/components/home/PartnerLogos';

export default function Home() {
  return (
    <main>
      <Hero />
      <KeyFeatures />
      <Stats />
      <Testimonials />
      <PartnerLogos />
      <CallToAction />
    </main>
  );
}

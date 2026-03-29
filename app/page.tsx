import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ReservationSection from './components/ReservationSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <SpecialtiesSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

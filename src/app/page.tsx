import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import EventsSection from '@/components/home/events-section';
import ScheduleSection from '@/components/home/schedule-section';
import RegistrationSection from '@/components/home/registration-section';
import CoordinatorsSection from '@/components/home/coordinators-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ScheduleSection />
        <RegistrationSection />
        <CoordinatorsSection />
      </main>
      <Footer />
    </div>
  );
}

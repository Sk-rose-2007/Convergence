import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CountdownTimer from './countdown-timer';
import { Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  const eventDate = new Date('2024-10-26T09:00:00');

  return (
    <section id="home" className="relative flex h-[calc(100vh-5rem)] min-h-[600px] w-full items-center justify-center">
      <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(106,74,235,0.3),rgba(255,255,255,0))]"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-gray-50 to-gray-400 text-gradient">
          CONVERGENCE
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Where Ideas, Innovation & Technology Converge
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>October 26-27, 2024</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>University Auditorium</span>
          </div>
        </div>
        <div className="mt-8">
          <CountdownTimer date={eventDate} />
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105">
            <Link href="#register">Register Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

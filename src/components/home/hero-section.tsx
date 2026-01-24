import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CountdownTimer from './countdown-timer';

export default function HeroSection() {
  const eventDate = new Date('2024-10-26T09:00:00');

  return (
    <section id="home" className="relative flex h-[calc(100vh-5rem)] min-h-[600px] w-full items-center justify-center">
      <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,166,35,0.2),rgba(255,255,255,0))]"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-yellow-400 to-orange-500 text-gradient">
          THIRAN 2k24
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          The Intradepartmental Technical Symposium
        </p>
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

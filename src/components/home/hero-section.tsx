import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CountdownTimer from './countdown-timer';
import deptlogo from "@/assests/images/dept.jpeg";

export default function HeroSection() {
  const eventDate = new Date('2026-02-18T09:00:00');

  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-5rem)] min-h-[600px] w-full items-center justify-center"
    >
      <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,hsl(var(--primary)/0.2),transparent_70%)]"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-fade-in-up flex flex-col items-center gap-6">
          <Image
            src={deptlogo}
            alt="AI & ML Department Logo"
            width={140}
            height={140}
            className="rounded-full shadow-lg shadow-primary/30"
          />

          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-pan text-gradient">
            CONVERGENCE 2k26
          </h1>
        </div>

        <div className="animate-fade-in-up">
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A National Level Technical Symposium by Nehru Institute of
            Technology
          </p>
        </div>
        <div className="mt-8 animate-fade-in-up">
          <CountdownTimer date={eventDate} />
        </div>
        <div className="mt-8 animate-fade-in-up">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-100"
          >
            <Link href="#events">Explore Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { SectionWrapper, SectionTitle, SectionDescription } from '../shared/section-wrapper';
import EventCard from './event-card';
import { technicalEvents, nonTechnicalEvents } from '@/lib/content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Ticket } from 'lucide-react';

export default function EventsSection() {
  return (
    <SectionWrapper id="events">
      <div className="space-y-4 text-center animate-fade-in-up">
        <SectionTitle>Explore Our Events</SectionTitle>
        <SectionDescription>
          From intense coding battles to creative challenges, we have a diverse range of events for everyone. Choose your arena and get ready to compete at CONVERGENCE 2k26!
        </SectionDescription>
      </div>
      <div className="mt-12 space-y-16">
        <div>
          <h3 className="text-2xl font-bold font-headline mb-8 text-center text-primary">
            Technical Events
          </h3>
          <div className="grid gap-6 md:grid-cols-2 justify-center">
            {technicalEvents.map((event) => (
              <div key={event.title} className="animate-fade-in-up">
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-headline mb-8 text-center text-primary">
            Non-Technical Events
          </h3>
          <div className="grid gap-6 justify-center lg:max-w-lg mx-auto">
            {nonTechnicalEvents.map((event) => (
              <div key={event.title} className="animate-fade-in-up">
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 text-center animate-fade-in-up">
        <Button asChild size="lg" className="rounded-full text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] active:scale-100 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-pan">
            <Link href="#" target="_blank" rel="noopener noreferrer">
                <Ticket className="h-5 w-5" />
                Register for Events
            </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

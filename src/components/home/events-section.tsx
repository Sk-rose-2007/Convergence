import { SectionWrapper, SectionTitle, SectionDescription } from '../shared/section-wrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <div className="mt-12">
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="technical">Technical Events</TabsTrigger>
            <TabsTrigger value="non-technical">Non-Technical Events</TabsTrigger>
          </TabsList>
          <TabsContent value="technical" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technicalEvents.map((event, index) => (
                <div key={event.title} className="animate-fade-in-up">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="non-technical" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {nonTechnicalEvents.map((event, index) => (
                <div key={event.title} className="animate-fade-in-up">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-12 text-center animate-fade-in-up">
        <Button asChild size="lg" className="rounded-full text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-100 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-pan">
            <Link href="#" target="_blank" rel="noopener noreferrer">
                <Ticket className="h-5 w-5" />
                Register for Events
            </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

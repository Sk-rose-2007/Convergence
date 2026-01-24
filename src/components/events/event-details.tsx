import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import type { Event } from '@/lib/content';
import { coordinators as allCoordinators } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import EventRegistrationForm from './event-registration-form';

type EventDetailsProps = {
  event: Event;
};

export default function EventDetails({ event }: EventDetailsProps) {
  const Icon = event.icon;
  const imagePlaceholder = PlaceHolderImages.find(img => img.id === event.imageId);
  const eventCoordinators = allCoordinators.filter(c => event.coordinators.includes(c.id));

  return (
    <SectionWrapper id="event-details" className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/#events" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Events
            </Link>
          </Button>
        </div>

        {imagePlaceholder && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-2xl shadow-primary/20 animate-fade-in-up">
            <Image
              src={imagePlaceholder.imageUrl}
              alt={`Image for ${event.title}`}
              width={600}
              height={400}
              data-ai-hint={imagePlaceholder.imageHint}
              className="w-full aspect-video object-cover"
            />
          </div>
        )}

        <Card className="bg-card/30 border border-border/20 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards'}}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 mt-1.5">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="font-headline text-3xl md:text-4xl break-words">{event.title}</CardTitle>
                <p className="mt-2 text-lg text-muted-foreground break-words">{event.description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pt-4">
            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">About the Event</h3>
              <div className="space-y-4 text-muted-foreground break-words">
                {event.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">Rules & Guidelines</h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground break-words">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
            
            {eventCoordinators.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold font-headline mb-4">Event Coordinators</h3>
                <div className="grid gap-6 sm:grid-cols-1">
                  {eventCoordinators.map(coordinator => {
                    const placeholder = PlaceHolderImages.find(img => img.id === coordinator.id);
                    return (
                      <Card key={coordinator.id} className="p-4 bg-card/50 border border-border/30">
                        <div className="flex items-center gap-4">
                          {placeholder && (
                             <Image
                                src={placeholder.imageUrl}
                                alt={`Photo of ${coordinator.name}`}
                                width={64}
                                height={64}
                                data-ai-hint={placeholder.imageHint}
                                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                             />
                          )}
                          <div className='flex-1 min-w-0'>
                            <h4 className="font-bold text-lg font-headline break-words">{coordinator.name}</h4>
                            <p className="text-sm text-primary break-words">{coordinator.role}</p>
                             <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-3 w-3" />
                                    <span className="break-all">{coordinator.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-3 w-3" />
                                    <span className="break-all">{coordinator.email}</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <EventRegistrationForm eventName={event.title} />

      </div>
    </SectionWrapper>
  );
}

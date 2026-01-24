import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Event } from '@/lib/content';

type EventDetailsProps = {
  event: Event;
};

export default function EventDetails({ event }: EventDetailsProps) {
  const Icon = event.icon;
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
        <Card className="bg-card/30 border border-border/20 backdrop-blur-sm animate-fade-in-up">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 mt-1.5">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline text-3xl md:text-4xl">{event.title}</CardTitle>
                <p className="mt-2 text-lg text-muted-foreground">{event.description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">Rules & Guidelines</h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}

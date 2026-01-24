import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Event } from '@/lib/content';

export default function EventCard({ icon: Icon, title, description, slug }: Event) {
  return (
    <Link href={`/events/${slug}`} className="group block h-full">
      <Card className="flex flex-col h-full bg-card/30 border border-border/20 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20 group-hover:shadow-2xl group-hover:-translate-y-2">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center justify-end text-sm font-semibold text-accent transition-colors group-hover:text-primary">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

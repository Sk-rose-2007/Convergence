import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type EventCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  rules: string[];
};

export default function EventCard({ icon: Icon, title, description, rules }: EventCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-muted-foreground flex-grow">{description}</p>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1" className="border-t border-b-0 pt-2">
            <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline text-accent hover:text-accent/80">
              View Rules
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-0">
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground text-sm">
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

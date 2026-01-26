import { SectionWrapper, SectionTitle, SectionDescription } from '../shared/section-wrapper';
import { schedule } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScheduleSection() {
  return (
    <SectionWrapper id="schedule" className="bg-background">
      <div className="space-y-4 animate-fade-in-up">
        <SectionTitle>Event Schedule</SectionTitle>
        <SectionDescription>
          Plan your day at CONVERGENCE 2k26. Here’s the timeline of all the events and activities we have lined up for you on February 18th.
        </SectionDescription>
      </div>
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="space-y-8">
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border/20 after:left-0">
            {schedule.day1.map((item, index) => (
              <div key={index} className="relative grid gap-4 pb-8 grid-cols-[auto_1fr] items-start">
                <div className="relative z-10 flex h-3 w-3 -translate-x-[calc(50%_+_1px)] translate-y-2 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                <div className="space-y-1">
                  <p className="font-semibold">{item.time}</p>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

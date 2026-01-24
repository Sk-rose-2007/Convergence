import { SectionWrapper, SectionTitle, SectionDescription } from '../shared/section-wrapper';
import { schedule } from '@/lib/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScheduleSection() {
  return (
    <SectionWrapper id="schedule" className="bg-card">
      <div className="space-y-4">
        <SectionTitle>Event Schedule</SectionTitle>
        <SectionDescription>
          Plan your days at THIRAN 2k24. Here’s a timeline of all the events and activities we have lined up for you.
        </SectionDescription>
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center font-headline text-primary">Day 1</h3>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-primary/20 after:left-0">
            {schedule.day1.map((item, index) => (
              <div key={index} className="relative grid gap-4 pb-8 grid-cols-[auto_1fr] items-start">
                <div className="relative z-10 flex h-3 w-3 -translate-x-[calc(50%_+_1px)] translate-y-2 items-center justify-center rounded-full bg-primary"></div>
                <div className="space-y-1">
                  <p className="font-semibold">{item.time}</p>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center font-headline text-accent">Day 2</h3>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-accent/20 after:left-0">
            {schedule.day2.map((item, index) => (
              <div key={index} className="relative grid gap-4 pb-8 grid-cols-[auto_1fr] items-start">
                <div className="relative z-10 flex h-3 w-3 -translate-x-[calc(50%_+_1px)] translate-y-2 items-center justify-center rounded-full bg-accent"></div>
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

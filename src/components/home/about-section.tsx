import { SectionWrapper, SectionTitle, SectionDescription } from '../shared/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Our Goal',
    description: 'To provide a platform for students to showcase their technical prowess and creativity.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Foster Innovation',
    description: 'Encourage out-of-the-box thinking and development of novel solutions to real-world problems.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Promote Collaboration',
    description: 'Bring together students from various disciplines to network, collaborate, and learn from each other.',
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-card">
      <div className="grid gap-8">
        <div className="space-y-4">
          <SectionTitle>About THIRAN</SectionTitle>
          <SectionDescription>
            Thiran is an intra-departmental technical symposium orchestrated by the Computer Science and Engineering department. It serves as a vibrant platform for students to showcase their technical expertise and innovative ideas.
          </SectionDescription>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background/50 border-border/50 transform transition-transform duration-300 hover:-translate-y-2">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

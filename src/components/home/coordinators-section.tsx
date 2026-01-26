import Image from 'next/image';
import { SectionWrapper, SectionTitle, SectionDescription } from '../shared/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { coordinators } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail } from 'lucide-react';

export default function CoordinatorsSection() {
    const getImage = (id: string) => {
        return PlaceHolderImages.find(img => img.id === id);
    }

  return (
    <SectionWrapper id="coordinators" className="bg-card">
      <div className="space-y-4 animate-fade-in-up">
        <SectionTitle>Our Student Coordinators</SectionTitle>
        <SectionDescription>
          Meet the dedicated student coordinators of CONVERGENCE 2k24.
        </SectionDescription>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {coordinators.map((coordinator, index) => {
          const placeholder = getImage(coordinator.id);
          return (
            <div key={coordinator.name} className="animate-fade-in-up">
              <Card className="overflow-hidden text-center bg-card/30 border border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="mb-4">
                      {placeholder && (
                          <Image
                              src={placeholder.imageUrl}
                              alt={`Photo of ${coordinator.name}`}
                              width={100}
                              height={100}
                              data-ai-hint={placeholder.imageHint}
                              className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary shadow-lg shadow-primary/20"
                          />
                      )}
                  </div>
                  <h3 className="text-lg font-bold font-headline break-words">{coordinator.name}</h3>
                  <p className="text-sm text-primary break-words">{coordinator.role}</p>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span className="break-all">{coordinator.phone}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="break-all">{coordinator.email}</span>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

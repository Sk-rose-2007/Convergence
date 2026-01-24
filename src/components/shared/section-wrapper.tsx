import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('w-full py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center", className)}>
            {children}
        </h2>
    );
}

export function SectionDescription({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center", className)}>
            {children}
        </p>
    );
}

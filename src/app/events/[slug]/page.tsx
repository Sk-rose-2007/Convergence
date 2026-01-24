import { allEvents } from '@/lib/content';
import EventDetails from '@/components/events/event-details';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { notFound } from 'next/navigation';

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default function EventPage({ params }: EventPageProps) {
  const { slug } = params;
  const event = allEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <EventDetails event={event} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: event.slug,
  }));
}

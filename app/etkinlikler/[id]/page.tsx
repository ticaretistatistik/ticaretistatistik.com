import { getEvents } from "@/lib/calendar";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const events = await getEvents();
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return { title: "Etkinlik Bulunamadı" };
  }

  return {
    title: `${event.title} - Etkinlik Detayı`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const events = await getEvents();
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background py-16">
      <div className="container-custom max-w-3xl mx-auto">
        <Link 
          href="/topluluk/etkinliklerimiz" 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tüm Etkinliklere Dön
        </Link>
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold tracking-wide uppercase mb-6">
            {event.category}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-brand-ink dark:text-white mb-8 leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-4 shrink-0">
                <Calendar className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Tarih</p>
                <p className="font-medium">{event.date}</p>
              </div>
            </div>
            
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-4 shrink-0">
                <Clock className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Saat</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-4 shrink-0">
                <MapPin className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Konum</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <h3 className="text-xl font-semibold mb-4 text-brand-ink dark:text-white">Etkinlik Hakkında</h3>
            <p className="whitespace-pre-wrap leading-relaxed">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { Calendar, MapPin, Clock, ArrowRight, Video, Users, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getEvents } from "@/lib/calendar";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description: "İstatistik Topluluğu güncel etkinlik takvimi ve planlanan organizasyonlar.",
};

export default async function EventsPage() {
  const events = await getEvents();

  const upcomingEvents = events
    .filter(e => e.status === "upcoming")
    .sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());
    
  const pastEvents = events
    .filter(e => e.status === "past")
    .sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());

  return (
    <div className="bg-slate-50 dark:bg-background min-h-screen">
      <div className="container-custom pt-12 pb-24">
        
        {/* Header */}
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-brand-accent/10 p-3 rounded-2xl mb-6">
            <Sparkles className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink dark:text-white mb-6">
            Etkinliklerimiz
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Eğitimler, paneller, uygulamalı atölyeler ve teknik gezilerimiz. Topluluğumuzun aktif takvimini buradan takip edebilir ve katılabilirsiniz.
          </p>
        </header>

        {/* Upcoming Events Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink dark:text-white flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
              </span>
              Yaklaşan Etkinlikler
            </h2>
          </div>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <Link href={`/etkinlikler/${event.id}`} key={event.id} className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:border-brand-accent/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold tracking-wide uppercase">
                      {event.category}
                    </span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-brand-ink dark:text-white">{event.date.split(" ")[0]}</div>
                      <div className="text-sm font-medium text-slate-500">{event.date.split(" ").slice(1).join(" ")}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-ink dark:text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="w-4 h-4 mr-3 text-slate-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      {event.location.includes("Online") ? (
                        <Video className="w-4 h-4 mr-3 text-brand-accent" />
                      ) : (
                        <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                      )}
                      {event.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-lg">Şu anda planlanmış yakın tarihli bir etkinlik bulunmuyor.</p>
            </div>
          )}
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-2xl font-bold text-brand-ink dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            Geçmiş Etkinlikler
          </h2>
          
          <div className="flex flex-col gap-4">
            {pastEvents.length > 0 ? (
              pastEvents.map(event => (
                <div key={event.id} className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                        {event.title}
                      </h3>
                      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                        {event.date}
                      </span>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-4">
                      <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1.5" />{event.location}</span>
                      <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1.5" />{event.category}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400 italic">Henüz geçmiş bir etkinlik verisi bulunmuyor.</p>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}

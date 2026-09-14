import { Calendar, MapPin, Clock, ArrowRight, Instagram, Linkedin, Ticket, Users, Presentation } from "lucide-react";
import { getEvents as getNotionEvents } from "@/lib/notion";
import { getGoogleCalendarEvents } from "@/lib/calendar";

export const revalidate = 3600;

export default async function EventsPage() {
  const notionEvents = await getNotionEvents();
  const calendarEvents = await getGoogleCalendarEvents();
  
  // Google Calendar takvimini ana kaynak (source of truth) kabul edip, 
  // eşleşen bir Notion içeriği varsa Notion'daki zengin bilgileri (açıklama vb.) kullanıyoruz.
  const mergedEvents = calendarEvents.map(calEvent => {
    const matchingNotion = notionEvents.find(n => n.title.toLowerCase() === calEvent.title.toLowerCase());
    
    // Tarih ve saat formatlama (Google Calendar datasından)
    const dateStr = calEvent.startDate.toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' });
    let timeStr = calEvent.startDate.toLocaleTimeString("tr-TR", { hour: '2-digit', minute:'2-digit' });
    if (calEvent.endDate) {
      timeStr += " - " + calEvent.endDate.toLocaleTimeString("tr-TR", { hour: '2-digit', minute:'2-digit' });
    }

    return {
      id: calEvent.id,
      title: matchingNotion?.title || calEvent.title,
      description: matchingNotion?.description || calEvent.description || "",
      location: matchingNotion?.location || calEvent.location || "Belirtilmedi",
      date: dateStr,
      time: timeStr !== "00:00" ? timeStr : "Saat belirtilmedi",
      isUpcoming: calEvent.startDate > new Date(),
      icon: Users // Varsayılan ikon
    };
  });

  // Eğer hiçbir API'den veri gelmediyse (henüz kurulmadıysa), boş durmaması için varsayılan örnek verileri kullan
  const hasApiData = mergedEvents.length > 0;
  
  const upcomingEvents = hasApiData 
    ? mergedEvents.filter(e => e.isUpcoming) 
    : [];
    
  const pastEvents = hasApiData 
    ? mergedEvents.filter(e => !e.isUpcoming) 
    : [
      {
        id: "1",
        title: "Tanışma Toplantısı ve Bölüm Oryantasyonu",
        date: "Ekim 2024",
        time: "15:00 - 17:00",
        location: "Sütlüce Kampüsü",
        description: "Yeni eğitim yılına başlarken topluluğumuzla tanışma, bölüm akademisyenlerimizle bir araya gelme ve yeni dönem planlarımızı paylaşma fırsatı.",
        icon: Users
      },
      {
        id: "2",
        title: "Veri Bilimi ve Yapay Zeka Kariyer Zirvesi",
        date: "Bahar 2024",
        time: "10:00 - 16:00",
        location: "Konferans Salonu",
        description: "Sektörün önde gelen isimleriyle veri biliminin geleceği, makine öğrenmesi uygulamaları ve mezuniyet sonrası kariyer fırsatları üzerine ilham verici bir etkinlik.",
        icon: Presentation
      }
    ];

  return (
    <div className="min-h-screen pt-24 pb-32 text-zinc-900 dark:text-zinc-50">
      <div className="container mx-auto max-w-[1100px] px-6">
        
        {/* Header Section */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 dark:border-white/10 pb-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black dark:text-white mb-6">
              Etkinlikler
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Zirveler, eğitim kampları, atölye çalışmaları ve sektör liderleriyle buluşmalar. Veri dünyasına birlikte adım atıyoruz.
            </p>
          </div>
          <div className="text-zinc-400 dark:text-zinc-500 font-medium tracking-wide text-sm uppercase shrink-0">
            Topluluk Takvimi
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content - Upcoming & Past Events */}
          <div className="lg:col-span-8 flex flex-col gap-20">
            
            {/* Upcoming Events */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-brand-yellow rounded-full"></div>
                <h2 className="text-3xl font-medium tracking-tight">Yaklaşan Etkinlikler</h2>
              </div>
              
              {upcomingEvents.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {upcomingEvents.map((event) => (
                    <article key={event.id} className="group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-3xl border border-brand-yellow/30 bg-white dark:bg-zinc-900/40 hover:border-brand-yellow transition-colors shadow-sm hover:shadow-lg overflow-hidden">
                      <div className="absolute top-0 right-0 p-32 bg-brand-yellow/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                      <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-yellow/10 text-brand-yellow">
                        <Calendar className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <div className="flex-1 relative z-10">
                        <h3 className="text-xl font-medium text-black dark:text-white mb-2">{event.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4 font-light leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                          <span className="flex items-center gap-2 text-brand-yellow">
                            <Calendar className="w-4 h-4" /> {event.date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {event.time}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> {event.location}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/20 backdrop-blur-xl p-10 md:p-16 text-center shadow-sm">
                  <div className="absolute top-0 right-0 p-32 bg-brand-yellow/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-32 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 mb-6 shadow-inner border border-zinc-200/50 dark:border-zinc-700/50">
                      <Calendar className="h-10 w-10 stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl font-medium text-black dark:text-white mb-4">Yeni Dönem Takvimi Hazırlanıyor</h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8 font-light">
                      Etkinlik planlamalarımız tüm hızıyla devam ediyor. Çok yakında sürpriz duyurularla karşınızda olacağız!
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                      <a href="https://instagram.com/ticaretistatistik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm">
                        <Instagram className="w-4 h-4" />
                        Instagram'dan Takip Et
                      </a>
                      <a href="https://www.linkedin.com/company/i%CC%87statistik-toplulu%C4%9Futic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Past Events */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <h2 className="text-3xl font-medium tracking-tight">Geçmiş Etkinlikler</h2>
              </div>

              <div className="flex flex-col gap-6">
                {pastEvents.map((event) => (
                  <article key={event.id} className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-brand-yellow/30 transition-colors shadow-sm hover:shadow-md">
                    <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-brand-yellow/10 group-hover:text-brand-yellow transition-colors">
                      <event.icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-black dark:text-white mb-2">{event.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4 font-light leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {event.time}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {event.location}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-8">
              <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
                  <Ticket className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-3">Sponsorluk & İş Birliği</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-light leading-relaxed">
                  Topluluğumuzun etkinliklerinde yer almak, veri bilimi ekosistemine katkı sağlamak ve geleceğin istatistikçileriyle buluşmak ister misiniz?
                </p>
                <a href="mailto:ticaretstat@gmail.com" className="inline-flex items-center gap-2 text-brand-yellow font-medium hover:gap-3 transition-all">
                  ticaretstat@gmail.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

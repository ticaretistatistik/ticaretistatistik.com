import { archive } from "#site/content";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar, ImageIcon, LayoutGrid } from "lucide-react";

export const metadata: Metadata = {
  title: "Arşiv",
  description: "Geçmiş etkinliklerimiz, eğitimlerimiz ve panellerimizden kareler.",
};

export default function ArchiveIndexPage() {
  // Sort by date (newest first)
  const sortedArchives = [...archive].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="bg-slate-50 dark:bg-background min-h-screen">
      <div className="container-custom pt-12 pb-24">
        
        {/* Header Section */}
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center bg-brand-blue/10 p-3 rounded-2xl mb-6">
            <LayoutGrid className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy dark:text-white mb-6">
            Etkinlik Arşivi
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Geçmişte düzenlediğimiz zirveler, atölyeler ve tüm etkinliklerin özetleri ve fotoğraf galerileri.
          </p>
        </header>

        {/* Archives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArchives.map((item) => (
            <Link 
              href={item.permalink} 
              key={item.slug} 
              className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Cover Image */}
              <div className="w-full aspect-[4/3] relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {item.cover ? (
                  <img 
                    src={typeof item.cover === 'string' ? item.cover : item.cover.src} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/5">
                    <ImageIcon className="w-12 h-12 text-brand-blue/20" />
                  </div>
                )}
                
                {/* Image Count Badge */}
                {item.gallery && item.gallery.length > 0 && (
                  <div className="absolute top-4 right-4 flex gap-1 items-center bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    <ImageIcon className="w-3 h-3" />
                    +{item.gallery.length} Görsel
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <time dateTime={item.date} className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(item.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>

                <h2 className="text-xl font-bold text-brand-navy dark:text-white mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {item.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-semibold text-brand-blue border-t border-slate-100 dark:border-slate-800 pt-4">
                  Detayları İncele
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sortedArchives.length === 0 && (
          <div className="py-24 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <LayoutGrid className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Henüz arşivlenmiş bir etkinlik bulunmuyor.</p>
          </div>
        )}
      </div>
    </div>
  );
}

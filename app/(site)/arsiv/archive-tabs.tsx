'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, ImageIcon, LayoutGrid, PlayCircle } from "lucide-react";
import { VideoGallery } from "@/components/video-gallery";

type ArchiveItem = any; // Will use any for simplicity, or we can infer it.

export function ArchiveTabs({ archives }: { archives: ArchiveItem[] }) {
  const [activeTab, setActiveTab] = useState<'events' | 'videos'>('events');

  return (
    <div>
      {/* Tabs Header */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
        <div className="bg-zinc-100/80 dark:bg-zinc-800/80 p-1.5 rounded-full flex gap-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'events'
                ? 'bg-white dark:bg-zinc-900 text-brand-ink dark:text-white shadow-sm ring-1 ring-zinc-200/50 dark:ring-white/10'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-brand-ink dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Etkinlik Arşivi
          </button>
          
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-white dark:bg-zinc-900 text-brand-ink dark:text-white shadow-sm ring-1 ring-zinc-200/50 dark:ring-white/10'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-brand-ink dark:hover:text-white'
            }`}
          >
            <PlayCircle className="w-4 h-4" />
            Kayıtlar & Röportajlar
          </button>
        </div>
      </div>

      {/* Tab Content: Events */}
      {activeTab === 'events' && (
        <div className="animate-in fade-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archives.map((item) => (
              <Link 
                href={item.permalink} 
                key={item.slug} 
                className="flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-full aspect-[4/3] relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  {item.cover ? (
                    <img 
                      src={typeof item.cover === 'string' ? item.cover : item.cover.src} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-accent/5">
                      <ImageIcon className="w-12 h-12 text-brand-accent/20" />
                    </div>
                  )}
                  
                  {item.gallery && item.gallery.length > 0 && (
                    <div className="absolute top-4 right-4 flex gap-1 items-center bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      <ImageIcon className="w-3 h-3" />
                      +{item.gallery.length} Görsel
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <time dateTime={item.date} className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>

                  <h2 className="text-xl font-bold text-brand-ink dark:text-white mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-brand-accent border-t border-zinc-100 dark:border-zinc-800 pt-4">
                    Detayları İncele
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {archives.length === 0 && (
            <div className="py-24 text-center bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
                <LayoutGrid className="w-8 h-8 text-zinc-400" />
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">Henüz arşivlenmiş bir etkinlik fotoğrafı bulunmuyor.</p>
            </div>
          )}
        </div>
      )}

      {/* Tab Content: Videos */}
      {activeTab === 'videos' && (
        <div className="animate-in fade-in duration-500">
          <VideoGallery />
        </div>
      )}
    </div>
  );
}

import { archive } from "#site/content";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar, ImageIcon, LayoutGrid } from "lucide-react";
import { VideoGallery } from "@/components/video-gallery";

import { ArchiveTabs } from "./archive-tabs";

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
    <div className="bg-zinc-50 dark:bg-background min-h-screen">
      <div className="container-custom pt-12 pb-24">
        
        {/* Header Section */}
        <header className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center bg-brand-accent/10 p-3 rounded-2xl mb-6">
            <LayoutGrid className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink dark:text-white mb-6">
            Etkinlik Arşivi
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Geçmişte düzenlediğimiz zirveler, atölyeler ve tüm etkinliklerin özetleri, fotoğraf galerileri ve video kayıtları.
          </p>
        </header>

        {/* Tabs Section */}
        <ArchiveTabs archives={sortedArchives} />

      </div>
    </div>
  );
}

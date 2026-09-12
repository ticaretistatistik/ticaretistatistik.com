import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden relative">
      
      {/* Global Grain Overlay */}
      <div className="absolute inset-0 z-0 grain mix-blend-overlay"></div>

      {/* 
        HERO SECTION
      */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 z-10">
        
        {/* Subtle glowing orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/30 dark:bg-brand-yellow/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-all duration-700 animate-pulse"></div>

        <div className="w-full max-w-[1600px] mx-auto flex flex-col items-start z-10">
          <p className="text-brand-yellow font-bold tracking-[0.2em] text-sm uppercase mb-6 md:mb-10 pl-1 border-l-2 border-brand-yellow">
            İstanbul Ticaret Üniversitesi
          </p>
          
          <h1 className="text-[12vw] leading-[0.85] font-serif font-medium tracking-tighter uppercase mb-6 flex flex-col">
            <span className="text-foreground">İstatistik</span>
            <span className="text-zinc-400 dark:text-zinc-500 italic">
              Topluluğu
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between w-full mt-12 md:mt-24 border-t border-border pt-8 gap-8">
            <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Veri biliminin zarif dünyası. Teorik altyapıyı modern analiz yöntemleriyle buluşturan, 
              geleceğin veri liderlerini yetiştiren premium ekosistem.
            </p>
            
            <div className="flex gap-4 relative z-20 mt-4">
              <Link href="/topluluk/etkinliklerimiz" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl border border-brand-yellow/20 bg-brand-yellow px-8 font-semibold text-brand-ink shadow-lg shadow-brand-yellow/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-yellow/40 hover:scale-[1.03] active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-brand-yellow to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative flex items-center">
                  <span className="mr-2">Keşfet</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full border-y border-border bg-zinc-50 dark:bg-brand-ink overflow-hidden py-4 flex whitespace-nowrap">
        <div className="animate-marquee flex gap-8 items-center text-zinc-400 dark:text-zinc-500 font-serif text-2xl uppercase tracking-widest">
          <span>• Veri Bilimi</span>
          <span>• Makine Öğrenmesi</span>
          <span>• Python</span>
          <span>• R Programlama</span>
          <span>• Veri Görselleştirme</span>
          <span>• SPSS</span>
          <span>• Tableau</span>
          <span>• Veri Bilimi</span>
          <span>• Makine Öğrenmesi</span>
          <span>• Python</span>
          <span>• R Programlama</span>
        </div>
      </div>

      {/* EDITORIAL SECTION */}
      <section className="py-32 px-6 md:px-12 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <h2 className="text-5xl font-serif leading-tight mb-8">
              Akademik <br />
              <span className="text-brand-yellow italic">ve Pratik.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-12">
              Sadece kod yazmayı değil, verinin arkasındaki hikayeyi okumayı öğreniyoruz. 
              Topluluğumuz, öğrencileri akademik dünyanın disipliniyle, iş dünyasının dinamizmi arasında bir köprü olarak konumlandırıyor.
            </p>
            <div className="hidden lg:block w-full h-[400px] bg-zinc-100 dark:bg-zinc-900 border border-border rounded-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
               <div className="absolute bottom-6 left-6 z-20">
                 <p className="text-xs font-bold tracking-widest uppercase text-brand-yellow mb-2">Vizyon</p>
                 <p className="text-lg font-serif text-white">Veriyi Sanata Dönüştürmek</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8 lg:mt-32">
            
            {/* Feature 1 */}
            <Link href="/docs" className="group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-brand-yellow/30 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-brand-yellow/[0.08] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="text-7xl font-serif text-zinc-200 dark:text-zinc-800 group-hover:text-brand-yellow/20 transition-colors absolute -top-4 -right-4 font-bold z-0">01</span>
              <div className="flex-1 z-10">
                <p className="text-brand-yellow text-xs tracking-[0.2em] uppercase font-bold mb-3">Açık Kaynak</p>
                <h3 className="text-3xl font-serif mb-4 text-foreground">Dokümantasyon</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light max-w-md">Python, R, ve JASP gibi diller/araçlar için öğrenciler tarafından hazırlanan kusursuz, minimalist notlar.</p>
              </div>
              <div className="h-16 w-16 rounded-2xl border border-border flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-ink group-hover:border-brand-yellow transition-all duration-300 z-10 shrink-0 text-zinc-500 dark:text-zinc-400">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </Link>

            {/* Feature 2 */}
            <Link href="/topluluk/etkinliklerimiz" className="group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-brand-yellow/30 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-brand-yellow/[0.08] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="text-7xl font-serif text-zinc-200 dark:text-zinc-800 group-hover:text-brand-yellow/20 transition-colors absolute -top-4 -right-4 font-bold z-0">02</span>
              <div className="flex-1 z-10">
                <p className="text-brand-yellow text-xs tracking-[0.2em] uppercase font-bold mb-3">Datathon & Zirve</p>
                <h3 className="text-3xl font-serif mb-4 text-foreground">Etkinlikler</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light max-w-md">Sektör liderleriyle networking, veri yarışmaları ve uygulamalı workshop'lar ile sınırlarını zorla.</p>
              </div>
              <div className="h-16 w-16 rounded-2xl border border-border flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-ink group-hover:border-brand-yellow transition-all duration-300 z-10 shrink-0 text-zinc-500 dark:text-zinc-400">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </Link>

            {/* Feature 3 */}
            <a href="https://open.spotify.com" target="_blank" rel="noreferrer" className="group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-brand-yellow/30 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-brand-yellow/[0.08] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="text-7xl font-serif text-zinc-200 dark:text-zinc-800 group-hover:text-brand-yellow/20 transition-colors absolute -top-4 -right-4 font-bold z-0">03</span>
              <div className="flex-1 z-10">
                <p className="text-brand-yellow text-xs tracking-[0.2em] uppercase font-bold mb-3">Kapsamlı İçerik</p>
                <h3 className="text-3xl font-serif mb-4 text-foreground">Podcast & Blog</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light max-w-md">Mezunların deneyimleri, güncel veri bilimi trendleri ve analitik düşünce üzerine derinlemesine sohbetler.</p>
              </div>
              <div className="h-16 w-16 rounded-2xl border border-border flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-ink group-hover:border-brand-yellow transition-all duration-300 z-10 shrink-0 text-zinc-500 dark:text-zinc-400">
                <ArrowUpRight className="h-6 w-6" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 border-t border-border text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 text-foreground">
          Hazırsan <span className="italic text-brand-yellow">Başlayalım.</span>
        </h2>
        <Link href="/topluluk/ekibimiz" className="group flex items-center gap-4 text-xl font-medium tracking-wide uppercase border-b border-brand-yellow pb-2 hover:text-brand-yellow transition-colors text-foreground">
          Ekiple Tanış <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>

    </div>
  );
}

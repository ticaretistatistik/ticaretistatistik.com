import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Sözlük | Bakımda",
  description: "İstatistik ve veri bilimi sözlüğü şu anda bakımda.",
};

export default function SozlukPage() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden pt-16">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      </div>
      
      <div className="container-custom relative z-10 py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-accent" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Büyük Güncelleme
          </span>
        </div>
        
        {/* Main Content */}
        <div className="relative mb-8">
          <div className="absolute -top-8 -left-10 text-slate-100 dark:text-slate-800/40">
            <BookOpen className="w-28 h-28 rotate-[-15deg] opacity-50" />
          </div>
          <h1 className="relative text-5xl md:text-7xl font-bold tracking-tighter text-brand-ink dark:text-white mb-6">
            Kapsamlı <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-600 dark:to-brand-light">Sözlük</span> <br/>Çok Yakında.
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
          İstatistik, veri bilimi ve yapay zeka alanındaki yüzlerce terimi barındıran altyapımızı, sizlere çok daha hızlı ve zengin bir deneyim sunmak için baştan aşağı yeniliyoruz.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link 
            href="/blog" 
            className="flex items-center justify-center space-x-2 rounded-lg font-medium transition-all bg-brand-ink text-white dark:bg-white dark:text-brand-ink hover:opacity-90 h-12 px-8 w-full sm:w-auto shadow-md hover:shadow-lg"
          >
            <span>İçeriklere Göz Atın</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/" 
            className="flex items-center justify-center space-x-2 rounded-lg font-medium transition-all border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 h-12 px-8 w-full sm:w-auto"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>

        {/* Separator / Status indicator */}
        <div className="mt-24 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 w-full max-w-md flex justify-center">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Arka planda çalışmalarımız sürüyor
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

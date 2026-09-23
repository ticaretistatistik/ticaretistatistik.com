import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı',
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 dark:bg-background relative overflow-hidden">
      {/* Background 404 Watermark */}
      <div className="absolute pointer-events-none select-none opacity-[0.03] dark:opacity-[0.02] text-[15rem] sm:text-[25rem] md:text-[35rem] font-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 tracking-tighter">
        404
      </div>
      
      {/* Subtle glowing ambient effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-brand-accent/20 dark:bg-brand-accent/10 rounded-full blur-[100px] animate-pulse z-0" style={{ animationDuration: '4s' }}></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        {/* Floating Icon */}
        <div 
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-full mb-8 shadow-sm animate-bounce" 
          style={{ animationDuration: '3s' }}
        >
          <Compass className="w-10 h-10 text-brand-accent" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-brand-ink dark:text-white mb-4 tracking-tight">
          Veri Setinde Bulunamadı
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md leading-relaxed">
          Aradığınız sayfaya ait bir kayıt bulamadık. Bağlantı değişmiş veya sayfa taşınmış olabilir.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-ink dark:bg-white text-white dark:text-brand-ink font-semibold rounded-full hover:scale-105 hover:shadow-xl hover:bg-brand-accent dark:hover:bg-brand-accent hover:text-brand-ink dark:hover:text-brand-ink transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}

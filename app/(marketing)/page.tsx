import Link from "next/link";
import { ArrowRight, Calendar, Users, Mic, BookOpen, ChevronRight } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-brand-ink -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-brand-ink to-brand-ink"></div>
        
        <div className="inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-sm font-medium text-brand-yellow mb-8">
          <span className="flex h-2 w-2 rounded-full bg-brand-yellow mr-2"></span>
          Yeni Dönem Kayıtları Başladı!
        </div>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Verinin Gücünü <br className="hidden md:block" />
          <span className="text-brand-yellow font-serif italic">Birlikte Keşfedelim</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
          İstanbul Ticaret Üniversitesi İstatistik Topluluğu'na hoş geldin! Veri bilimi eğitimleri, 
          sektör buluşmaları, podcastler ve zengin dokümantasyon arşivimizle seni geleceğe hazırlıyoruz.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/topluluk/etkinliklerimiz" className="inline-flex items-center justify-center rounded-md text-brand-ink bg-brand-yellow hover:bg-brand-yellow/90 font-bold px-8 py-3 w-full sm:w-auto transition-colors">
            Etkinliklere Katıl
          </Link>
          <Link href="/docs" className="inline-flex items-center justify-center rounded-md text-white border border-zinc-700 bg-white/5 hover:bg-white/10 font-medium px-8 py-3 w-full sm:w-auto transition-colors">
            Dokümanları İncele <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="border-y border-zinc-800 bg-white/5">
        <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800/0 md:divide-zinc-800">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-brand-yellow mb-2">350+</span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Aktif Üye</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-brand-yellow mb-2">24</span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Yıllık Etkinlik</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-brand-yellow mb-2">50+</span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Eğitim İçeriği</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-brand-yellow mb-2">12</span>
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Podcast Bölümü</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-4 container mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Toplulukta Neler Var?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Teorik bilginin pratikle buluştuğu, sektör profesyonelleriyle öğrencilerin bir araya geldiği dinamik bir ekosistem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/docs" className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-yellow transition-colors">Açık Kaynak Dokümanlar</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Python, R, SPSS ve Tableau gibi veri bilimi araçları için öğrencilerimiz tarafından hazırlanan Türkçe notlar.</p>
            <span className="text-brand-yellow text-sm font-medium flex items-center">İncele <ChevronRight className="ml-1 h-4 w-4" /></span>
          </Link>

          <Link href="/topluluk/etkinliklerimiz" className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-yellow transition-colors">Etkinlikler & Datathon</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Sektör liderleriyle söyleşiler, veri analizi yarışmaları (Datathon) ve teknik workshop duyuruları.</p>
            <span className="text-brand-yellow text-sm font-medium flex items-center">Takvimi Gör <ChevronRight className="ml-1 h-4 w-4" /></span>
          </Link>

          <a href="https://open.spotify.com/show/..." target="_blank" rel="noreferrer" className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <Mic className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-yellow transition-colors">İstatistiğin Sesi Podcast</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Mezunlarımız ve akademisyenlerimizle veri biliminin geleceği üzerine keyifli sohbetler dinleyin.</p>
            <span className="text-brand-yellow text-sm font-medium flex items-center">Dinle <ChevronRight className="ml-1 h-4 w-4" /></span>
          </a>

          <Link href="/topluluk/ekibimiz" className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all hover:-translate-y-1">
            <div className="h-12 w-12 rounded-full bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-yellow transition-colors">Yönetim & Ekip</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Topluluğun arkasındaki enerjik ekiple tanışın. Sen de aramıza katılmak için açık pozisyonları incele.</p>
            <span className="text-brand-yellow text-sm font-medium flex items-center">Tanışalım <ChevronRight className="ml-1 h-4 w-4" /></span>
          </Link>
        </div>
      </section>
    </div>
  );
}

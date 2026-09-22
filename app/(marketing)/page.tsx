import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Users, BarChart, Instagram, Linkedin, Database, Binary } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center bg-slate-50 dark:bg-background overflow-x-hidden">
        {/* Dotted Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#94a3b8_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#475569_1px,_transparent_1px)] opacity-20 [background-size:20px_20px]" />

        <div className="relative z-10 pt-20 pb-20 w-full max-w-[1400px] mx-auto">
          <div className="flex relative gap-2 px-6 lg:items-center w-full flex-col justify-center">

            {/* Line 1 */}
            <div className="lg:flex gap-6 items-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 text-start lg:text-right leading-relaxed max-w-[250px] lg:max-w-[200px] mb-4 lg:mb-0">
                İstanbul Ticaret Üniversitesi bünyesinde veri bilimi değerleri üreten topluluk.
              </p>
              <h1 className="text-[clamp(3rem,9vw,9rem)] font-light leading-none tracking-wider text-brand-ink dark:text-white whitespace-nowrap">
                İSTATİSTİK
              </h1>
            </div>

            {/* Line 2 */}
            <div className="lg:flex gap-6 items-center">
              <h1 className="text-[clamp(3rem,9vw,9rem)] flex items-center font-light leading-none tracking-wider text-brand-ink dark:text-white whitespace-nowrap">
                <span>VERİ</span>
                <Database className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 text-brand-accent mx-2 md:mx-3 shrink-0" strokeWidth={1} />
                <span>BİLİMİ</span>
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 pt-4 lg:pt-8 leading-relaxed max-w-[280px] lg:max-w-[220px]">
                Sektör profesyonelleriyle buluşuyor, birlikte öğreniyor ve kendimizi geliştiriyoruz.
              </p>
            </div>

            {/* Line 3 */}
            <div className="lg:flex gap-6 items-center mt-2 lg:mt-0">
              <h1 className="text-[clamp(2rem,5.5vw,6.5rem)] flex items-center font-light leading-none tracking-wider text-brand-ink dark:text-white whitespace-nowrap">
                <span>MAKİNE</span>
                <Binary className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-slate-300 dark:text-slate-700 mx-2 md:mx-3 shrink-0" strokeWidth={1} />
                <span>ÖĞRENMESİ</span>
              </h1>
            </div>

          </div>

          {/* Location & Badge */}
          <div className="mx-auto w-full px-6 gap-3 mt-12 md:mt-20">
            <div className="lg:flex lg:mx-8 grid lg:justify-end items-center gap-4 lg:gap-6">
              <div className="w-full lg:w-[400px] h-px bg-slate-200 dark:bg-slate-800 my-4" />
              <div className="text-xs md:text-sm text-slate-400 font-medium tracking-widest whitespace-nowrap">
                İSTANBUL TİCARET ÜNİVERSİTESİ, SÜTLÜCE
              </div>
              <div className="flex w-full lg:w-auto items-end gap-3">
                <span className="text-2xl md:text-4xl font-thin text-brand-ink dark:text-slate-200">İSTATİSTİK</span>
                <span className="text-3xl md:text-5xl font-bold italic text-brand-accent">
                  topluluğu
                </span>
              </div>
            </div>
          </div>





        </div>
      </section>

      {/* COMMUNITY SUMMARY SECTION */}
      <section className="section-padding bg-white dark:bg-slate-950 relative z-10 border-t border-slate-200 dark:border-slate-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink dark:text-white mb-4">
              Neler Yapıyoruz?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sadece teorik değil, pratik ve sektörel odaklı etkinliklerle üyelerimizin gelişimine katkı sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg hover:border-brand-accent/20 transition-all group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand-accent group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-3">Zirveler ve Paneller</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Sektörün önde gelen veri bilimcileri ve istatistikçilerini ağırladığımız, ufuk açıcı büyük ölçekli etkinlikler düzenliyoruz.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg hover:border-brand-accent/20 transition-all group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand-accent group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-3">Eğitim ve Atölyeler</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Python, R, SQL, PowerBI gibi alanlarda uygulamalı atölyeler ve bootcamp programları ile teknik becerilerimizi geliştiriyoruz.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg hover:border-brand-accent/20 transition-all group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand-accent group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-ink dark:text-white mb-3">Network Ağları</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Mezunlarımız ve sektör profesyonelleri ile güçlü bağlar kuruyor, staj ve kariyer fırsatları için köprü oluşturuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="section-padding bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-ink dark:text-white mb-6 tracking-tight">
              İçeriklerimizi Keşfedin
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Eğitim materyallerimiz, teknik yazılarımız ve özenle hazırlanan dokümanlarımızla veri bilimi yolculuğunuza hız katın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Blog Card - Spans 2 columns on tablet/desktop */}
            <Link href="/blog" className="md:col-span-2 group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500 min-h-[280px] p-8">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 text-brand-accent">
                <BookOpen className="w-32 h-32" />
              </div>
              <div className="relative z-10 mt-auto">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-brand-ink dark:text-white group-hover:bg-brand-accent group-hover:text-brand-ink transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-brand-ink dark:text-white mb-3">Blog ve Makaleler</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                  Öğrencilerimizden ve sektörden teknik yazılar, pratik ipuçları ve veri bilimi üzerine kapsamlı analizler.
                </p>
              </div>
            </Link>

            {/* Dokümanlar Card */}
            <Link href="/docs" className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500 min-h-[280px] p-8">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-brand-ink dark:text-white">
                <Database className="w-24 h-24" />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold text-brand-ink dark:text-white mb-3 group-hover:text-brand-accent transition-colors">
                  Dokümanlar
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Bootcamp notları, cheat sheet'ler ve rehberler.
                </p>
              </div>
            </Link>

            {/* Sözlük Card */}
            <Link href="/sozluk" className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-brand-ink text-white border border-brand-ink dark:border-slate-800 hover:shadow-xl hover:shadow-brand-ink/20 transition-all duration-500 min-h-[240px] p-8">
              <div className="relative z-10 mt-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                  Çok Yakında
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-accent transition-colors">
                  İstatistik Sözlüğü
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Öğrencilerimizin katkılarıyla hazırlanan açık kaynaklı terimler sözlüğü.
                </p>
              </div>
            </Link>

            {/* Arşiv Card */}
            <Link href="/arsiv" className="md:col-span-2 group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-brand-accent/10 dark:bg-brand-accent/5 border border-brand-accent/20 hover:bg-brand-accent/20 hover:border-brand-accent/30 transition-all duration-500 min-h-[240px] p-8">
              <div className="absolute bottom-0 right-0 p-8 opacity-20 group-hover:opacity-30 group-hover:-translate-y-2 transition-all duration-500 text-brand-accent">
                <Binary className="w-32 h-32" />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-bold text-brand-ink dark:text-white mb-3">
                  Etkinlik Arşivi
                </h3>
                <p className="text-brand-ink/70 dark:text-slate-400 max-w-md">
                  Geçmişte düzenlediğimiz zirveler, paneller ve atölyelerden geriye kalanlar, sunumlar ve özetler.
                </p>
              </div>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
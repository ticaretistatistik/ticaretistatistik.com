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
              <h1 className="text-[clamp(3rem,9vw,9rem)] font-light leading-none tracking-wider text-brand-navy dark:text-white whitespace-nowrap">
                İSTATİSTİK
              </h1>
            </div>

            {/* Line 2 */}
            <div className="lg:flex gap-6 items-center">
              <h1 className="text-[clamp(3rem,9vw,9rem)] flex items-center font-light leading-none tracking-wider text-brand-navy dark:text-white whitespace-nowrap">
                <span>VERİ</span>
                <Database className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 text-brand-blue mx-2 md:mx-3 shrink-0" strokeWidth={1} />
                <span>BİLİMİ</span>
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 pt-4 lg:pt-8 leading-relaxed max-w-[280px] lg:max-w-[220px]">
                Sektör profesyonelleriyle buluşuyor, birlikte öğreniyor ve kendimizi geliştiriyoruz.
              </p>
            </div>

            {/* Line 3 */}
            <div className="lg:flex gap-6 items-center mt-2 lg:mt-0">
              <h1 className="text-[clamp(2rem,5.5vw,6.5rem)] flex items-center font-light leading-none tracking-wider text-brand-navy dark:text-white whitespace-nowrap">
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
                <span className="text-2xl md:text-4xl font-thin text-brand-navy dark:text-slate-200">İSTATİSTİK</span>
                <span className="text-3xl md:text-5xl font-bold italic text-brand-blue">
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Neler Yapıyoruz?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sadece teorik değil, pratik ve sektörel odaklı etkinliklerle üyelerimizin gelişimine katkı sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg hover:border-brand-blue/20 transition-all group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand-blue group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-3">Zirveler ve Paneller</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Sektörün önde gelen veri bilimcileri ve istatistikçilerini ağırladığımız, ufuk açıcı büyük ölçekli etkinlikler düzenliyoruz.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg hover:border-brand-blue/20 transition-all group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand-blue group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-3">Eğitim ve Atölyeler</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Python, R, SQL, PowerBI gibi alanlarda uygulamalı atölyeler ve bootcamp programları ile teknik becerilerimizi geliştiriyoruz.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-lg hover:border-brand-blue/20 transition-all group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand-blue group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white mb-3">Network Ağları</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Mezunlarımız ve sektör profesyonelleri ile güçlü bağlar kuruyor, staj ve kariyer fırsatları için köprü oluşturuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white">
                İçeriklerimizi Keşfedin
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Eğitim materyallerimiz, veri bilimi üzerine yazılarımız ve geçmiş etkinliklerimizin özetlerine tek bir noktadan ulaşın.
              </p>

              <ul className="space-y-4 pt-4 mb-8">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <div className="mr-4 bg-brand-blue/10 p-2 rounded-full text-brand-blue">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Kapsamlı ders notları ve dokümanlar</span>
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <div className="mr-4 bg-brand-blue/10 p-2 rounded-full text-brand-blue">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Veri analizi proje örnekleri</span>
                </li>
              </ul>
              
              <div className="flex gap-4">
                <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group">
                  <Instagram className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://linkedin.com/company/iticu-istatistik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group">
                  <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-white" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://tiktok.com/@iticu.istatistik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.15 1.53.84 2.94 1.95 3.96 1.05.97 2.45 1.57 3.95 1.63v4.06c-1.63-.03-3.23-.48-4.6-1.3-.01 2.53-.02 5.06-.01 7.59.04 2.8-1.07 5.46-3.13 7.37-2.02 1.88-4.8 2.87-7.59 2.67-2.61-.19-5.06-1.42-6.72-3.41-1.6-1.93-2.39-4.44-2.19-7.01.23-2.64 1.56-5 3.59-6.65 1.93-1.56 4.41-2.32 6.91-2.13.01 1.34.02 2.68.02 4.02-1.3-.12-2.63.09-3.79.67-1.12.56-2.02 1.48-2.52 2.61-.48 1.13-.57 2.4-.24 3.56.32 1.12 1.05 2.08 2.05 2.65 1.02.58 2.22.75 3.34.48 1.07-.26 2.01-.93 2.6-1.87.57-.91.86-2.01.83-3.11-.02-5.46-.01-10.92-.01-16.38Z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Link href="/blog" className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-blue hover:shadow-md transition-all group">
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2 flex items-center justify-between">
                  Blog
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Öğrencilerimizden teknik yazılar, sektörel yorumlar ve makaleler.</p>
              </Link>

              <Link href="/docs" className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-blue hover:shadow-md transition-all group">
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white mb-2 flex items-center justify-between">
                  Dokümanlar
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Atölye sunumları, eğitim setleri ve pratik kaynakçalar.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Users, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-40 overflow-hidden bg-slate-50 dark:bg-slate-900/20">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-sm text-brand-blue mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
            Yeni dönem kayıtlarımız başladı!
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy dark:text-white mb-6 max-w-4xl">
            Veriyle <span className="text-brand-blue">Geleceği</span> <br className="hidden md:block" /> Şekillendiriyoruz
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
            İstanbul Ticaret Üniversitesi İstatistik Topluluğu olarak, veri bilimi ve istatistik alanında kendimizi geliştiriyor, sektör profesyonelleriyle buluşuyor ve birlikte öğreniyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/etkinlikler" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue/90 text-white font-medium h-12 px-8 rounded-lg transition-colors"
            >
              Etkinliklerimizi İncele
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/ekibimiz" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-brand-navy dark:text-white font-medium border border-slate-200 dark:border-slate-700 h-12 px-8 rounded-lg transition-colors"
            >
              Ekibimizle Tanış
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY SUMMARY SECTION */}
      <section className="section-padding bg-white dark:bg-background">
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
              
              <ul className="space-y-4 pt-4">
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

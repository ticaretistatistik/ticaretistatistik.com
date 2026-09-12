import Link from "next/link";
import { ArrowRight, BookOpen, Terminal, LineChart } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100">
          İstatistik ve Veri Bilimi <br className="hidden md:block" /> 
          <span className="text-zinc-500">Kılavuzunuz</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Ticaret Üniversitesi İstatistik Bölümü için hazırlanan modern, hızlı ve temiz kaynak havuzu. 
          JASP, Python, R ve daha fazlası.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/docs" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-zinc-100 text-zinc-900 shadow hover:bg-zinc-100/90 h-10 px-8 py-2 w-full sm:w-auto">
            Dokümantasyona Git <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a href="https://github.com/ticaretistatistik" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-zinc-800 bg-transparent shadow-sm hover:bg-zinc-800 hover:text-zinc-50 h-10 px-8 py-2 w-full sm:w-auto text-zinc-300">
            GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
        <div className="flex flex-col items-center text-center p-6 border border-zinc-800 rounded-xl bg-zinc-900/50">
          <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-zinc-100" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Modern Dokümantasyon</h3>
          <p className="text-zinc-400 text-sm">MDX tabanlı, hızlı okunan ve göz yormayan karanlık mod tasarımı ile yazılımları kolayca öğrenin.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-zinc-800 rounded-xl bg-zinc-900/50">
          <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
            <Terminal className="h-6 w-6 text-zinc-100" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Geliştirici Odaklı</h3>
          <p className="text-zinc-400 text-sm">Kod blokları, syntax renklendirme ve kolay kopyalama araçlarıyla Python ve R scriptlerinizi inceleyin.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-zinc-800 rounded-xl bg-zinc-900/50">
          <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
            <LineChart className="h-6 w-6 text-zinc-100" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Pratik ve Akademik</h3>
          <p className="text-zinc-400 text-sm">Teorik istatistik kavramlarını pratik uygulamalarla ve JASP/SPSS veri setleri ile harmanlayarak kavrayın.</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-black/5 dark:bg-brand-ink/50 py-12 px-4 transition-colors">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif font-bold text-xl text-foreground">
                Ticaret<span className="text-brand-yellow italic">İstatistik</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              İstanbul Ticaret Üniversitesi İstatistik Bölümü Topluluğu. <br />
              Birlikte öğreniyor, veriyi geleceğe dönüştürüyoruz.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ticaretistatistik" className="text-zinc-500 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/i%CC%87statistik-toplulu%C4%9Futic" className="text-zinc-500 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/ticaretistatistik" className="text-zinc-500 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Topluluk</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/topluluk/hakkimizda" className="hover:text-brand-yellow transition-colors">Hakkımızda</Link></li>
              <li><Link href="/topluluk/ekibimiz" className="hover:text-brand-yellow transition-colors">Yönetim Kurulu</Link></li>
              <li><Link href="/topluluk/etkinliklerimiz" className="hover:text-brand-yellow transition-colors">Etkinlik Takvimi</Link></li>
              <li><a href="https://open.spotify.com/show/..." className="hover:text-brand-yellow transition-colors">Podcast</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Kaynaklar</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/docs/python" className="hover:text-brand-yellow transition-colors">Python Notları</Link></li>
              <li><Link href="/docs/r" className="hover:text-brand-yellow transition-colors">R Notları</Link></li>
              <li><Link href="/docs/jasp" className="hover:text-brand-yellow transition-colors">JASP Dokümantasyonu</Link></li>
              <li><a href="https://hesapla.ticaretistatistik.com" className="hover:text-brand-yellow transition-colors">Not Hesaplayıcı</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:iletisim@ticaretistatistik.com" className="hover:text-brand-yellow transition-colors">iletisim@ticaretistatistik.com</a>
              </li>
              <li className="mt-4 p-4 border border-border rounded-lg bg-white dark:bg-zinc-900/50">
                <span className="block text-foreground font-medium mb-1">Aramıza Katıl</span>
                <span className="block text-xs text-zinc-500 mb-3">Topluluk whatsapp grubuna katılmak için DM atın.</span>
                <a href="https://instagram.com/ticaretistatistik" className="text-xs font-bold text-brand-ink bg-brand-yellow px-3 py-1.5 rounded-full hover:bg-brand-yellow/80 transition-colors inline-block">DM Gönder</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Ticaret İstatistik Topluluğu. Tüm hakları saklıdır.</p>
          <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

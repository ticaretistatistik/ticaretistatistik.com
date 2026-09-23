import Link from "next/link";
import { Github, Instagram, Mail, MapPin, BarChart2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & About */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4 group">
              <img 
                src="/static/img/istatistik_ticaret_seffaf_sari_logo.png" 
                alt="İstatistik Topluluğu" 
                className="h-12 w-auto transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              İstanbul Ticaret Üniversitesi İstatistik Bölümü öğrencileri tarafından kurulan, veri bilimi ve istatistik alanında değer üreten öğrenci topluluğu.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/iticu-istatistik" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:ticaretstat@gmail.com" className="text-slate-400 hover:text-brand-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-brand-ink dark:text-white mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/etkinlikler" className="hover:text-brand-accent transition-colors">Yaklaşan Etkinlikler</Link>
              </li>
              <li>
                <Link href="/arsiv" className="hover:text-brand-accent transition-colors">Geçmiş Etkinlikler</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-accent transition-colors">Blog Yazıları</Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-brand-accent transition-colors">Eğitim Dokümanları</Link>
              </li>
              <li>
                <Link href="/ekibimiz" className="hover:text-brand-accent transition-colors">Yönetim Kurulu</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-brand-ink dark:text-white mb-4">Kaynaklar</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href="https://ticaret.edu.tr" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">Üniversite Web Sitesi</a>
              </li>
              <li>
                <a href="https://ticaret.edu.tr/istatistik" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition-colors">İstatistik Bölümü</a>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-brand-accent transition-colors">Topluluk Tüzüğü</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-ink dark:text-white mb-4">İletişim</h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-brand-accent shrink-0" />
                <span>Sütlüce Yerleşkesi, İmrahor Cd. No:90, 34445 Beyoğlu/İstanbul</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-accent shrink-0" />
                <a href="mailto:ticaretstat@gmail.com" className="hover:text-brand-accent transition-colors">ticaretstat@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} İstanbul Ticaret Üniversitesi İstatistik Topluluğu. Tüm hakları saklıdır.</p>
          <p className="flex items-center">
            Geliştirici: <a href="https://github.com/ticaretistatistik" className="ml-1 text-brand-ink dark:text-white hover:text-brand-accent transition-colors font-medium">İstatistik Topluluğu Veri ve Gelişim Birimi</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

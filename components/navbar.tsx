"use client";

import Link from "next/link";
import { Search, Github, Instagram, Menu, X, BarChart2, ChevronDown, ExternalLink, Calendar, BookOpen, BookText, Users, FolderArchive, FileText, Calculator, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-bold text-lg text-brand-ink dark:text-white tracking-tight">
              İstatistik<span className="text-brand-accent">Ticaret</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/etkinlikler" className="transition-colors hover:text-brand-accent text-zinc-600 dark:text-zinc-300">
              Etkinlikler
            </Link>
            <Link href="/blog" className="transition-colors hover:text-brand-accent text-zinc-600 dark:text-zinc-300">
              Blog
            </Link>
            <Link href="/sozluk" className="transition-colors hover:text-brand-accent text-zinc-600 dark:text-zinc-300">
              Sözlük
            </Link>
            <Link href="/ekibimiz" className="transition-colors hover:text-brand-accent text-zinc-600 dark:text-zinc-300">
              Ekibimiz
            </Link>
            
            {/* Kaynaklar Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 transition-colors hover:text-brand-accent text-zinc-600 dark:text-zinc-300 h-16">
                Kaynaklar
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full -mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg py-2 mt-1">
                  <Link href="/docs" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent">
                    Dokümanlar
                  </Link>
                  <Link href="/arsiv" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent">
                    Arşiv
                  </Link>
                  <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-1"></div>
                  <a href="https://istanbulticaretuniversitesi.edupage.org/timetable/" target="_blank" rel="noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>Ders Programı</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <a href="https://hesapla.ticaretistatistik.com" target="_blank" rel="noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>Not Hesaplama</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                </div>
              </div>
            </div>
            {/* Müfredatlar Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 transition-colors hover:text-brand-accent text-zinc-600 dark:text-zinc-300 h-16">
                Müfredatlar
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full -mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg py-2 mt-1">
                  <a href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2025/10/2025-2026-Istatistik-Bolumu-Mufredat.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>2025-2026</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <a href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2024/10/2024-2025-Istatistik-Mufredat.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>2024-2025</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <a href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2023/09/Istatislik.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>2023-2024</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <a href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2022/09/2022-2023_Istatistik_Mufredati.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>2022-2023</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                  <a href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2022/01/2021-2022_ISTATISTIK_Mufredat.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-brand-accent flex items-center justify-between">
                    <span>2021-2022</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden sm:flex flex-1 md:w-auto md:flex-none">
            <button 
              onClick={() => window.dispatchEvent(new Event('open-search'))}
              className="inline-flex items-center justify-between rounded-full font-medium transition-colors border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 px-4 py-2 w-48 lg:w-64 text-sm text-zinc-500 dark:text-zinc-400 relative"
            >
              <span className="hidden lg:inline-flex">Sitede ara...</span>
              <span className="inline-flex lg:hidden">Ara...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-2 font-mono text-[10px] font-medium sm:flex text-zinc-500 dark:text-zinc-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          <nav className="flex items-center gap-1">
            <ThemeToggle />
            <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-brand-accent h-9 w-9 text-zinc-600 dark:text-zinc-400">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/ticaretistatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-brand-accent h-9 w-9 text-zinc-600 dark:text-zinc-400">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            
            {/* Search Icon for Mobile */}
            <button 
              onClick={() => window.dispatchEvent(new Event('open-search'))}
              className="sm:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 w-9 text-zinc-600 dark:text-zinc-400"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Ara</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 w-9 text-zinc-600 dark:text-zinc-400 ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menü</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-h-[80vh] overflow-y-auto">
          <nav className="container-custom flex flex-col px-4 py-6">
            <div className="flex flex-col space-y-1 mb-2">
              <Link 
                href="/etkinlikler" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5 opacity-70" />
                Etkinlikler
              </Link>
              <Link 
                href="/blog" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5 opacity-70" />
                Blog
              </Link>
              <Link 
                href="/sozluk" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookText className="w-5 h-5 opacity-70" />
                Sözlük
              </Link>
              <Link 
                href="/ekibimiz" 
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5 opacity-70" />
                Ekibimiz
              </Link>
            </div>
            
            <div className="pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 px-3">Kaynaklar</div>
              <div className="flex flex-col space-y-1">
                <Link 
                  href="/docs" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileText className="w-4 h-4 opacity-70" />
                  Dokümanlar
                </Link>
                <Link 
                  href="/arsiv" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FolderArchive className="w-4 h-4 opacity-70" />
                  Arşiv
                </Link>
                <a 
                  href="https://istanbulticaretuniversitesi.edupage.org/timetable/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="w-4 h-4 opacity-70" />
                  <span className="flex-1">Ders Programı</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
                <a 
                  href="https://hesapla.ticaretistatistik.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calculator className="w-4 h-4 opacity-70" />
                  <span className="flex-1">Not Hesaplama</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
              </div>
            </div>
            
            <div className="pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 px-3">Müfredatlar</div>
              <div className="flex flex-col space-y-1">
                <a 
                  href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2025/10/2025-2026-Istatistik-Bolumu-Mufredat.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-4 h-4 opacity-70" />
                  <span className="flex-1">2025-2026</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
                <a 
                  href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2024/10/2024-2025-Istatistik-Mufredat.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-4 h-4 opacity-70" />
                  <span className="flex-1">2024-2025</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
                <a 
                  href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2023/09/Istatislik.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-4 h-4 opacity-70" />
                  <span className="flex-1">2023-2024</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
                <a 
                  href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2022/09/2022-2023_Istatistik_Mufredati.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-4 h-4 opacity-70" />
                  <span className="flex-1">2022-2023</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
                <a 
                  href="https://ticaret.edu.tr/istatistik/wp-content/uploads/sites/30/2022/01/2021-2022_ISTATISTIK_Mufredat.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-accent text-zinc-600 dark:text-zinc-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="w-4 h-4 opacity-70" />
                  <span className="flex-1">2021-2022</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 pt-6 mt-4 border-t border-zinc-200 dark:border-zinc-800">
              <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-brand-accent hover:bg-brand-accent/10 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/ticaretistatistik" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-brand-accent hover:bg-brand-accent/10 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

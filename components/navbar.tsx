"use client";

import Link from "next/link";
import { Search, Github, Instagram, Menu, X, BarChart2, ChevronDown } from "lucide-react";
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
            <span className="font-bold text-lg text-brand-ink dark:text-white tracking-tight hidden sm:block">
              İstatistik<span className="text-brand-accent">Ticaret</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/etkinlikler" className="transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300">
              Etkinlikler
            </Link>
            <Link href="/blog" className="transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300">
              Blog
            </Link>
            <Link href="/ekibimiz" className="transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300">
              Ekibimiz
            </Link>
            
            {/* Kaynaklar Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300 h-16">
                Kaynaklar
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full -mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg py-2 mt-1">
                  <Link href="/docs" className="px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-accent">
                    Dokümanlar
                  </Link>
                  <Link href="/arsiv" className="px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-accent">
                    Arşiv
                  </Link>
                  <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                  <a href="https://istanbulticaretuniversitesi.edupage.org/timetable/" target="_blank" rel="noreferrer" className="px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-accent flex items-center justify-between">
                    Ders Programı
                  </a>
                  <a href="https://hesapla.ticaretistatistik.com" target="_blank" rel="noreferrer" className="px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-accent flex items-center justify-between">
                    Not Hesaplama
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden sm:flex flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center justify-between rounded-full font-medium transition-colors border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 h-9 px-4 py-2 w-48 lg:w-64 text-sm text-slate-500 dark:text-slate-400 relative">
              <span className="hidden lg:inline-flex">Sitede ara...</span>
              <span className="inline-flex lg:hidden">Ara...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-2 font-mono text-[10px] font-medium sm:flex text-slate-500 dark:text-slate-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          <nav className="flex items-center gap-1">
            <ThemeToggle />
            <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-accent h-9 w-9 text-slate-600 dark:text-slate-400">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/iticu-istatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-accent h-9 w-9 text-slate-600 dark:text-slate-400">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            
            {/* Search Icon for Mobile */}
            <button className="sm:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 h-9 w-9 text-slate-600 dark:text-slate-400">
              <Search className="h-5 w-5" />
              <span className="sr-only">Ara</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 h-9 w-9 text-slate-600 dark:text-slate-400 ml-1"
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
          <nav className="container-custom flex flex-col space-y-4 py-6">
            <Link 
              href="/etkinlikler" 
              className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Etkinlikler
            </Link>
            <Link 
              href="/blog" 
              className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/ekibimiz" 
              className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ekibimiz
            </Link>
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 px-1">Kaynaklar</div>
              <div className="flex flex-col space-y-3 pl-3 border-l-2 border-slate-100 dark:border-slate-800">
                <Link 
                  href="/docs" 
                  className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dokümanlar
                </Link>
                <Link 
                  href="/arsiv" 
                  className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Arşiv
                </Link>
                <a 
                  href="https://istanbulticaretuniversitesi.edupage.org/timetable/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ders Programı
                </a>
                <a 
                  href="https://hesapla.ticaretistatistik.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-base font-medium transition-colors hover:text-brand-accent text-slate-600 dark:text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Not Hesaplama
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-6 mt-2 border-t border-slate-200 dark:border-slate-800">
              <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-brand-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/iticu-istatistik" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-brand-accent transition-colors">
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

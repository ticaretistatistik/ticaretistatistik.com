"use client";

import Link from "next/link";
import { Search, Github, Instagram, Menu, X, BarChart2 } from "lucide-react";
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
          <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-brand-blue/10 p-2 rounded-lg group-hover:bg-brand-blue/20 transition-colors">
              <BarChart2 className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="font-bold text-lg text-brand-navy dark:text-white tracking-tight hidden sm:block">
              İstatistik<span className="text-brand-blue">Topluluğu</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/etkinlikler" className="transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300">
              Etkinlikler
            </Link>
            <Link href="/blog" className="transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300">
              Blog
            </Link>
            <Link href="/docs" className="transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300">
              Dokümanlar
            </Link>
            <Link href="/arsiv" className="transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300">
              Arşiv
            </Link>
            <Link href="/ekibimiz" className="transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300">
              Ekibimiz
            </Link>
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
            <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue h-9 w-9 text-slate-600 dark:text-slate-400">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/iticu-istatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue h-9 w-9 text-slate-600 dark:text-slate-400">
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
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container-custom flex flex-col space-y-4 py-4">
            <Link 
              href="/etkinlikler" 
              className="text-base font-medium transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Etkinlikler
            </Link>
            <Link 
              href="/blog" 
              className="text-base font-medium transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/docs" 
              className="text-base font-medium transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dokümanlar
            </Link>
            <Link 
              href="/arsiv" 
              className="text-base font-medium transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Arşiv
            </Link>
            <Link 
              href="/ekibimiz" 
              className="text-base font-medium transition-colors hover:text-brand-blue text-slate-600 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ekibimiz
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <a href="https://instagram.com/iticu.istatistik" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/iticu-istatistik" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-colors">
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

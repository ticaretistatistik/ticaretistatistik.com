"use client";

import Link from "next/link";
import { Search, Github, Instagram, Menu, X } from "lucide-react";
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
      className={`fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container flex h-16 max-w-[1400px] items-center justify-between mx-auto px-4 sm:px-8">
        
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-serif font-bold text-lg text-foreground">
              Ticaret<span className="text-brand-yellow italic">İstatistik</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/topluluk/etkinliklerimiz" className="transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300">
              Etkinlikler
            </Link>
            <Link href="/docs" className="transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300">
              Dokümanlar
            </Link>
            <Link href="/blog" className="transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300">
              Blog
            </Link>
            <Link href="/topluluk/ekibimiz" className="transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300">
              Ekibimiz
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Bar - Hidden on very small screens */}
          <div className="hidden sm:flex flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center justify-between rounded-full font-medium transition-colors border border-zinc-200 dark:border-zinc-700 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 h-9 px-4 py-2 w-48 lg:w-64 text-sm text-zinc-500 dark:text-zinc-400 relative">
              <span className="hidden lg:inline-flex">Sitede ara...</span>
              <span className="inline-flex lg:hidden">Ara...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black/20 px-2 font-mono text-[10px] font-medium sm:flex text-zinc-500 dark:text-zinc-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          <nav className="flex items-center gap-1">
            <ThemeToggle />
            <a href="https://instagram.com/ticaretistatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-brand-yellow h-9 w-9 text-zinc-600 dark:text-zinc-400">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/ticaretistatistik" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-brand-yellow h-9 w-9 text-zinc-600 dark:text-zinc-400">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            
            {/* Search Icon for Mobile */}
            <button className="sm:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 h-9 w-9 text-zinc-600 dark:text-zinc-400">
              <Search className="h-5 w-5" />
              <span className="sr-only">Ara</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 h-9 w-9 text-zinc-600 dark:text-zinc-400 ml-1"
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
          <nav className="container flex flex-col space-y-4 p-4 px-6 mx-auto">
            <Link 
              href="/topluluk/etkinliklerimiz" 
              className="text-base font-medium transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Etkinlikler
            </Link>
            <Link 
              href="/docs" 
              className="text-base font-medium transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dokümanlar
            </Link>
            <Link 
              href="/blog" 
              className="text-base font-medium transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/topluluk/ekibimiz" 
              className="text-base font-medium transition-colors hover:text-brand-yellow text-zinc-600 dark:text-zinc-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ekibimiz
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
              <a href="https://instagram.com/ticaretistatistik" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/ticaretistatistik" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
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

"use client";

import Link from "next/link";
import { Search, Github, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-brand-ink/95 backdrop-blur supports-[backdrop-filter]:bg-brand-ink/60 transition-all ${
        scrolled ? "border-zinc-800 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container flex h-16 max-w-[1400px] items-center mx-auto px-4 sm:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <span className="font-serif font-bold text-lg text-white hidden sm:inline-block">
              Ticaret<span className="text-brand-yellow italic">İstatistik</span>
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/topluluk/etkinliklerimiz" className="transition-colors hover:text-brand-yellow text-zinc-300">
              Etkinlikler
            </Link>
            <Link href="/docs" className="transition-colors hover:text-brand-yellow text-zinc-300">
              Dokümanlar
            </Link>
            <Link href="/topluluk/ekibimiz" className="transition-colors hover:text-brand-yellow text-zinc-300">
              Ekibimiz
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center justify-between rounded-full font-medium transition-colors border border-zinc-700 bg-white/5 hover:bg-white/10 h-9 px-4 py-2 w-full md:w-64 text-sm text-zinc-400 relative">
              <span className="hidden lg:inline-flex">Sitede ara...</span>
              <span className="inline-flex lg:hidden">Ara...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded-full border border-zinc-700 bg-black/20 px-2 font-mono text-[10px] font-medium sm:flex text-zinc-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
          <nav className="flex items-center gap-2">
            <a href="https://instagram.com/ticaretistatistik" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-800 hover:text-brand-yellow h-9 w-9 text-zinc-400">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/ticaretistatistik" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-800 hover:text-brand-yellow h-9 w-9 text-zinc-400">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

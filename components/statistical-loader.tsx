"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function StatisticalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Sayfa değişimi tamamlandığında loader'ı kapat
    // Ancak en azından efektin tadını çıkarabilmek için minimum 750ms beklet
    if (!loading) return;

    const elapsed = Date.now() - startTimeRef.current;
    const minDuration = 750; 

    if (elapsed < minDuration) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, minDuration - elapsed);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    // Tıklamaları dinleyip eğer aynı site içi farklı bir linke gidiliyorsa loader'ı aç
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && target.target !== "_blank") {
        try {
          const url = new URL(target.href);
          // Aynı domain ama farklı bir sayfa ise
          if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
            // Anchor linkleri (#) hariç tut
            if (url.pathname === window.location.pathname && url.hash) return;
            startTimeRef.current = Date.now();
            setLoading(true);
          }
        } catch (error) {
          // Göz ardı et
        }
      }
    };
    
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md flex flex-col items-center justify-center">
      {/* İstatistiksel Bar Chart Efekti */}
      <div className="flex items-end gap-2 h-20 mb-8">
        {[30, 80, 50, 100, 60, 40].map((h, i) => (
          <div
            key={i}
            className="w-3 md:w-4 bg-brand-accent rounded-t-sm"
            style={{
              height: `${h}%`,
              animation: `bounceBar 0.8s infinite alternate ${i * 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`
            }}
          />
        ))}
      </div>
      <p className="text-xs md:text-sm font-bold tracking-[0.4em] text-brand-ink/70 dark:text-white/70 uppercase">
        Hesaplanıyor
      </p>
      
      <style>{`
        @keyframes bounceBar {
          0% { transform: scaleY(0.2); transform-origin: bottom; opacity: 0.3; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

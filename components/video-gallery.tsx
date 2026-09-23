"use client";

import { useState } from "react";

const VIDEOS = [
  { 
    id: "rLR2a843wK0", 
    title: "Dijital Çağda İstatistiğin Gücü", 
    category: "Öne Çıkan Panel",
    description: "İstatistik biliminin dijital dönüşüm süreçlerindeki rolü ve geleceğin veri bilimi trendleri üzerine gerçekleştirdiğimiz ufuk açıcı zirvemiz."
  },
  { 
    id: "zLkbLQyRO_E", 
    title: "İstatistik Bölüm Tanıtım Programı", 
    category: "Tanıtım", 
    description: "Bölümümüzü tanımak isteyen aday öğrenciler için hazırladığımız kapsamlı tanıtım programı." 
  },
  { 
    id: "5_6__0P0m50", 
    title: "1 Bölüm 3 Bakış | İstatistik Bölümü", 
    category: "Röportaj", 
    description: "Öğrenci, mezun ve akademisyen gözünden İstatistik bölümü ve kariyer fırsatları." 
  },
  { 
    id: "o35yIj932zk", 
    title: "İstatistik Topluluğu · İstatistik ve Bankacılık", 
    category: "Söyleşi · Kariyer", 
    description: "Bankacılık sektöründe istatistik biliminin yeri ve veri analitiği uygulamaları." 
  },
  { 
    id: "TxGxjlVH4xQ", 
    title: "SHELL Türkiye CEO’su Emre Turanlı ile Soru-Cevap", 
    category: "Söyleşi · Kariyer", 
    description: "Liderlik, kariyer yolculuğu ve enerji sektöründe verinin gücü üzerine keyifli bir söyleşi." 
  },
  { 
    id: "a5lk8IUUzGk", 
    title: "Korona Sürecine Farklı Bir Bakış", 
    category: "Panel", 
    description: "Pandemi sürecinin istatistiksel analizleri ve verilere yansıyan sosyolojik değişimler." 
  },
];

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);

  return (
    <div className="flex flex-col gap-8">
      {/* Main Player */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 flex flex-col lg:flex-row gap-6 shadow-lg">
        <div className="w-full lg:w-2/3 aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
          <iframe 
            key={activeVideo.id} // Re-mount iframe when id changes
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`} 
            title={activeVideo.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col justify-center lg:w-1/3 py-4 px-2">
          <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold tracking-wide uppercase mb-4">
            {activeVideo.category}
          </span>
          <h3 className="text-2xl font-bold text-brand-ink dark:text-white mb-3">
            {activeVideo.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {activeVideo.description}
          </p>
        </div>
      </div>

      {/* Grid of Other Videos (Thumbnails that act as buttons to change the main player) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VIDEOS.map((video) => {
          const isActive = activeVideo.id === video.id;
          return (
            <button
              key={video.id}
              onClick={() => {
                setActiveVideo(video);
                // Optional: Scroll to top of the video gallery smoothly
                window.scrollTo({ top: document.getElementById('video-gallery-section')?.offsetTop || 0, behavior: 'smooth' });
              }}
              className={`text-left bg-white dark:bg-slate-900 rounded-2xl border p-4 flex flex-col transition-all duration-300 ${
                isActive 
                  ? "border-brand-accent shadow-md ring-1 ring-brand-accent" 
                  : "border-slate-200 dark:border-slate-800 hover:border-brand-accent/50 hover:shadow-lg"
              }`}
            >
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 relative group">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                  alt={video.title} 
                  className={`w-full h-full object-cover transition-all duration-300 ${isActive ? "" : "grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"}`} 
                />
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-brand-ink border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="bg-brand-accent text-brand-ink font-bold px-3 py-1 rounded-full text-xs">Şu An Oynatılıyor</span>
                  </div>
                )}
              </div>
              <span className="text-xs font-semibold text-brand-accent mb-2">{video.category}</span>
              <h3 className="text-sm font-bold text-brand-ink dark:text-white leading-tight line-clamp-2">
                {video.title}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}

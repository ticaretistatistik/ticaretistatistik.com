"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    title: "Kampüs Yaşamı"
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    title: "Ekip Çalışması"
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "Veri Bilimi ve Analiz"
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    title: "Sektör Buluşmaları"
  },
];

export function ImageSlider() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      dragFree: true
    }, 
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]
  );

  return (
    <section className="w-full py-12 md:py-24 overflow-hidden relative z-10">
      <div className="mx-auto max-w-[1800px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-8 touch-pan-y cursor-grab active:cursor-grabbing">
            {slides.map((slide, index) => (
              <div 
                className="flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 pl-4 md:pl-8 relative" 
                key={index}
              >
                <div className="relative h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/10">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                  <img 
                    src={slide.src} 
                    alt={slide.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 pointer-events-none">
                    <p className="text-white font-serif text-2xl md:text-4xl font-medium tracking-tight">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

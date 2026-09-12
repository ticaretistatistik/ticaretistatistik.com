import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="container mx-auto max-w-[1000px] px-4 py-24 min-h-[70vh]">
      <div className="text-center mb-16">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow mb-6">
          <Calendar className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Yaklaşan Etkinlikler
        </h1>
        <p className="text-xl text-zinc-400">
          Datathon'lar, sektör liderleriyle buluşmalar ve veri bilimi kampları.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
        <h3 className="text-xl font-medium text-zinc-300 mb-2">Henüz planlanmış bir etkinlik bulunmuyor.</h3>
        <p className="text-zinc-500">Yeni dönem takvimi çok yakında burada duyurulacaktır.</p>
      </div>
    </div>
  );
}

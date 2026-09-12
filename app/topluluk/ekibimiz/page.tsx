import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="container mx-auto max-w-[1000px] px-4 py-24 min-h-[70vh]">
      <div className="text-center mb-16">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow/10 text-brand-yellow mb-6">
          <Users className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Yönetim Kurulu
        </h1>
        <p className="text-xl text-zinc-400">
          Topluluğun arkasındaki enerjik ekip.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 animate-pulse"></div>
            <h3 className="text-lg font-bold text-white mb-1">İsim Soyisim</h3>
            <p className="text-sm font-medium text-brand-yellow mb-3">Yönetim Kurulu Üyesi</p>
            <p className="text-xs text-zinc-500">2026-2027 Dönemi</p>
          </div>
        ))}
      </div>
    </div>
  );
}

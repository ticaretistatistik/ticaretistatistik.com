import { Users, Linkedin, Mail, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "İsim Soyisim",
    role: "Yönetim Kurulu Başkanı",
    period: "2026-2027",
    bio: "Veri bilimi ve istatistik alanında liderlik ve proje yönetimi odaklı çalışmalar yürütür.",
    initials: "İS",
    socials: { linkedin: "#", twitter: "#", mail: "mailto:iletisim@ornek.com" }
  },
  {
    id: 2,
    name: "İsim Soyisim",
    role: "Başkan Yardımcısı",
    period: "2026-2027",
    bio: "Eğitim ve etkinlik operasyonlarının planlanmasından ve koordinasyonundan sorumlu.",
    initials: "İS",
    socials: { linkedin: "#", twitter: "#", mail: "mailto:iletisim@ornek.com" }
  },
  {
    id: 3,
    name: "İsim Soyisim",
    role: "Eğitim Koordinatörü",
    period: "2026-2027",
    bio: "İstatistik ve yazılım alanlarındaki atölyelerin içerik ve takvimini düzenler.",
    initials: "İS",
    socials: { linkedin: "#", twitter: "#", mail: "mailto:iletisim@ornek.com" }
  },
  {
    id: 4,
    name: "İsim Soyisim",
    role: "İletişim Sorumlusu",
    period: "2026-2027",
    bio: "Sosyal medya yönetimi, dijital pazarlama ve topluluk içi iletişimi sağlar.",
    initials: "İS",
    socials: { linkedin: "#", twitter: "#", mail: "mailto:iletisim@ornek.com" }
  },
  {
    id: 5,
    name: "İsim Soyisim",
    role: "Teknik Sorumlu",
    period: "2026-2027",
    bio: "Web altyapısı, sistem yönetimi ve açık kaynak projelerin geliştirilmesine liderlik eder.",
    initials: "İS",
    socials: { linkedin: "#", twitter: "#", mail: "mailto:iletisim@ornek.com" }
  },
  {
    id: 6,
    name: "İsim Soyisim",
    role: "Finans Sorumlusu",
    period: "2026-2027",
    bio: "Sponsorluk görüşmeleri, kaynak yönetimi ve etkinlik bütçelerini planlar.",
    initials: "İS",
    socials: { linkedin: "#", twitter: "#", mail: "mailto:iletisim@ornek.com" }
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto max-w-[1200px] px-4 py-24 min-h-[70vh]">
      <div className="text-center mb-20">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10 text-brand-yellow mb-6 border border-brand-yellow/20 shadow-[0_0_30px_rgba(250,204,21,0.1)]">
          <Users className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
          Yönetim <span className="text-brand-yellow">Kurulu</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Topluluğumuzun vizyonunu gerçeğe dönüştüren, istatistik ve veri bilimine tutkulu enerjik ekibimizle tanışın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="group relative flex flex-col items-center text-center p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-800/50 hover:border-brand-yellow/30 hover:shadow-[0_8px_40px_rgba(250,204,21,0.05)]"
          >
            {/* Avatar Section */}
            <div className="relative w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-2xl group-hover:bg-brand-yellow/30 transition-colors duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative w-full h-full rounded-full bg-zinc-900 border-2 border-zinc-800 group-hover:border-brand-yellow/50 transition-colors duration-500 flex items-center justify-center overflow-hidden shadow-xl">
                  {/* Avatar Placeholder */}
                  <span className="text-3xl font-serif font-semibold text-zinc-500 group-hover:text-brand-yellow transition-colors duration-500">{member.initials}</span>
              </div>
            </div>

            {/* Info Section */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors duration-300">{member.name}</h3>
            
            <div className="flex flex-col items-center gap-2 mb-5">
              <span className="text-sm font-semibold text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full">
                {member.role}
              </span>
              <span className="text-xs text-zinc-500 font-medium">
                {member.period} Dönemi
              </span>
            </div>
            
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow px-2">
              {member.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-auto">
              {member.socials.linkedin && (
                <a 
                  href={member.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300 hover:scale-110"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.socials.twitter && (
                <a 
                  href={member.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all duration-300 hover:scale-110"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {member.socials.mail && (
                <a 
                  href={member.socials.mail} 
                  className="p-2.5 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-zinc-900 hover:bg-brand-yellow transition-all duration-300 hover:scale-110"
                  aria-label={`${member.name} Email`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

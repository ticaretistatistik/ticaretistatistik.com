import { Linkedin, Mail, Twitter } from "lucide-react";

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
    <div className="min-h-screen pt-24 pb-32 text-zinc-50">
      <div className="container mx-auto max-w-[1100px] px-6">
        
        {/* Header Section */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">
              Yönetim Kurulu.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              Topluluğumuzun vizyonunu gerçeğe dönüştüren, istatistik ve veri bilimine tutkulu ekibimiz.
            </p>
          </div>
          <div className="text-zinc-500 font-medium tracking-wide text-sm uppercase">
            2026 — 2027
          </div>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col">
              
              {/* Image Placeholder */}
              <div className="relative w-full aspect-[4/5] bg-zinc-900 rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 bg-zinc-800/50 flex items-center justify-center">
                  <span className="text-5xl font-light text-zinc-700 select-none">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <span className="text-sm text-zinc-500 font-medium mb-4">
                  {member.role}
                </span>
                
                <p className="text-base text-zinc-400 font-light leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-5 mt-auto">
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      className="text-zinc-500 hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a 
                      href={member.socials.twitter} 
                      className="text-zinc-500 hover:text-white transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                  {member.socials.mail && (
                    <a 
                      href={member.socials.mail} 
                      className="text-zinc-500 hover:text-white transition-colors duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

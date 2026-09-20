import { Metadata } from "next";
import { Linkedin, Twitter, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description: "İstatistik Topluluğu yönetim kurulu ve koordinatörleri.",
};

// Fallback dummy data if Velite 'team' collection is empty
const dummyTeam = [
  {
    name: "Ahmet Yılmaz",
    role: "Yönetim Kurulu Başkanı",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Ayşe Demir",
    role: "Başkan Yardımcısı",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Mehmet Kaya",
    role: "Eğitim Koordinatörü",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Zeynep Çelik",
    role: "Etkinlik Koordinatörü",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Caner Öztürk",
    role: "Sosyal Medya Sorumlusu",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Elif Şahin",
    role: "Proje Yöneticisi",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: null,
  }
];

export default async function TeamPage() {
  // To avoid build errors if velite data isn't fully synced yet, we dynamically import or use fallback.
  // In a real scenario with content, you would use:
  // import { team } from "#site/content";
  // const members = team.length > 0 ? team.sort((a, b) => a.order - b.order) : dummyTeam;
  
  let members = dummyTeam;
  try {
    const siteContent = await import("#site/content");
    if (siteContent.team && siteContent.team.length > 0) {
      members = siteContent.team.sort((a, b) => a.order - b.order);
    }
  } catch (e) {
    // Fallback to dummy data
  }

  return (
    <div className="bg-slate-50 dark:bg-background min-h-screen">
      <div className="container-custom pt-12 pb-24">
        
        {/* Header Section */}
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-brand-blue/10 p-3 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy dark:text-white mb-6">
            Ekibimizle Tanışın
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Topluluğumuzun vizyonunu ileriye taşıyan, veri bilimine tutkulu ve çalışkan yönetim kurulu üyelerimiz.
          </p>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-lg relative group-hover:border-brand-blue transition-colors">
                {member.image ? (
                  <img 
                    src={typeof member.image === 'string' ? member.image : (member.image as any).src} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/5 text-brand-blue text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-1 group-hover:text-brand-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                {member.role}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 mt-auto">
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                )}
                {member.twitter && (
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="sr-only">Twitter</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Linkedin, Mail, Twitter } from "lucide-react";
import teamMembers from "@/data/team.json";

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 text-zinc-900 dark:text-zinc-50">
      <div className="container mx-auto max-w-[1100px] px-6">
        
        {/* Header Section */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 dark:border-white/10 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black dark:text-white mb-6">
              Yönetim Kurulu.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Topluluğumuzun vizyonunu gerçeğe dönüştüren, istatistik ve veri bilimine tutkulu ekibimiz.
            </p>
          </div>
          <div className="text-zinc-400 dark:text-zinc-500 font-medium tracking-wide text-sm uppercase">
            2026 — 2027
          </div>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col">
              
              {/* Image Placeholder */}
              <div className="relative w-full aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-6 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 bg-zinc-200/50 dark:bg-zinc-800/50 flex items-center justify-center">
                  <span className="text-5xl font-light text-zinc-400 dark:text-zinc-700 select-none">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-black dark:text-white mb-1 tracking-tight">
                  {member.name}
                </h3>
                <span className="text-sm text-zinc-500 font-medium mb-4">
                  {member.role}
                </span>
                
                <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-5 mt-auto">
                  {member.socials.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a 
                      href={member.socials.twitter} 
                      className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 stroke-[1.5]" />
                    </a>
                  )}
                  {member.socials.mail && (
                    <a 
                      href={member.socials.mail} 
                      className="text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-300"
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

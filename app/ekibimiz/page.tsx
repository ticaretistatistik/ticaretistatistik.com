import { Metadata } from "next";
import { Linkedin, Github, Users } from "lucide-react";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description: "İstatistik Topluluğu yönetim kurulu ve koordinatörleri.",
};

export default function TeamPage() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative h-96 w-full overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {/* Profile Image / Fallback */}
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/5 text-brand-blue/40 text-7xl font-bold transition-all duration-500 group-hover:scale-105 group-hover:text-brand-blue/60 group-hover:bg-brand-blue/10">
                  {member.name.charAt(0)}
                </div>
              )}

              {/* Info Overlay */}
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 p-4 backdrop-blur-md dark:bg-slate-900/95 shadow-sm transition-transform duration-300">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-brand-navy dark:text-white truncate">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 truncate">
                    {member.role}
                  </p>
                  
                  {/* Socials - Reveal on hover */}
                  <div className="flex items-center gap-3 overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300 ease-in-out mt-1">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                    {member.medium && (
                      <a href={member.medium} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                        <span className="sr-only">Medium</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

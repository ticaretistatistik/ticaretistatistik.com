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
          <div className="inline-flex items-center justify-center bg-brand-accent/10 p-3 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-ink dark:text-white mb-6">
            Ekibimizle Tanışın
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Topluluğumuzun vizyonunu ileriye taşıyan, veri bilimine tutkulu ve çalışkan yönetim kurulu üyelerimiz.
          </p>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-4"
            >
              <div className="relative w-full h-80 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-brand-accent/5 text-brand-accent/40 text-7xl font-bold transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-accent/60 group-hover:bg-brand-accent/10">
                    {member.name.charAt(0)}
                  </div>
                )}
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="flex gap-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex w-fit bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Linkedin className="w-4 h-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex w-fit bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Github className="w-4 h-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                    {member.medium && (
                      <a href={member.medium} target="_blank" rel="noopener noreferrer" className="flex w-fit bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                        <span className="sr-only">Medium</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Text Info Below */}
              <div className="flex flex-col gap-1 w-full px-1">
                <h3 className="text-xl font-medium text-brand-ink dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-normal text-slate-500 dark:text-slate-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

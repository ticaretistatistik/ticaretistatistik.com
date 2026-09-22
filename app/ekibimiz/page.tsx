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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-lg relative group-hover:border-brand-blue transition-colors">
                {member.image ? (
                  <img 
                    src={member.image} 
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
                {member.github && (
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                )}
                {member.medium && (
                  <a 
                    href={member.medium} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    <span className="sr-only">Medium</span>
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

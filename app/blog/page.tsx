import { blog } from "#site/content";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar, User } from "lucide-react";
import { getAuthors } from "@/lib/authors";

export const metadata: Metadata = {
  title: "Blog",
  description: "İstatistik ve veri bilimi üzerine yazılar, rehberler ve topluluk duyuruları.",
};

export default function BlogIndexPage() {
  const allAuthors = getAuthors();
  const sortedPosts = blog.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="bg-slate-50 dark:bg-background min-h-screen">
      <div className="container-custom pt-12 pb-24">
        
        {/* Header Section */}
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy dark:text-white mb-6">
            Topluluk Günlüğü
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Veri bilimi, yapay zeka, istatistik ekosistemine dair teknik yazılarımız ve etkinliklerimizden notlar.
          </p>
        </header>

        {/* Posts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Link 
              href={post.permalink} 
              key={post.slug} 
              className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Cover Image */}
              <div className="w-full aspect-[16/9] relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {post.cover ? (
                  <img 
                    src={typeof post.cover === 'string' ? post.cover : post.cover.src} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/5">
                    <span className="text-brand-blue/30 font-bold text-2xl tracking-widest uppercase">ITICU</span>
                  </div>
                )}
                
                {post.tags && post.tags.length > 0 && (
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-semibold text-brand-blue bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm">
                      {post.tags[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {post.date && (
                    <time dateTime={post.date} className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  )}
                  {post.authors && post.authors.length > 0 && (
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.authors.map(id => allAuthors[id]?.name).filter(Boolean)[0]}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-brand-navy dark:text-white mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                {post.description && (
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                )}
                
                <div className="mt-auto flex items-center text-sm font-semibold text-brand-blue">
                  Yazıyı Oku
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="py-24 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Henüz içerik yayınlanmamış.</p>
          </div>
        )}
      </div>
    </div>
  );
}

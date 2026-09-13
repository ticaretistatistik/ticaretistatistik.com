import { blog } from "#site/content";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";
import { getAuthors } from "@/lib/authors";

export const metadata: Metadata = {
  title: "Blog",
  description: "İstatistik ve veri bilimi üzerine yazılar, rehberler ve duyurular.",
};

export default function BlogIndexPage() {
  const allAuthors = getAuthors();
  const sortedPosts = blog.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <main className="min-h-screen pt-24 pb-32 text-zinc-900 dark:text-zinc-50">
      <div className="container mx-auto max-w-[1000px] px-6">
        
        {/* Header Section */}
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 dark:border-white/10 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Topluluktan haberler, veri bilimi üzerine derinlemesine yazılar ve istatistik ekosistemine dair içgörüler.
            </p>
          </div>
          <div className="text-zinc-400 dark:text-zinc-500 font-medium tracking-wide text-sm uppercase">
            Son Yazılar
          </div>
        </header>

        {/* Posts List */}
        <div className="flex flex-col">
          {sortedPosts.map((post) => (
            <article 
              key={post.slug} 
              className="group relative flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-black/5 dark:border-white/5 transition-colors hover:border-black/20 dark:hover:border-white/20"
            >
              {/* Date & Tags Column */}
              <div className="md:w-48 flex flex-col gap-3 shrink-0 pt-1">
                {post.date ? (
                  <time dateTime={post.date} className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                ) : (
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Tarihsiz
                  </span>
                )}
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className="flex-grow flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 flex flex-col h-full">
                  <Link href={post.permalink} className="absolute inset-0 z-10">
                    <span className="sr-only">Yazıyı oku: {post.title}</span>
                  </Link>
                  <h2 className="text-2xl md:text-3xl font-medium text-black dark:text-white mb-4 tracking-tight group-hover:text-brand-yellow transition-colors duration-300">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  
                  {post.authors && post.authors.length > 0 && (
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex -space-x-2">
                        {post.authors.map(id => {
                          const author = allAuthors[id];
                          if (!author) return null;
                          return (
                            <img 
                              key={author.key} 
                              src={author.image_url} 
                              alt={author.name} 
                              title={author.name}
                              className="w-8 h-8 rounded-full border-2 border-white dark:border-[#09090b] object-cover bg-zinc-100" 
                            />
                          );
                        })}
                      </div>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        {post.authors.map(id => allAuthors[id]?.name).filter(Boolean).join(", ")}
                      </span>
                    </div>
                  )}

                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-black dark:text-white opacity-60 group-hover:opacity-100 group-hover:text-brand-yellow transition-all duration-300">
                    Devamını oku
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Cover Image */}
                {post.cover && (
                  <div className="w-full md:w-56 aspect-[16/9] md:aspect-auto md:h-36 relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    <img 
                      src={typeof post.cover === 'string' ? post.cover : post.cover.src} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
          
          {sortedPosts.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light">Henüz hiç yazı eklenmemiş.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

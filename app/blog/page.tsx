import { blog } from "#site/content";
import Link from "next/link";
import { Metadata } from "next";
import { getAuthors } from "@/lib/authors";
import { ArrowRight } from "lucide-react";

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
    <div className="bg-background min-h-screen">
      <div className="container-custom flex flex-col items-center gap-16 pt-12 pb-24">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl text-foreground">
            Blog Posts
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500 dark:text-slate-400 md:text-lg">
            Veri bilimi, yapay zeka, istatistik ekosistemine dair teknik yazılarımız ve etkinliklerimizden notlar.
          </p>
        </div>

        {/* Posts List */}
        <div className="grid w-full gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {sortedPosts.map((post) => {
            const authors = post.authors?.map(id => allAuthors[id]).filter(Boolean) || [];
            const primaryAuthor = authors[0];
            const coverUrl = post.cover ? (typeof post.cover === 'string' ? post.cover : post.cover.src) : null;
            
            return (
              <div 
                key={post.slug} 
                className="rounded-lg order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
              >
                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                  
                  {/* Text Side */}
                  <div className="sm:col-span-5">
                    <div className="mb-4 md:mb-6">
                      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 md:gap-5 lg:gap-6">
                        {post.tags && post.tags.length > 0 ? (
                          post.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                          ))
                        ) : (
                          <span>Blog</span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl text-foreground">
                      <Link href={post.permalink} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    
                    {post.description && (
                      <p className="mt-4 text-slate-500 dark:text-slate-400 md:mt-5 line-clamp-3">
                        {post.description}
                      </p>
                    )}
                    
                    <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                      {primaryAuthor && (
                        <>
                          <span className="text-slate-500 dark:text-slate-400">{primaryAuthor.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">•</span>
                        </>
                      )}
                      {post.date && (
                        <span className="text-slate-500 dark:text-slate-400">
                          {new Date(post.date).toLocaleDateString("tr-TR", { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-6 flex items-center space-x-2 md:mt-8">
                      <Link 
                        href={post.permalink} 
                        className="inline-flex items-center font-semibold hover:underline md:text-base text-foreground"
                      >
                        <span>Yazıyı oku</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="order-first sm:order-last sm:col-span-5">
                    <Link href={post.permalink} className="block">
                      <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                        {coverUrl ? (
                          <img 
                            alt={post.title} 
                            className="h-full w-full object-cover transition-opacity duration-200 hover:opacity-70 bg-slate-100 dark:bg-slate-800" 
                            src={coverUrl} 
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                            <span className="text-slate-400 font-semibold uppercase tracking-widest">ITICU</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>

        {sortedPosts.length === 0 && (
          <div className="py-24 text-center w-full">
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Henüz içerik yayınlanmamış.</p>
          </div>
        )}
      </div>
    </div>
  );
}

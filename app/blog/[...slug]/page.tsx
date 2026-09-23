import { notFound } from "next/navigation";
import { blog } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams({ params }: PostPageProps) {
  const slug = params.slug?.join("/") || "";
  const post = blog.find((p) => p.slug === slug || p.slug.split("/").pop() === slug);
  
  if (!post) {
    const matching = blog.find((p) => p.permalink.endsWith(`/${slug}`));
    if (matching) return matching;
    return null;
  }
  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params });
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  if (blog.length === 0) {
    return [{ slug: ["_empty"] }];
  }
  return blog.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

import { getAuthors } from "@/lib/authors";

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }

  const allAuthors = getAuthors();
  const postAuthors = (post.authors || []).map(id => allAuthors[id]).filter(Boolean);

  return (
    <article className="min-h-screen bg-white dark:bg-background pb-24">
      {/* Article Header (Hero) */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="container max-w-[800px] mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-ink dark:hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Blog'a Dön
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
            {post.date && (
              <time dateTime={post.date} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
                <Calendar className="w-4 h-4 text-brand-accent" />
                {new Date(post.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            )}
            {post.tags && post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-ink dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              {post.description}
            </p>
          )}

          {postAuthors.length > 0 && (
            <div className="flex flex-wrap gap-6 mt-10">
              {postAuthors.map(author => (
                <a 
                  key={author.key} 
                  href={author.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group"
                >
                  {author.image_url ? (
                    <img src={author.image_url} alt={author.name} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm group-hover:border-brand-accent transition-colors" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                      <span className="font-bold text-lg">{author.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-bold text-brand-ink dark:text-white group-hover:text-brand-accent transition-colors">{author.name}</div>
                    {author.title && <div className="text-sm text-slate-500 dark:text-slate-400">{author.title}</div>}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
      
      {/* Article Content */}
      <div className="container max-w-[800px] mx-auto px-6 mt-10 md:mt-16">
        {post.cover && (
          <div className="mb-16 w-full relative rounded-2xl overflow-hidden shadow-md aspect-[21/9] md:aspect-[2.5/1] bg-slate-100 dark:bg-slate-800">
            <img 
              src={typeof post.cover === 'string' ? post.cover : post.cover.src} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        )}
        
        <div className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-brand-ink dark:prose-headings:text-white prose-a:text-brand-accent hover:prose-a:text-brand-accent/80 prose-img:rounded-xl">
          <MDXContent code={post.content} />
        </div>
      </div>
    </article>
  );
}

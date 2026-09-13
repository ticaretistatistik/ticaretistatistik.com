import { notFound } from "next/navigation";
import { blog } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { Metadata } from "next";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams({ params }: PostPageProps) {
  const slug = params.slug?.join("/") || "";
  const post = blog.find((p) => p.slug === slug || p.slug.split("/").pop() === slug);
  
  if (!post) {
    // try removing the date prefix if they navigate to just the title slug
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
  return blog.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-[800px] mx-auto py-24 px-6 min-h-[80vh]">
      <header className="mb-12 text-center">
        {post.date && (
          <time dateTime={post.date} className="text-sm font-medium text-brand-yellow mb-4 block">
            {new Date(post.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        )}
        <h1 className="scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
        )}

        {post.cover && (
          <div className="my-10 w-full relative rounded-2xl overflow-hidden shadow-lg aspect-[2/1] bg-zinc-100 dark:bg-zinc-800">
            <img 
              src={typeof post.cover === 'string' ? post.cover : post.cover.src} 
              alt={post.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex justify-center gap-2 mt-6">
            {post.tags.map(tag => (
              <span key={tag} className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-brand-yellow hover:prose-a:text-brand-yellow/80">
        <MDXContent code={post.content} />
      </div>
    </article>
  );
}

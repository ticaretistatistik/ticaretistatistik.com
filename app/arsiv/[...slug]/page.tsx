import { notFound } from "next/navigation";
import { archive } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, LayoutGrid } from "lucide-react";

interface ArchivePageProps {
  params: {
    slug: string[];
  };
}

async function getArchiveFromParams({ params }: ArchivePageProps) {
  const slug = params.slug?.join("/") || "";
  const event = archive.find((p) => p.slug === slug || p.slug.split("/").pop() === slug);
  return event || null;
}

export async function generateMetadata({
  params,
}: ArchivePageProps): Promise<Metadata> {
  const event = await getArchiveFromParams({ params });
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

export async function generateStaticParams() {
  if (archive.length === 0) {
    return [{ slug: ["_empty"] }];
  }
  return archive.map((event) => ({
    slug: event.slug.split("/"),
  }));
}

export default async function ArchiveEventPage({ params }: ArchivePageProps) {
  const event = await getArchiveFromParams({ params });

  if (!event) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-background pb-24">
      {/* Event Header */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="container max-w-[900px] mx-auto px-6 text-center">
          <Link href="/arsiv" className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-ink dark:hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Arşive Dön
          </Link>
          
          <div className="flex justify-center mb-6">
            <time dateTime={event.date} className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-brand-accent" />
              {new Date(event.date).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-ink dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
            {event.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            {event.description}
          </p>
        </div>
      </header>
      
      {/* Event Content & Gallery */}
      <div className="container max-w-[900px] mx-auto px-6 mt-10 md:mt-16">
        
        {/* Cover Image */}
        {event.cover && (
          <div className="mb-16 w-full relative rounded-3xl overflow-hidden shadow-lg aspect-[16/9] bg-slate-100 dark:bg-slate-800">
            <img 
              src={typeof event.cover === 'string' ? event.cover : event.cover.src} 
              alt={event.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        )}
        
        {/* MDX Text Content */}
        <div className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-brand-ink dark:prose-headings:text-white prose-a:text-brand-accent hover:prose-a:text-brand-accent/80 prose-img:rounded-2xl mb-16">
          <MDXContent code={event.content} />
        </div>

        {/* Optional Gallery Section */}
        {event.gallery && event.gallery.length > 0 && (
          <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-brand-ink dark:text-white mb-8 flex items-center">
              <LayoutGrid className="w-6 h-6 mr-3 text-brand-accent" />
              Etkinlik Galerisi
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery.map((img, idx) => (
                <div key={idx} className="aspect-square relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 group shadow-sm hover:shadow-lg transition-all">
                  <img 
                    src={typeof img === 'string' ? img : (img as any).src} 
                    alt={`${event.title} galeri görseli ${idx + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}

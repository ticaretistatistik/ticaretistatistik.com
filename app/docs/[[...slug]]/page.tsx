import { notFound } from "next/navigation";
import { docs } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { TableOfContents } from "@/components/toc";
import { Metadata } from "next";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = docs.find((doc) => doc.slug === slug);
  if (!doc) return null;
  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams() {
  const paths = docs.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
  paths.push({ slug: [] });
  return paths;
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    if (!params.slug || params.slug.length === 0) {
      return (
        <main className="relative py-12 lg:py-20 w-full min-h-[80vh]">
          {/* Subtle bg glow */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-yellow/5 to-transparent pointer-events-none -z-10"></div>
          
          <div className="mx-auto w-full min-w-0 max-w-4xl flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-sm font-medium text-brand-yellow mb-8">
              Bilgi Bankası
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-black tracking-tight text-foreground mb-6">
              Dokümantasyon <br/>
              <span className="text-zinc-400 dark:text-zinc-500 italic font-medium">Merkezi.</span>
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
              İstatistik, Python, R, SPSS ve Tableau için hazırladığımız kapsamlı Türkçe kaynaklara hoş geldiniz. Öğrenmeye başlamak için bir kategori seçin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { name: "Python ile Veri Bilimi", path: "/docs/python", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
                { name: "R Programlama", path: "/docs/r", color: "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20" },
                { name: "SPSS Uygulamaları", path: "/docs/spss", color: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20" },
                { name: "JASP Notları", path: "/docs/jasp", color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" },
              ].map((item) => (
                <a key={item.name} href={item.path} className="group relative p-6 rounded-2xl border border-border bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left overflow-hidden flex items-center justify-between">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-100%] group-hover:translate-x-[100%] duration-1000 z-0"></div>
                  <h3 className="text-lg font-bold text-foreground z-10">{item.name}</h3>
                  <div className={`h-10 w-10 rounded-full border flex items-center justify-center transition-colors z-10 ${item.color}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </main>
      );
    }
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_250px] w-full">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 space-y-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-zinc-100">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-zinc-400">{doc.description}</p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <MDXContent code={doc.content} />
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-10 pt-4">
          <TableOfContents toc={doc.toc} />
        </div>
      </div>
    </main>
  );
}

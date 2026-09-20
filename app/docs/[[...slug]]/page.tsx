import { notFound } from "next/navigation";
import { docs } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { TableOfContents } from "@/components/toc";
import { Metadata } from "next";
import { Book, Code, Database, LineChart } from "lucide-react";

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
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none -z-10"></div>
          
          <div className="mx-auto w-full min-w-0 max-w-4xl flex flex-col items-center text-center px-4">
            <div className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue mb-8 shadow-sm">
              <Book className="w-4 h-4 mr-2" />
              Bilgi Bankası
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-navy dark:text-white mb-6">
              Dokümantasyon <br className="hidden md:block" />
              <span className="text-brand-blue">Merkezi.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed">
              İstatistik, Veri Bilimi, Python ve R için hazırladığımız kapsamlı Türkçe kaynaklara hoş geldiniz. Öğrenmeye başlamak için bir kategori seçin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { name: "Python ile Veri Bilimi", path: "/docs/python", icon: <Code className="w-5 h-5" />, color: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20" },
                { name: "R Programlama", path: "/docs/r", icon: <Database className="w-5 h-5" />, color: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20" },
                { name: "İstatistik Temelleri", path: "/docs/istatistik", icon: <LineChart className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20" },
                { name: "Araçlar ve Kurulumlar", path: "/docs/araclar", icon: <Book className="w-5 h-5" />, color: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20" },
              ].map((item) => (
                <a key={item.name} href={item.path} className="group relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 text-left overflow-hidden flex items-center justify-between">
                  <div className="flex items-center gap-4 z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy dark:text-white group-hover:text-brand-blue transition-colors">{item.name}</h3>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all z-10" />
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
        <div className="mb-8 space-y-4">
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy dark:text-white">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-slate-600 dark:text-slate-400">{doc.description}</p>
          )}
          <hr className="border-slate-200 dark:border-slate-800" />
        </div>
        <div className="pb-12 pt-4 prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-brand-navy dark:prose-headings:text-white prose-a:text-brand-blue hover:prose-a:text-brand-blue/80 prose-img:rounded-xl">
          <MDXContent code={doc.content} />
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-24 pt-4">
          <TableOfContents toc={doc.toc} />
        </div>
      </div>
    </main>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

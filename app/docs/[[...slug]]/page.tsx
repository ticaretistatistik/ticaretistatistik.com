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
  return docs.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
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

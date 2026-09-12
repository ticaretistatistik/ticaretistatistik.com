import Link from "next/link";
import { docs } from "#site/content";

export function Sidebar() {
  // Sort docs by sidebar_position
  const sortedDocs = [...docs].sort((a, b) => {
    return (a.sidebar_position ?? 99) - (b.sidebar_position ?? 99);
  });

  return (
    <div className="w-full">
      <div className="mb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-bold uppercase tracking-wider text-foreground">
          Dokümanlar
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm gap-1 mt-2">
          {sortedDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="group flex w-full items-center rounded-lg border border-transparent px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-foreground transition-all duration-200"
            >
              {doc.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

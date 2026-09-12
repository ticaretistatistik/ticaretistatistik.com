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
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-zinc-100">
          Dokümanlar
        </h4>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {sortedDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-zinc-400 hover:text-zinc-100"
            >
              {doc.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

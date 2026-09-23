"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Search, FileText, BookOpen } from "lucide-react";
import MiniSearch from "minisearch";
import { docs, blog } from "#site/content";
import { useRouter } from "next/navigation";

// Initialize Minisearch
const searchIndex = new MiniSearch({
  fields: ['title', 'description', 'content'], // fields to index
  storeFields: ['title', 'description', 'permalink', 'type'], // fields to return
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
});

const documents = [
  ...docs.map((doc) => ({
    id: doc.slug,
    title: doc.title,
    description: doc.description || '',
    content: doc.content || '',
    permalink: doc.permalink,
    type: 'Doc',
  })),
  ...blog.map((post) => ({
    id: post.slug,
    title: post.title,
    description: post.description || '',
    content: post.content || '',
    permalink: post.permalink,
    type: 'Blog',
  })),
];

// Add documents to index only once
if (searchIndex.documentCount === 0) {
  searchIndex.addAll(documents);
}

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const openSearch = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-search", openSearch);
    
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-search", openSearch);
    };
  }, []);

  const results = React.useMemo(() => {
    if (query.trim().length > 1) {
      return searchIndex.search(query);
    }
    return [];
  }, [query]);

  const handleSelect = (permalink: string) => {
    setOpen(false);
    router.push(permalink);
    setTimeout(() => setQuery(''), 200); // clear query after closing animation
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 dark:bg-black/80 backdrop-blur-sm transition-all duration-700 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-[20%] sm:top-[30%] md:top-1/4 z-50 w-full max-w-2xl -translate-x-1/2 gap-0 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-0 shadow-2xl sm:rounded-xl overflow-hidden transition-all duration-700 ease-out data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[0.98] data-[state=closed]:slide-out-to-top-[15%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.98] data-[state=open]:slide-in-from-top-[15%]">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-4">
            <Search className="mr-3 h-5 w-5 shrink-0 text-zinc-500" />
            <input
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900 dark:text-zinc-100"
              placeholder="Dokümanlarda veya bloglarda arayın..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <div className="max-h-[350px] overflow-y-auto p-2">
            {query.trim().length <= 1 ? (
              <div className="p-8 text-center text-sm text-zinc-500">
                Aramaya başlamak için bir şeyler yazın.
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-sm text-zinc-500">
                "{query}" için sonuç bulunamadı.
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSelect(result.permalink)}
                    className="flex flex-col items-start gap-1 p-3 text-left w-full hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2 w-full">
                      {result.type === 'Blog' ? (
                        <FileText className="w-4 h-4 text-brand-yellow shrink-0" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                      )}
                      <span className="font-medium text-zinc-900 dark:text-zinc-100 truncate">
                        {result.title}
                      </span>
                      <span className="ml-auto text-[10px] font-semibold tracking-wider uppercase text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                        {result.type}
                      </span>
                    </div>
                    {result.description && (
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1 ml-6">
                        {result.description}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

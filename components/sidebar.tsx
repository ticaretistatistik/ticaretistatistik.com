"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docs } from "#site/content";
import { ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface TreeNode {
  slug: string;
  title: string;
  sidebar_position: number;
  children: TreeNode[];
  isIndex: boolean;
}

export function Sidebar() {
  const pathname = usePathname();

  const tree = useMemo(() => {
    const rootNodes: TreeNode[] = [];
    const map = new Map<string, TreeNode>();

    const sortedDocs = [...docs].sort((a, b) => (a.sidebar_position ?? 99) - (b.sidebar_position ?? 99));

    sortedDocs.forEach((doc) => {
      const parts = doc.slug.split('/');
      if (parts.length === 1) {
        map.set(doc.slug, {
          slug: doc.slug,
          title: doc.title,
          sidebar_position: doc.sidebar_position ?? 99,
          children: [],
          isIndex: true,
        });
        rootNodes.push(map.get(doc.slug)!);
      } else {
        const parentSlug = parts[0];
        let parent = map.get(parentSlug);
        
        if (!parent) {
          parent = {
            slug: parentSlug,
            title: parentSlug.toUpperCase(),
            sidebar_position: 99,
            children: [],
            isIndex: false,
          };
          map.set(parentSlug, parent);
          rootNodes.push(parent);
        }
        
        parent.children.push({
          slug: doc.slug,
          title: doc.title,
          sidebar_position: doc.sidebar_position ?? 99,
          children: [],
          isIndex: false,
        });
      }
    });

    rootNodes.forEach((node) => {
      node.children.sort((a, b) => a.sidebar_position - b.sidebar_position);
    });

    return rootNodes.sort((a, b) => a.sidebar_position - b.sidebar_position);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h4 className="mb-4 rounded-md px-2 text-sm font-bold uppercase tracking-wider text-foreground">
          İçerikler
        </h4>
        <div className="flex flex-col gap-1 w-full">
          {tree.map((node) => {
            const isActiveParent = pathname?.includes(`/docs/${node.slug}`);
            const isRootActive = pathname === `/docs/${node.slug}`;
            
            return (
              <div key={node.slug} className="flex flex-col">
                {node.children.length > 0 ? (
                  <details className="group" open={isActiveParent}>
                    <summary className={cn(
                      "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-bold transition-colors list-none select-none",
                      isActiveParent ? "text-brand-yellow" : "text-foreground hover:bg-zinc-100 dark:hover:bg-white/5"
                    )}>
                      {node.title}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="flex flex-col pl-4 mt-1 gap-1 border-l border-border/50 ml-4 mb-2">
                      {node.isIndex && (
                        <Link 
                          href={`/docs/${node.slug}`} 
                          className={cn(
                            "rounded-md px-3 py-1.5 text-sm transition-colors",
                            isRootActive ? "text-brand-yellow font-bold bg-brand-yellow/10" : "text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-zinc-100 dark:hover:bg-white/5"
                          )}
                        >
                          Genel Bakış
                        </Link>
                      )}
                      {node.children.map((child) => {
                        const isChildActive = pathname === `/docs/${child.slug}`;
                        return (
                          <Link 
                            key={child.slug} 
                            href={`/docs/${child.slug}`} 
                            className={cn(
                              "rounded-md px-3 py-1.5 text-sm transition-colors",
                              isChildActive ? "text-brand-yellow font-bold bg-brand-yellow/10" : "text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-zinc-100 dark:hover:bg-white/5"
                            )}
                          >
                            {child.title}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ) : (
                  <Link 
                    href={`/docs/${node.slug}`} 
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                      isRootActive ? "bg-brand-yellow/10 text-brand-yellow font-bold" : "font-bold text-foreground hover:bg-zinc-100 dark:hover:bg-white/5"
                    )}
                  >
                    {node.title}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

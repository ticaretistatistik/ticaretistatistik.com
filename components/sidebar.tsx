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
  permalink: string;
}

export function Sidebar() {
  const pathname = usePathname();

  const tree = useMemo(() => {
    const rootNodes: TreeNode[] = [];
    const map = new Map<string, TreeNode & { indexTitle?: string }>();

    const sortedDocs = [...docs].sort((a, b) => (a.sidebar_position ?? 99) - (b.sidebar_position ?? 99));

    const capitalize = (s: string) => {
      const upper = ['jasp', 'spss', 'r', 'nps', 'sql', 'python'];
      if (upper.includes(s.toLowerCase())) return s.toUpperCase();
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    sortedDocs.forEach((doc) => {
      if (doc.slug === 'index') {
        rootNodes.push({
          slug: 'index',
          title: 'Ana Sayfa',
          sidebar_position: 0,
          children: [],
          isIndex: true,
          permalink: doc.permalink,
        });
        return;
      }

      const parts = doc.slug.split('/');
      const parentSlug = parts[0];
      
      let parent = map.get(parentSlug);
      if (!parent) {
        parent = {
          slug: parentSlug,
          title: capitalize(parentSlug),
          sidebar_position: 99,
          children: [],
          isIndex: false,
          permalink: `/docs/${parentSlug}`,
        };
        map.set(parentSlug, parent);
        rootNodes.push(parent);
      }

      if (parts.length === 1) {
        parent.isIndex = true;
        parent.indexTitle = doc.title;
        parent.permalink = doc.permalink;
        if (doc.sidebar_position) {
          parent.sidebar_position = Math.min(parent.sidebar_position, doc.sidebar_position);
        }
      } else {
        parent.children.push({
          slug: doc.slug,
          title: doc.title,
          sidebar_position: doc.sidebar_position ?? 99,
          children: [],
          isIndex: false,
          permalink: doc.permalink,
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
        <h4 className="mb-4 rounded-md px-2 text-sm font-bold uppercase tracking-wider text-brand-ink dark:text-white">
          İçerikler
        </h4>
        <div className="flex flex-col gap-1 w-full">
          {tree.map((node) => {
            const isActiveParent = pathname?.includes(node.permalink) && node.permalink !== '/docs';
            const isRootActive = pathname === node.permalink;
            
            return (
              <div key={node.slug} className="flex flex-col">
                {node.children.length > 0 ? (
                  <details className="group" open={isActiveParent}>
                    <summary className={cn(
                      "flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors list-none select-none",
                      isActiveParent ? "text-brand-accent" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    )}>
                      {node.title}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 text-slate-400" />
                    </summary>
                    <div className="flex flex-col pl-4 mt-1 gap-1 border-l border-slate-200 dark:border-slate-800 ml-4 mb-2">
                      {node.isIndex && (
                        <Link 
                          href={node.permalink} 
                          className={cn(
                            "rounded-md px-3 py-1.5 text-sm transition-colors",
                            isRootActive ? "text-brand-accent font-medium bg-brand-accent/5" : "text-slate-500 dark:text-slate-400 hover:text-brand-ink dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
                          )}
                        >
                          Genel Bakış
                        </Link>
                      )}
                      {node.children.map((child) => {
                        const isChildActive = pathname === child.permalink;
                        return (
                          <Link 
                            key={child.slug} 
                            href={child.permalink} 
                            className={cn(
                              "rounded-md px-3 py-1.5 text-sm transition-colors",
                              isChildActive ? "text-brand-accent font-medium bg-brand-accent/5" : "text-slate-500 dark:text-slate-400 hover:text-brand-ink dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50"
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
                    href={node.permalink} 
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2 text-sm transition-colors font-medium",
                      isRootActive ? "bg-brand-accent/10 text-brand-accent" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
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

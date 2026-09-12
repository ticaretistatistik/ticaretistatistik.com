"use client";

import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import React from "react";
import { Download } from "lucide-react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold text-foreground", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground first:mt-0", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7 text-zinc-600 dark:text-zinc-300 [&:not(:first-child)]:mt-6", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc text-zinc-600 dark:text-zinc-300", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal text-zinc-600 dark:text-zinc-300", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn("mt-6 border-l-2 border-zinc-300 dark:border-zinc-700 pl-6 italic text-zinc-500 dark:text-zinc-400", className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-xl border border-border mt-6", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 border-border md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full text-zinc-600 dark:text-zinc-300", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t border-border p-0 even:bg-zinc-100 dark:even:bg-zinc-900/50", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className={cn("border border-border bg-zinc-100 dark:bg-zinc-900 px-4 py-2 text-left font-bold text-foreground [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="relative group">
      <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-xl border border-border bg-zinc-950 p-4 py-4 text-sm text-zinc-50", className)} {...props} />
    </div>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn("relative rounded bg-zinc-200/50 dark:bg-zinc-800/50 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-900 dark:text-zinc-200", className)} {...props} />
  ),
  Callout: ({ title, children }: { title?: string; children: React.ReactNode }) => (
    <div className="my-6 flex items-start rounded-xl border border-border bg-zinc-100 dark:bg-zinc-900/50 p-4 text-sm text-zinc-700 dark:text-zinc-300">
      <div>
        {title && <div className="font-semibold text-foreground mb-1">{title}</div>}
        <div className="leading-relaxed">{children}</div>
      </div>
    </div>
  ),
  DownloadFileFeature: ({ content, file, icon }: any) => {
    const isWin = icon === 'windows';
    return (
      <a href={file?.url} download={file?.name} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 px-5 py-3 bg-zinc-50 dark:bg-zinc-900/50 border border-border hover:border-brand-yellow/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-black border border-border shadow-sm group-hover:scale-110 group-hover:border-brand-yellow/50 transition-all duration-300 shrink-0">
          {isWin ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500" fill="currentColor">
              <path d="M2.553 5.922L10.875 4.75v6.5H2.553v-5.328zm8.322 7.25l-8.322.001v-5.326l8.322-1.173v6.498zm.875-7.375l9.697-1.378v7.878h-9.697V5.797zm0 8.75h9.697v7.876l-9.697-1.377v-6.499z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-foreground" fill="currentColor">
              <path d="M16.642 13.914c-.035-2.614 2.13-3.882 2.228-3.94-1.221-1.785-3.118-2.027-3.792-2.052-1.611-.162-3.149.95-3.965.95-.818 0-2.072-.924-3.415-.898-1.75.025-3.364.97-4.253 2.516-1.802 3.123-.46 7.747 1.298 10.286.858 1.242 1.88 2.633 3.226 2.583 1.296-.05 1.787-.837 3.25-.837 1.464 0 1.905.837 3.275.811 1.4-.025 2.268-1.26 3.124-2.508 1.096-1.603 1.547-3.155 1.57-3.238-.035-.015-3.036-1.164-3.072-3.91zM14.542 4.41c.712-.86 1.192-2.055 1.062-3.25-1.026.042-2.275.682-3.003 1.542-.582.68-1.135 1.89-.982 3.063 1.144.089 2.21-.582 2.923-1.355z" />
            </svg>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{isWin ? "Windows İçin" : "macOS İçin"}</span>
          <span className="text-sm font-bold text-foreground group-hover:text-brand-yellow transition-colors">{content}</span>
        </div>
        <Download className="w-4 h-4 text-zinc-400 group-hover:text-brand-yellow transition-colors ml-4" />
      </a>
    );
  },
  ReactPlayer: ({ url, height, width }: any) => {
    let embedUrl = url;
    if (url?.includes('youtu.be/')) {
      embedUrl = `https://www.youtube.com/embed/${url.split('youtu.be/')[1]}`;
    }
    return (
      <iframe src={embedUrl} width={width || "100%"} height={height || "400px"} className="rounded-xl mt-4 border border-border" allowFullScreen></iframe>
    );
  },
  Tabs: function TabsComponent({ children }: any) {
    const [activeTab, setActiveTab] = React.useState(0);
    const tabs = React.Children.toArray(children);
    return (
      <div className="my-6">
        <div className="flex border-b border-border gap-6 mb-4">
          {tabs.map((tab: any, index) => (
            <button
              key={index}
              className={cn(
                "pb-2 text-sm font-bold border-b-2 transition-colors",
                activeTab === index ? "border-brand-yellow text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab.props.label || tab.props.value}
            </button>
          ))}
        </div>
        <div>{tabs[activeTab]}</div>
      </div>
    );
  },
  TabItem: ({ children }: any) => <div>{children}</div>,
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return (
    <div className="mdx-content">
      <Component components={components} />
    </div>
  );
}

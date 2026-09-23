"use client";

import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import React from "react";
import { Download, Command, AppWindow } from "lucide-react";

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
            <AppWindow className="w-5 h-5 text-blue-500" />
          ) : (
            <Command className="w-5 h-5 text-foreground" />
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

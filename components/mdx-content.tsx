"use client";

import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import React from "react";

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
      <a href={file?.url} download={file?.name} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-2 bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 rounded-xl hover:bg-brand-yellow/20 transition-colors">
        {isWin ? (
          <svg viewBox="0 0 448 512" fill="currentColor" className="h-[18px] w-auto">
            <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 384 512" fill="currentColor" className="h-[18px] w-auto pb-[2px]">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 24 184.8 8 277.3c-1.9 5.3-21.2 72.7-21.2 143.6 0 77.2 26 142.1 63 189.6 19.3 24.8 41.7 49.3 71.3 49.3 30.6 0 45-19.4 82.5-19.4 37 0 49.9 19.4 83.4 19.4 30.7 0 54.1-26.9 71.3-49.3 29.3-38.3 47.9-92.4 47.9-94.6-.2-.6-40.8-15.4-87.5-15.4zM245.9 105.7c20.4-24.8 34.6-59.5 30.9-94.2-30.8 1.2-66.2 20.5-87.1 45.4-17.7 21.1-34.6 57.3-30.1 90.7 34.4 2.7 66.8-17.1 86.3-41.9z"/>
          </svg>
        )}
        <span className="font-bold">{content}</span>
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

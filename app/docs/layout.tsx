import { Sidebar } from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Global Docs Background Effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#94a3b8_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#475569_1px,_transparent_1px)] opacity-10 [background-size:20px_20px]" />
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none z-0"></div>
      
      <div className="relative z-10 mx-auto flex max-w-[1400px] items-start gap-10 px-4 md:px-8">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-slate-200 dark:border-slate-800 py-6 pr-6 md:sticky md:block lg:w-[280px]">
          <Sidebar />
        </aside>
        {children}
      </div>
    </div>
  );
}

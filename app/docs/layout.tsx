import { Sidebar } from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1400px] items-start gap-10 px-4 md:px-8">
      <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-border py-6 pr-6 md:sticky md:block lg:w-[280px]">
        <Sidebar />
      </aside>
      {children}
    </div>
  );
}

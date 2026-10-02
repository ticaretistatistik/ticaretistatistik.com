import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchDialog } from "@/components/search-dialog";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 flex flex-col">
        {children}
      </main>
      <Footer />
      <SearchDialog />
    </>
  );
}

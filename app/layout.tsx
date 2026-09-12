import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchDialog } from "@/components/search-dialog";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Ticaret İstatistik Topluluğu",
  description: "İstanbul Ticaret Üniversitesi İstatistik Bölümü Topluluğu resmi web sitesi ve bilgi kaynağı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-brand-ink selection:bg-brand-yellow selection:text-brand-ink`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <SearchDialog />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchDialog } from "@/components/search-dialog";

import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-background text-foreground selection:bg-brand-yellow selection:text-brand-ink transition-colors duration-500 ease-in-out`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <SearchDialog />
        </ThemeProvider>
      </body>
    </html>
  );
}

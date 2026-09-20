import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchDialog } from "@/components/search-dialog";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "İstanbul Ticaret Üniversitesi İstatistik Topluluğu",
  description: "İstatistik ve Veri Bilimi alanında etkinlikler, eğitimler ve projeler düzenleyen öğrenci topluluğu.",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground transition-colors duration-300 ease-in-out`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16 flex flex-col">
            {children}
          </main>
          <Footer />
          <SearchDialog />
        </ThemeProvider>
      </body>
    </html>
  );
}

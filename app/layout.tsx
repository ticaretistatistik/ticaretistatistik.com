import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Türkçe karakterler (ğ, ş, ı, İ) "latin-ext" alt kümesinde yer alır.
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

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
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-background text-foreground transition-colors duration-300 ease-in-out`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

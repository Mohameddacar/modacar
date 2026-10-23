import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const serifFont = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Dacar | Software Engineer & Applied AI Builder",
  description: "I transform operational problems, data and emerging AI technologies into useful digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${serifFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-primary font-sans">{children}</body>
    </html>
  );
}

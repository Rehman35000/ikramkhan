import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IKANOVA | Software Development & AI Solutions",
    template: "%s | IKANOVA",
  },
  description:
    "IKANOVA is a premium software development company specializing in web applications, mobile apps, AI solutions, and cloud infrastructure for businesses worldwide.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "AI solutions",
    "cloud computing",
    "SaaS development",
    "UI/UX design",
    "technology company",
  ],
  openGraph: {
    title: "IKANOVA | Software Development & AI Solutions",
    description:
      "Premium software development company specializing in web applications, mobile apps, AI solutions, and cloud infrastructure.",
    type: "website",
    siteName: "IKANOVA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKANOVA | Software Development & AI Solutions",
    description:
      "Premium software development company specializing in web applications, mobile apps, AI solutions, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

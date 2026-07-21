import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IKANOVA | Premium Software Development & AI Solutions",
    template: "%s | IKANOVA",
  },
  description:
    "IKANOVA is a premium software development studio specializing in web applications, mobile apps, AI solutions, and cloud infrastructure for businesses worldwide.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "AI solutions",
    "cloud computing",
    "SaaS development",
    "UI/UX design",
    "technology company",
    "digital agency",
    "custom software",
  ],
  openGraph: {
    title: "IKANOVA | Premium Software Development & AI Solutions",
    description:
      "Premium software development studio specializing in web applications, mobile apps, AI solutions, and cloud infrastructure.",
    type: "website",
    siteName: "IKANOVA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKANOVA | Premium Software Development & AI Solutions",
    description:
      "Premium software development studio specializing in web applications, mobile apps, AI solutions, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  other: {
    'google-site-verification': 'sZAcrTDfkczgwhktPr6fK3kbp6nBffxCeeLZjjZyZuQ',
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
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

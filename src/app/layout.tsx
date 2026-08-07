import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
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
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth light`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `html{background-color:#FFFFFF}`,
          }}
        />
      </head>
      <body className="bg-bg text-fg font-sans antialiased">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F11VGH0K0Y"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F11VGH0K0Y');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

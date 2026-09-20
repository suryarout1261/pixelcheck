import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelcheck365.com"),
  title: {
    default: "PixelCheck365 — Free Dead Pixel Test & Online Screen Checker",
    template: "%s | PixelCheck365",
  },
  description:
    "PixelCheck365 is the #1 free online dead pixel test, stuck pixel checker, and monitor screen test. Test iPhone, Android, MacBook, Windows PC, laptop, LCD & LED screens for defects.",
  keywords: [
    "pixelcheck365",
    "dead pixel test",
    "dead pixel test online",
    "screen test",
    "screen test online",
    "dead pixel checker",
    "dead pixel checker online",
    "stuck pixel test",
    "stuck pixel checker",
    "pixel test",
    "pixel checker",
    "monitor test",
    "monitor screen test",
    "display test",
    "LCD screen test",
    "LED screen test",
    "screen color test",
    "screen uniformity test",
    "screen defect test",
    "check screen for dead pixels",
    "how to test for dead pixels",
    "iPhone dead pixel test",
    "iPhone screen test",
    "Android dead pixel test",
    "Android screen test",
    "MacBook screen test",
    "MacBook dead pixel test",
    "Windows screen test",
    "laptop screen test",
    "test monitor for dead pixels",
    "online display test",
  ],
  authors: [{ name: "PixelCheck365" }],
  creator: "PixelCheck365",
  publisher: "PixelCheck365",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PixelCheck365 — Free Dead Pixel Test & Online Screen Checker",
    description:
      "Find dead, stuck, and defective pixels in seconds with full-screen color diagnostics. Works on iPhone, Android, MacBook, Windows PC, Laptop, and TV displays.",
    url: "https://pixelcheck365.com",
    siteName: "PixelCheck365",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelCheck365 — Free Dead Pixel Test & Online Screen Checker",
    description:
      "Find dead, stuck, and defective pixels in seconds with pure full-screen color diagnostics. 100% free and client-side.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://pixelcheck365.com/#website",
        url: "https://pixelcheck365.com",
        name: "PixelCheck365",
        alternateName: [
          "PixelCheck365 Screen Tester",
          "Pixel Check 365",
          "Dead Pixel Test Online",
          "Pixel Checker Online",
        ],
        description:
          "Free online screen test, dead pixel checker, and monitor display diagnostic tool for iPhone, Android, MacBook, Windows PC, and TVs.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://pixelcheck365.com/test?mode={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://pixelcheck365.com/#app",
        name: "PixelCheck365 — Display Diagnostics Suite",
        url: "https://pixelcheck365.com",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All (iOS, Android, macOS, Windows, Linux, Smart TVs, ChromeOS)",
        browserRequirements: "Requires HTML5 Fullscreen API support",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Dead pixel test & dead pixel checker online",
          "Stuck pixel test & stuck pixel checker",
          "Monitor test & monitor screen test",
          "LCD screen test & LED screen test",
          "Screen uniformity & screen defect test",
          "Screen color test & gradient smoothness",
          "iPhone dead pixel test & iPhone screen test",
          "Android dead pixel test & Android screen test",
          "MacBook screen test & MacBook dead pixel test",
          "Windows screen test & laptop screen test",
          "Test monitor for dead pixels",
          "Online display test & ISO 9241-307 evaluation",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FYD95QYSWP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FYD95QYSWP');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

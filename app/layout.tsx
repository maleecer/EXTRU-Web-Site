import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EXTRU 2026 - Annual Technology Exhibition | Faculty of Technology RUSL",
    template: "%s | EXTRU 2026",
  },
  description:
    "EXTRU 2026 is Sri Lanka's premier technology exhibition organized by Faculty of Technology, Rajarata University. Join 5000+ attendees for innovation showcases, workshops, and networking on February 20-22, 2026.",
  keywords: [
    "EXTRU",
    "EXTRU 2026",
    "Extru",
    "Extru 2026",
    "Technology Exhibition",
    "Tech Exhibition Sri Lanka",
    "RUSL",
    "Rajarata University",
    "Faculty of Technology",
    "Student Innovation",
    "Engineering Exhibition",
    "Tech Showcase",
    "Technology Festival",
    "Innovation Expo",
    "Student Projects",
    "Tech Competition",
    "Technology Fair Sri Lanka",
    "University Exhibition",
    "STEM Exhibition",
    "Robotics",
    "IoT",
    "AI Exhibition",
    "Engineering Projects",
    "Technology Conference",
    "Tech Event 2026",
    "Mihintale",
    "Sri Lanka Tech Events"
  ],
  authors: [{ name: "Faculty of Technology, RUSL" }],
  creator: "Faculty of Technology, Rajarata University of Sri Lanka",
  publisher: "EXTRU 2026",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://extru2026.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EXTRU 2026 - Annual Technology Exhibition | Faculty of Technology RUSL",
    description:
      "Join 5000+ attendees at EXTRU 2026, Sri Lanka's premier technology exhibition featuring 150+ innovative projects, workshops, and industry networking. February 20-22, 2026 at RUSL.",
    url: "/",
    siteName: "EXTRU 2026",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EXTRU 2026 - Technology Exhibition at RUSL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXTRU 2026 - Annual Technology Exhibition | Faculty of Technology RUSL",
    description:
      "Join 5000+ attendees at EXTRU 2026, Sri Lanka's premier technology exhibition. February 20-22, 2026 at RUSL.",
    images: ["/og-image.jpg"],
    creator: "@extru2026",
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
  verification: {
    // Add your verification codes when available
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EXTRU 2026 - Annual Technology Exhibition",
    description:
      "EXTRU 2026 is Sri Lanka's premier technology exhibition featuring 150+ innovative student projects, workshops, tech talks, and networking opportunities.",
    startDate: "2026-02-20T09:00:00+05:30",
    endDate: "2026-02-22T18:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "New Faculty Complex, Faculty of Technology",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Faculty of Technology, Rajarata University of Sri Lanka",
        addressLocality: "Mihintale",
        addressRegion: "North Central Province",
        postalCode: "50300",
        addressCountry: "LK",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Faculty of Technology, Rajarata University of Sri Lanka",
      url: "https://tech.rjt.ac.lk",
    },
    image: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru2026.com"}/og-image.jpg`,
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru2026.com"}/robot.png`,
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "LKR",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://extru2026.com",
    },
    performer: {
      "@type": "Organization",
      name: "Faculty of Technology Students, RUSL",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Students, Industry Professionals, Technology Enthusiasts",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EXTRU 2026",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://extru2026.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru2026.com"}/icon.svg`,
    description:
      "Annual technology exhibition organized by Faculty of Technology, Rajarata University of Sri Lanka",
    sameAs: [
      "https://www.facebook.com/extru2026",
      "https://twitter.com/extru2026",
      "https://www.instagram.com/extru2026",
      "https://www.linkedin.com/company/extru2026",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@extru2026.com",
    },
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

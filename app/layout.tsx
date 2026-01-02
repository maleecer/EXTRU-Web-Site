import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
// Analytics removed - enable in Vercel dashboard if needed
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
    default: "EXTRU 2026 - Technology Exhibition | Faculty of Technology RUSL",
    template: "%s | EXTRU 2026 - Faculty of Technology RUSL",
  },
  description:
    "EXTRU 2026: an Anuual Tech exhibition at RUSL. Organized by the Students' Union of Faculty of Technology, Rajarata University of Sri Lanka. 150+ student projects, workshops & networking.",
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
    "Sri Lanka Tech Events",
    "Faculty of Technology RUSL"
  ],
  authors: [{ name: "Faculty of Technology, RUSL" }],
  creator: "Faculty of Technology, Rajarata University of Sri Lanka",
  publisher: "EXTRU 2026",
  category: "Technology",
  classification: "Education, Technology Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "si-LK": "/",
    },
  },
  openGraph: {
    title: "EXTRU 2026 - Technology Exhibition | Faculty of Technology RUSL",
    description:
      "Join 5000+ attendees at EXTRU 2026, Sri Lanka's premier technology exhibition featuring 150+ innovative projects, workshops, and industry networking. March 6-7, 2026 at RUSL.",
    url: "/",
    siteName: "EXTRU 2026",
    locale: "en_US",
    type: "website",
    countryName: "Sri Lanka",
    images: [
      {
        url: "/og-image.png",
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
      "Join 5000+ attendees at EXTRU 2026, Sri Lanka's premier technology exhibition. March 6-7, 2026 at RUSL.",
    images: ["/og-image.png"],
    creator: "@extru2026",
    site: "@extru2026",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Site verification handled via DNS TXT records - no meta tags needed
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/extru-logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/EXTRU LOGO white 1.png",
  },
  other: {
    "geo.region": "LK-7",
    "geo.placename": "Mihintale, Sri Lanka",
    "geo.position": "8.3556;80.5111",
    "ICBM": "8.3556, 80.5111",
    "revisit-after": "7 days",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
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
    startDate: "2026-03-06T09:00:00+05:30",
    endDate: "2026-03-07T18:00:00+05:30",
    location: {
      "@type": "Place",
      name: "Faculty of Technology, Rajarata University of Sri Lanka",
      address: {
        "@type": "PostalAddress",
        streetAddress: "EXTRU Organizing Committee, Faculty of Technology, Rajarata University of Sri Lanka",
        addressLocality: "Mihintale",
        addressRegion: "North Central Province",
        postalCode: "50300",
        addressCountry: "LK",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Faculty of Technology, Rajarata University of Sri Lanka",
      url: "https://fot.rjt.ac.lk",
    },
    image: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk"}/og-image.png`,
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk"}/robot.png`,
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "LKR",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk",
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
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk"}/icon.svg`,
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
      email: "extru@tec.rjt.ac.lk",
    },
  };

  // WebSite schema for sitelinks search box
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EXTRU 2026",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk",
    description: "Sri Lanka's premier technology exhibition featuring 150+ innovative projects",
    publisher: {
      "@type": "Organization",
      name: "Faculty of Technology, RUSL",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk"}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // FAQ Schema for rich snippets
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is EXTRU 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EXTRU 2026 is Sri Lanka's premier annual technology exhibition organized by the Students' Union of Faculty of Technology at Rajarata University of Sri Lanka. It features 150+ innovative student projects, workshops, tech talks, and networking opportunities.",
        },
      },
      {
        "@type": "Question",
        name: "When and where is EXTRU 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EXTRU 2026 will be held on March 6-7, 2026 at the Faculty of Technology, Rajarata University of Sri Lanka, Mihintale.",
        },
      },
      {
        "@type": "Question",
        name: "Is EXTRU 2026 free to attend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, EXTRU 2026 is free to attend for all visitors including students, industry professionals, and technology enthusiasts.",
        },
      },
      {
        "@type": "Question",
        name: "What can I see at EXTRU 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can explore 150+ innovative student projects in areas like Robotics, IoT, AI, Engineering, and more. The event includes workshops, tech talks, competitions, and networking opportunities with 5000+ attendees.",
        },
      },
      {
        "@type": "Question",
        name: "How can I participate in EXTRU 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can participate by visiting the exhibition, attending workshops, or contacting the organizing committee at extru@tec.rjt.ac.lk for sponsorship and collaboration opportunities.",
        },
      },
    ],
  };

  // BreadcrumbList schema
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_SITE_URL || "https://extru.edu.lk",
      },
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

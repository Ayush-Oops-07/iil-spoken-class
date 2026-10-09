import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "IIL — Indian Institute of Language | Spoken English, Grammar & Public Speaking in Gopalganj",
  description:
    "Indian Institute of Language (IIL) Gopalganj, founded by Aftab Alam. Master English fluency, grammar, public speaking, vocabulary, and personality development. Direct admission on WhatsApp.",
  keywords: [
    "IIL Gopalganj",
    "Indian Institute of Language",
    "Aftab Alam",
    "Spoken English in Gopalganj",
    "English coaching Gopalganj Bihar",
    "Public speaking classes Gopalganj",
    "Personality development Gopalganj",
    "English grammar institute Gopalganj",
  ],
  authors: [{ name: "Aftab Alam", url: "https://www.instagram.com/iilbyaftabalam/" }],
  openGraph: {
    title: "IIL — Indian Institute of Language | Spoken English in Gopalganj",
    description:
      "Transform your English communication skills with Aftab Alam at IIL Gopalganj. Live batches, stage practice, and interview prep.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/img/group.jpg",
        width: 1200,
        height: 630,
        alt: "IIL Gopalganj - Indian Institute of Language",
      },
    ],
  },
  icons: {
    icon: "/img/logo.jpg",
    apple: "/img/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org EducationalOrganization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Indian Institute of Language (IIL)",
              "alternateName": "IIL Gopalganj",
              "founder": {
                "@type": "Person",
                "name": "Aftab Alam"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Kailash Hotel, Yadopur Road",
                "addressLocality": "Gopalganj",
                "addressRegion": "Bihar",
                "postalCode": "841428",
                "addressCountry": "IN"
              },
              "telephone": "+919102824592",
              "sameAs": [
                "https://www.instagram.com/iilbyaftabalam/"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#101828] font-['Plus_Jakarta_Sans',sans-serif] antialiased">
        {children}
      </body>
    </html>
  );
}

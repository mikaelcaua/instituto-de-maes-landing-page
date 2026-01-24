import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.institutomaespaisvilaverde.com.br"),
  title: {
    default:
      "Instituto de Mães e Pais Vila Verde | ONG em São Luís (Anjo da Guarda)",
    template: "%s | Instituto Vila Verde",
  },
  description:
    "Instituto Maes e Pais Vila Verde (São Luís - MA). Projetos sociais na comunidade do Anjo da Guarda e Itaqui-Bacanga. Apoio a famílias, mulheres e crianças.",
  keywords: [
    "instituto de mães e pais",
    "maesepais",
    "maes e pais",
    "vila verde",
    "anjo da guarda",
    "itaqui bacanga",
    "ong sao luis",
    "instituomaes",
    "instituto vila verde",
    "projeto social vila verde",
  ],
  authors: [{ name: "Instituto Vila Verde" }],
  creator: "Instituto Vila Verde",
  publisher: "Instituto Vila Verde",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: "Instituto de Mães e Pais Vila Verde",
    description: "Ação social e transformação na Vila Verde e Anjo da Guarda.",
    url: "https://www.institutomaespaisvilaverde.com.br",
    siteName: "Instituto Maes e Pais Vila Verde",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/icone-instituto-maes-pais-vila-verde-light.png",
        width: 512,
        height: 512,
        alt: "Logo Instituto de Mães e Pais Vila Verde",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Instituto Vila Verde",
    description: "Ação social no Anjo da Guarda e Vila Verde - MA",
    images: ["/icone-instituto-maes-pais-vila-verde-light.png"],
  },
  icons: {
    icon: [
      {
        url: "/icone-instituto-maes-pais-vila-verde-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icone-instituto-maes-pais-vila-verde-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Instituto de Mães e Pais Vila Verde",
    url: "https://www.institutomaespaisvilaverde.com.br",
    logo: "https://www.institutomaespaisvilaverde.com.br/icone-instituto-maes-pais-vila-verde-light.png",
    sameAs: ["https://www.instagram.com/institutodemaesepaisvilaverde/"],
    alternateName: [
      "Instituto Maes e Pais Vila Verde",
      "Instituto de Maes e Pais",
      "Maes e Pais Vila Verde",
      "Instituto Vila Verde",
      "ONG Vila Verde",
      "Projeto Vila Verde",
      "maesepais",
      "maesepaisvilaverde",
      "institutomaes",
      "ONG Anjo da Guarda",
      "Instituto Anjo da Guarda",
      "Projeto Social Anjo da Guarda",
      "ONG Itaqui Bacanga",
      "Ação Social Vila Verde",
      "Instituição Vila Verde",
      "Centro Comunitário Vila Verde",
    ],
    description:
      "ONG dedicada ao empoderamento de famílias na Vila Verde e Anjo da Guarda, São Luís.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Luís",
      addressRegion: "MA",
      addressCountry: "BR",
      streetAddress: "Anjo da Guarda",
    },
    areaServed: {
      "@type": "Place",
      name: [
        "Anjo da Guarda",
        "Vila Verde",
        "Itaqui-Bacanga",
        "São Luís",
        "Maranhão",
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

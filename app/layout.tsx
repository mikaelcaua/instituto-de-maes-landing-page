import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instituto de Mães e Pais Vila Verde | Comunidade & Transformação",
  description:
    "O Instituto de Mães e Pais Vila Verde é uma organização comunitária em São Luís, Maranhão, dedicada ao empoderamento de mulheres e famílias através de projetos sociais, capacitação profissional e fortalecimento comunitário.",
  generator: "v0.app",
  keywords: [
    "instituto de mães",
    "vila verde",
    "anjo da guarda",
    "são luís",
    "maranhão",
    "projetos sociais",
    "comunidade",
  ],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

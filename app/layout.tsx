import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Bettina Ruibal | Abogada de Familia en Buenos Aires",
  description:
    "Abogada especialista en derecho de familia, divorcios, custodia, alimentos y sucesiones en Buenos Aires. Asesoramiento integral desde 1997.",
  keywords:
    "abogada familia, divorcio, custodia hijos, alimentos, derecho sucesorio, Buenos Aires, Tribunales, Caballito",
  authors: [{ name: "Bettina Ruibal" }],
  metadataBase: new URL("https://jasoc.com.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jasoc.com.ar",
    siteName: "Bettina Ruibal - Abogada de Familia",
    title: "Bettina Ruibal | Abogada de Familia en Buenos Aires",
    description:
      "Especialista en derecho de familia, divorcios, custodia, alimentos y sucesiones. Más de 25 años de experiencia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bettina Ruibal - Abogada de Familia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bettina Ruibal | Abogada de Familia",
    description:
      "Especialista en derecho de familia. Asesoramiento integral en Buenos Aires.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFB8A4" />
        <link rel="canonical" href="https://jasoc.com.ar" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://jasoc.com.ar",
              name: "Bettina Ruibal - Abogada de Familia",
              image: "https://jasoc.com.ar/og-image.png",
              description:
                "Abogada especialista en derecho de familia, divorcios, custodia, alimentos y sucesiones",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Buenos Aires",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              email: "bettina@jasoc.com.ar",
              url: "https://jasoc.com.ar",
              sameAs: [],
              areaServed: "Buenos Aires",
              priceRange: "Consultar",
              knowsAbout: [
                "Derecho de Familia",
                "Divorcio",
                "Custodia de Hijos",
                "Alimentos",
                "Derecho Sucesorio",
                "Uniones Convivenciales",
                "Violencia Familiar",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Bettina Ruibal - Servicios Legales",
              url: "https://jasoc.com.ar",
              email: "bettina@jasoc.com.ar",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Buenos Aires",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              description:
                "Servicios legales especializados en derecho de familia",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

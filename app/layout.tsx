import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bettina Ruibal | Abogada de Familia en Buenos Aires",
  description:
    "Bettina Ruibal, abogada de familia en Buenos Aires. Asesoramiento en divorcios, alimentos, sucesiones y conflictos familiares desde 1997.",
  keywords:
    "abogada de familia Buenos Aires, abogada divorcio Buenos Aires, abogada sucesiones Buenos Aires, abogada alimentos CABA",
  authors: [{ name: "Bettina Ruibal" }],
  metadataBase: new URL("https://jasoc.com.ar"),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LegalService",
                  "@id": "https://jasoc.com.ar/#legal-service",
                  name: "Bettina Ruibal - Abogada de Familia",
                  image: "https://jasoc.com.ar/og-image.png",
                  description:
                    "Servicios legales especializados en derecho de familia y sucesiones en Buenos Aires.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Buenos Aires",
                    addressRegion: "Ciudad Autónoma de Buenos Aires",
                    addressCountry: "AR",
                  },
                  email: "bettina@jasoc.com.ar",
                  url: "https://jasoc.com.ar/",
                  areaServed: [
                    { "@type": "City", name: "Buenos Aires" },
                    {
                      "@type": "AdministrativeArea",
                      name: "Ciudad Autónoma de Buenos Aires",
                    },
                  ],
                  priceRange: "Consultar",
                  knowsAbout: [
                    "Derecho de Familia",
                    "Divorcio",
                    "Alimentos",
                    "Sucesiones",
                    "Responsabilidad parental",
                    "Violencia familiar",
                  ],
                  founder: { "@id": "https://jasoc.com.ar/#bettina-ruibal" },
                },
                {
                  "@type": "Person",
                  "@id": "https://jasoc.com.ar/#bettina-ruibal",
                  name: "Bettina Ruibal",
                  jobTitle: "Abogada especialista en derecho de familia",
                  url: "https://jasoc.com.ar/",
                  email: "bettina@jasoc.com.ar",
                  worksFor: { "@id": "https://jasoc.com.ar/#legal-service" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://jasoc.com.ar/#website",
                  url: "https://jasoc.com.ar/",
                  name: "Bettina Ruibal | Abogada de Familia",
                  inLanguage: "es-AR",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

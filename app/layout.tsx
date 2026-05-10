import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { QueryProvider } from "@/components/query-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://ashirarif.com";
const siteTitle = "Ashir Arif | MERN Stack Developer";
const siteDescription =
  "Ashir Arif is a MERN Stack Developer specializing in Next.js, React, Node.js, MongoDB and TypeScript. Building fast, scalable, and premium web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Ashir Arif",
  },
  description: siteDescription,

  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB",
    "Express.js",
    "Web Developer Pakistan",
    "Freelance Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Ashir Arif",
  ],

  authors: [{ name: "Ashir Arif", url: siteUrl }],
  creator: "Ashir Arif",
  publisher: "Ashir Arif",

  alternates: {
    canonical: siteUrl,
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
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ashir Arif Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashir Arif — MERN Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@ashirarif",
    site: "@ashirarif",
  },

  icons: {
    icon: [{ url: "/branding/logo.png", type: "image/png" }],
    apple: "/branding/logo.png",
    shortcut: "/branding/logo.png",
  },

  manifest: "/site.webmanifest",

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashir Arif",
  url: siteUrl,
  email: "ashir.codesmith@gmail.com",
  jobTitle: "MERN Stack Developer",
  description: siteDescription,
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    "https://github.com/dev-ashir768",
    "https://www.linkedin.com/in/ashir-arif-642a72279/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "Full Stack Web Development",
  ],
  offers: {
    "@type": "Offer",
    description: "Freelance web development services",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          outfit.variable,
          jakarta.variable,
          "font-body antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <QueryProvider>
            <SmoothScroll>
              <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-primary-foreground">
                <Header />
                <main className="flex-1 pb-20 md:pb-0">{children}</main>
                <Footer />
              </div>
            </SmoothScroll>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

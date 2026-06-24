import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ashirarif.com";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-D1FG03CXMR";
const siteTitle = "Ashir Arif | AI Automation Developer — Chatbots, Voice Agents & Workflow Automation";
const siteDescription =
  "Hire Ashir Arif — AI Automation Developer & MERN Stack Expert. I build AI chatbots, voice agents, and workflow automations using n8n, Make, Zapier, and OpenAI. Available for freelance projects worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Ashir Arif",
  },
  description: siteDescription,

  keywords: [
    // High-intent AI automation searches
    "AI Automation Developer",
    "hire AI automation developer",
    "AI automation freelancer",
    "AI chatbot developer",
    "chatbot development services",
    "voice agent developer",
    "AI voice agent",
    "workflow automation developer",
    "n8n developer",
    "n8n automation expert",
    "Make automation developer",
    "Zapier automation expert",
    "OpenAI developer",
    "LLM integration developer",
    "AI agent developer",
    "business automation developer",
    "AI automation Pakistan",
    "freelance AI developer",
    // Web dev
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Web Developer Pakistan",
    "Freelance Developer",
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
        alt: "Ashir Arif — MERN Stack & AI Automation Developer",
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",       item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About",      item: `${siteUrl}/#about` },
      { "@type": "ListItem", position: 3, name: "Skills",     item: `${siteUrl}/#skills` },
      { "@type": "ListItem", position: 4, name: "Experience", item: `${siteUrl}/#experience` },
      { "@type": "ListItem", position: 5, name: "Projects",   item: `${siteUrl}/#projects` },
      { "@type": "ListItem", position: 6, name: "Contact",    item: `${siteUrl}/#contact` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashir Arif",
    url: siteUrl,
    email: "info.ashirarif@gmail.com",
    jobTitle: "MERN Stack & AI Automation Developer",
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
      "AI Automation",
      "Chatbot Development",
      "Voice Agent Development",
      "Workflow Automation",
      "n8n",
      "Make (Integromat)",
      "Zapier",
      "OpenAI API",
      "LLM Integration",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "MERN Stack & AI Automation Developer",
      description:
        "Building full-stack web applications and intelligent AI automation systems including chatbots, voice agents, and workflow automations.",
      occupationLocation: {
        "@type": "Country",
        name: "Pakistan",
      },
      skills:
        "Next.js, React.js, Node.js, MongoDB, TypeScript, n8n, Make, Zapier, OpenAI, Chatbots, Voice Agents",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ashir Arif Portfolio",
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Ashir Arif",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI automation development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI automation development involves building intelligent systems that automate business processes — including AI chatbots for customer support, voice agents for phone interactions, and workflow automations using tools like n8n, Make, and Zapier integrated with LLMs like OpenAI and Claude.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Ashir Arif offer as an AI Automation Developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashir Arif offers AI chatbot development, voice agent development, end-to-end workflow automation using n8n, Make, and Zapier, OpenAI and Claude LLM integration, lead generation automation, customer support automation, and onboarding pipeline automation for businesses worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire an AI automation developer for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can hire Ashir Arif as a freelance AI automation developer by reaching out via the contact form at ashirarif.com or emailing info.ashirarif@gmail.com. He is available for worldwide remote projects.",
        },
      },
      {
        "@type": "Question",
        name: "What tools does Ashir Arif use for AI automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ashir Arif uses n8n, Make (formerly Integromat), Zapier, OpenAI API, Claude API, and custom Node.js integrations to build powerful AI automation pipelines for lead generation, customer support, voice interactions, and internal business workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI automation help my business save time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI automation eliminates repetitive manual tasks like data entry, customer follow-ups, appointment scheduling, and support ticket handling — saving businesses hours every day. Ashir Arif specializes in building these automations using n8n, Make, Zapier, and AI models.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation & MERN Stack Development Services",
    provider: {
      "@type": "Person",
      name: "Ashir Arif",
      url: siteUrl,
    },
    serviceType: "Freelance Software Development",
    description:
      "Custom MERN Stack web applications, AI-powered chatbots, voice agents, and end-to-end workflow automation using n8n, Make, and Zapier.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MERN Stack Web Development",
            description:
              "Production-grade SaaS platforms, e-commerce systems, and admin dashboards using React, Next.js, Node.js, and MongoDB.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Chatbot Development",
            description:
              "Intelligent chatbots powered by OpenAI and Claude for customer support, lead generation, and onboarding automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Voice Agent Development",
            description:
              "AI-powered voice agents for customer interaction, automated calls, and voice-based workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation",
            description:
              "End-to-end business process automation using n8n, Make, and Zapier to eliminate manual tasks and scale operations.",
          },
        },
      ],
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
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

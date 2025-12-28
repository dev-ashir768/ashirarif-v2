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

export const metadata: Metadata = {
  title: "Ashir Arif | MERN Stack Developer",
  description:
    "Portfolio of Ashir Arif, a skilled MERN Stack Developer building premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          outfit.variable,
          jakarta.variable,
          "font-body antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <SmoothScroll>
              <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-primary-foreground">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </SmoothScroll>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

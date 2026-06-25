"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex min-h-[calc(100vh-4.5rem)] md:min-h-screen flex-col items-center justify-center overflow-hidden pt-16 md:pt-24">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[80px] rounded-full mix-blend-screen animate-blob opacity-50 pointer-events-none will-change-transform" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/15 blur-[80px] rounded-full mix-blend-screen animate-blob animation-delay-2000 opacity-50 pointer-events-none will-change-transform" />

        <div className="container relative z-10 flex flex-col items-center text-center">
          {/* Logo — visible immediately for LCP, animates scale only */}
          <m.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mb-4 md:mb-6"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-[0_0_40px_rgba(121,40,202,0.4)]">
              <Image
                src="/branding/logo.png"
                alt="Ashir Arif — AI Automation Developer"
                fill
                className="object-cover mix-blend-screen"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>
          </m.div>

          {/* Name + Role — visible immediately (no opacity:0) for LCP */}
          <m.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mb-3 md:mb-5"
          >
            <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none">
              <span className="block text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50">
                {personalData.name}
              </span>
            </h1>
            <p className="font-heading text-base sm:text-2xl md:text-4xl font-light text-muted-foreground mt-2 md:mt-3 tracking-wide">
              {personalData.role}
            </p>
            <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-medium tracking-widest text-primary/80 uppercase">
              {personalData.roleHighlight}
            </p>
          </m.div>

          {/* Headline */}
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="max-w-lg text-base sm:text-lg text-muted-foreground mb-7 md:mb-10 leading-relaxed"
          >
            {personalData.heroHeadline}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full h-11 px-8 text-sm font-semibold bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(121,40,202,0.35)]"
            >
              <Link href="#contact">
                Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </m.div>

          {/* Social Links */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-8 md:mt-12 flex gap-4 text-muted-foreground"
          >
            {[
              {
                href: "https://github.com/dev-ashir768",
                Icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/ashir-arif-642a72279/",
                Icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: `mailto:${personalData.email}`,
                Icon: Mail,
                label: "Email",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 hover:scale-110"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}

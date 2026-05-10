"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] md:min-h-screen flex-col items-center justify-center overflow-hidden pt-16 md:pt-24">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[80px] rounded-full mix-blend-screen animate-blob opacity-50 pointer-events-none will-change-transform" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/15 blur-[80px] rounded-full mix-blend-screen animate-blob animation-delay-2000 opacity-50 pointer-events-none will-change-transform" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mb-4 md:mb-6"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-[0_0_40px_rgba(121,40,202,0.4)]">
            <Image
              src="/branding/logo.png"
              alt="Ashir Arif Logo"
              fill
              className="object-cover mix-blend-screen"
              priority
            />
          </div>
        </motion.div>

        {/* Available badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="inline-flex items-center rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-primary shadow-lg backdrop-blur-md mb-5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Available for new projects
        </motion.div> */}

        {/* Name + Role */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
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
        </motion.div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="max-w-lg text-base sm:text-lg text-muted-foreground mb-7 md:mb-10 leading-relaxed"
        >
          {personalData.heroHeadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full h-11 px-8 text-sm border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:text-foreground backdrop-blur-sm transition-all duration-300"
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65, ease }}
          className="mt-8 md:mt-12 flex gap-4 text-muted-foreground"
        >
          {[
            {
              href: "https://github.com/ashirarif",
              Icon: Github,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/ashirarif",
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
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

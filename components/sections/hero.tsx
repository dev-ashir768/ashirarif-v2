"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
  Box,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Optimized Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[80px] rounded-full mix-blend-screen animate-blob opacity-50 pointer-events-none will-change-transform" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/15 blur-[80px] rounded-full mix-blend-screen animate-blob animation-delay-2000 opacity-50 pointer-events-none will-change-transform" />

      <div className="container relative z-10 flex flex-col items-center text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm font-medium text-primary shadow-lg backdrop-blur-md mb-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-8"
        >
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/50">
            {personalData.name}
          </span>
          <span className="block text-2xl sm:text-4xl md:text-5xl font-light text-muted-foreground mt-4">
            {personalData.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          {personalData.heroHeadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
          >
            <Link href="#contact">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full h-12 px-8 text-base border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:text-foreground backdrop-blur-sm transition-all duration-300"
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex gap-6 text-muted-foreground"
        >
          <a
            href="https://github.com/ashirarif"
            target="_blank"
            className="hover:text-foreground transition-colors hover:scale-110 duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ashirarif"
            target="_blank"
            className="hover:text-foreground transition-colors hover:scale-110 duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:ashirarif@example.com"
            className="hover:text-foreground transition-colors hover:scale-110 duration-200"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

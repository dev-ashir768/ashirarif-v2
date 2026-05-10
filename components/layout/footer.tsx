"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="hidden md:block relative py-10 bg-black/5 dark:bg-black/40 border-t border-black/10 dark:border-white/5 overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tighter mb-6 hover:text-primary transition-colors"
        >
          ashir
        </Link>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
          <a
            href="https://github.com/dev-ashir768"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashir-arif-642a72279/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/ashirarif"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={`mailto:ashir.codesmith@gmail.com`}
            className="p-2.5 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Ashir Arif. Crafted with passion.
        </p>
      </div>
    </footer>
  );
}

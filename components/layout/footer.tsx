"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 bg-black/40 border-t border-white/5 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tighter mb-8 hover:text-primary transition-colors"
        >
          ashir
        </Link>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          <a
            href="https://github.com/ashirarif"
            target="_blank"
            className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ashirarif"
            target="_blank"
            className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:ashirarif@example.com"
            className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-center text-muted-foreground/60">
          © {new Date().getFullYear()} Ashir Arif. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

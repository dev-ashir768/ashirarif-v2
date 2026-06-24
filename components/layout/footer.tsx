"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "About",            href: "#about" },
  { label: "Skills",           href: "#skills" },
  { label: "Experience",       href: "#experience" },
  { label: "Projects",         href: "#projects" },
  { label: "Contact",          href: "#contact" },
];

const services = [
  "AI Chatbot Development",
  "Voice Agent Development",
  "Workflow Automation",
  "n8n & Make Automation",
  "MERN Stack Development",
  "Next.js Development",
];

export function Footer() {
  return (
    <footer className="hidden md:block relative py-12 bg-black/5 dark:bg-black/40 border-t border-black/10 dark:border-white/5 overflow-hidden">
      <div className="container relative z-10">

        {/* Top: Brand + Nav + Services */}
        <div className="grid grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-5xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 hover:to-foreground/70 transition-all"
            >
              ashir
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI Automation Developer &amp; MERN Stack Expert. Building chatbots, voice agents, and workflow automations for businesses worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-muted-foreground">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: Social + Copyright */}
        <div className="flex items-center justify-between pt-6 border-t border-black/10 dark:border-white/5">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-foreground font-medium">Ashir Arif</span> — AI Automation Developer &amp; MERN Stack Developer. All rights reserved.
          </p>

          <div className="flex gap-3">
            {[
              { href: "https://github.com/dev-ashir768",                       Icon: Github,   label: "GitHub" },
              { href: "https://www.linkedin.com/in/ashir-arif-642a72279/",     Icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/ashirarif",                         Icon: Twitter,  label: "Twitter" },
              { href: "mailto:info.ashirarif@gmail.com",                       Icon: Mail,     label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

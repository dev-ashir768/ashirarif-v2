"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  User,
  Code2,
  Briefcase,
  GraduationCap,
  FolderOpen,
  MessageSquare,
} from "lucide-react";
import { useLenis } from "lenis/react";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { name: "About", href: "about", icon: User },
  { name: "Skills", href: "skills", icon: Code2 },
  { name: "Work", href: "experience", icon: Briefcase },
  { name: "Edu", href: "education", icon: GraduationCap },
  { name: "Projects", href: "projects", icon: FolderOpen },
  { name: "Contact", href: "contact", icon: MessageSquare },
];

export function Header() {
  const [activeSection, setActiveSection] = React.useState("");
  const lenis = useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (!id) return;
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -80 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -50% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* ── Top Header (desktop + mobile logo/toggle) ── */}
      <header className="fixed top-0 z-50 w-full flex justify-center pt-3 md:pt-5 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center pointer-events-auto gap-4 md:gap-10"
        >
          <Link
            href="/"
            className="font-heading font-bold text-lg tracking-tighter hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo(0);
            }}
          >
            ashir
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative cursor-pointer",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/60 dark:text-muted-foreground"
                )}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>

          <ModeToggle />
        </motion.div>
      </header>

      {/* ── Mobile Bottom Nav ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div
          className="glass border-t border-black/10 dark:border-white/10 flex items-center justify-around"
          style={{
            paddingTop: "10px",
            paddingBottom: "max(10px, env(safe-area-inset-bottom))",
          }}
        >
          {navItems.map(({ name, href, icon: Icon }) => {
            const active = activeSection === href;
            return (
              <a
                key={href}
                href={`#${href}`}
                onClick={(e) => handleScroll(e, href)}
                className="relative flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-200 cursor-pointer"
              >
                {active && (
                  <motion.div
                    layoutId="bottomNavPill"
                    className="absolute inset-0 bg-primary/12 dark:bg-primary/15 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon
                  className={cn(
                    "w-[22px] h-[22px] relative z-10 transition-colors duration-200",
                    active ? "text-primary" : "text-foreground/45 dark:text-muted-foreground"
                  )}
                  strokeWidth={active ? 2.2 : 1.8}
                />
                <span
                  className={cn(
                    "text-[10px] font-semibold relative z-10 transition-colors duration-200",
                    active ? "text-primary" : "text-foreground/45 dark:text-muted-foreground"
                  )}
                >
                  {name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}

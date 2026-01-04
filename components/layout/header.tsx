"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Work", href: "experience" },
  { name: "Education", href: "education" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const lenis = useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle smooth scroll without hash update
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (!id) return;

    // Scroll using Lenis if available, fallback to native
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -100 });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Intersection Observer to track active section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-60"
        style={{ scaleX }}
      />

      <header className="fixed top-0 z-50 w-full flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between pointer-events-auto w-full md:w-auto md:min-w-[500px] gap-4 md:gap-12"
        >
          <Link
            href="/"
            className="font-heading font-bold text-xl tracking-tighter hover:text-primary transition-colors z-50 relative"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo(0);
              setIsOpen(false);
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
                  "text-sm font-medium transition-colors hover:text-primary relative group cursor-pointer",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50 relative">
            <ModeToggle />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Full Screen Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-40 md:hidden flex flex-col items-center justify-center pointer-events-auto"
            >
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={`#${item.href}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className={cn(
                      "text-4xl font-heading font-bold transition-colors hover:text-primary",
                      activeSection === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={(e) => handleScroll(e, item.href)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-muted-foreground text-sm"
              >
                © {new Date().getFullYear()} Ashir Arif
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

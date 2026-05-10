"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoadingMore(false);
    }, 500);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-14 md:py-20 px-4 md:px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4"
        >
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Selected <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-md">
              A collection of projects where design meets functionality.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full gap-2 border-primary/20 hover:bg-primary/10 shrink-0"
            asChild
          >
            <a href="https://github.com/ashirarif" target="_blank" rel="noopener noreferrer">
              View GitHub <Github className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.07, ease }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden glass-card flex flex-col h-full"
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-400" />
                </div>

                <div className="p-4 md:p-5 relative z-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors truncate">
                        {project.title}
                      </h3>
                      <div className="flex gap-1.5 mt-1.5 flex-wrap">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary hover:bg-secondary/80 text-[10px] px-2 py-0.5 text-nowrap"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={project.link}
                      className="p-1.5 bg-black/5 dark:bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors shrink-0 mt-0.5"
                      target="_blank"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mt-2.5">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              size="lg"
              variant="secondary"
              className="rounded-full min-w-[140px]"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                "Show More"
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

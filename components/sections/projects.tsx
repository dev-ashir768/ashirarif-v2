"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoadingMore(false);
    }, 600);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-24 px-4 md:px-6 relative">
      {/* Bg Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Selected <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              A collection of projects where design meets functionality.
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full gap-2 border-primary/20 hover:bg-primary/10"
          >
            View GitHub <Github className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass-card flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-muted group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-6 relative z-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {/* <div className="flex gap-2 mt-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary hover:bg-secondary/80 text-xs text-nowrap"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div> */}
                    </div>
                    <Link
                      href={project.link}
                      className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors shrink-0"
                      target="_blank"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                  {/* <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              size="lg"
              variant="secondary"
              className="rounded-full min-w-[150px]"
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

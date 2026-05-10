"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Education() {
  return (
    <section id="education" className="container relative py-8 md:py-12 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Education &amp; <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-base">
          My academic foundation and professional credentials.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/40 to-transparent transform md:-translate-x-1/2 ml-4 md:ml-0" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="absolute left-4 md:left-1/2 top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20 transform md:-translate-x-1/2 translate-x-[-50%] z-10" />

            <div className="ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-1/2">
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Card className="glass-card p-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap className="w-14 h-14" />
                  </div>
                  <CardContent className="p-0">
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium mb-2 bg-primary/10 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3 h-3" /> {edu.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold mt-1.5">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-muted-foreground mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="container relative py-20 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          My academic foundation and professional credentials.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent transform md:-translate-x-1/2 ml-4 md:ml-0" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Center Dot */}
            <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 transform md:-translate-x-1/2 translate-x-[-50%] z-10" />

            {/* Content */}
            <div className="ml-12 md:ml-0 w-full md:w-1/2">
              <Card className="glass-card p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap className="w-16 h-16" />
                </div>
                <CardContent className="p-0">
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-2 bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" /> {edu.year}
                  </span>
                  <h3 className="font-heading text-xl font-bold mt-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

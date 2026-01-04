"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Laptop, Cpu, Zap, Database } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { personalData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="container relative py-20 px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Integration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Beyond the <span className="text-primary">Code</span>.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{personalData.about}</p>
            <p>
              I don't just write code; I engineer solutions. My philosophy
              revolves around creating interfaces that feel natural and backends
              that are invisible yet powerful.
            </p>
            <p className="border-l-4 border-primary pl-6 italic text-foreground">
              "Great software is a combination of logic, art, and empathy."
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="space-y-4 sm:mt-8">
            <Card className="glass-card p-4 md:p-6 transform hover:-translate-y-2 transition-transform">
              <Cpu className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed and efficiency.
              </p>
            </Card>
            <Card className="glass-card p-4 md:p-6 bg-primary/10 border-primary/20 transform hover:-translate-y-2 transition-transform">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Scalability</h3>
              <p className="text-sm text-muted-foreground">
                Built to grow with your business.
              </p>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="glass-card p-4 md:p-6 bg-linear-to-br from-primary/20 to-transparent border-primary/20 transform hover:-translate-y-2 transition-transform">
              <Code2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Maintainable and readable architecture.
              </p>
            </Card>
            <Card className="glass-card p-4 md:p-6 transform hover:-translate-y-2 transition-transform">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Modern UI</h3>
              <p className="text-sm text-muted-foreground">
                Pixel-perfect premium designs.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Bg Gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}

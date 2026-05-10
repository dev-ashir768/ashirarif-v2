"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Zap } from "lucide-react";

import { Card } from "@/components/ui/card";
import { personalData } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const cards = [
  {
    icon: Cpu,
    title: "Performance",
    desc: "Optimized for speed and efficiency.",
    className: "",
  },
  {
    icon: Globe,
    title: "Scalability",
    desc: "Built to grow with your business.",
    className: "bg-primary/10 border-primary/20",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Maintainable and readable architecture.",
    className: "bg-linear-to-br from-primary/20 to-transparent border-primary/20",
  },
  {
    icon: Zap,
    title: "Modern UI",
    desc: "Pixel-perfect premium designs.",
    className: "",
  },
];

export function About() {
  return (
    <section id="about" className="container relative py-14 md:py-20 px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Beyond the <span className="text-primary">Code</span>.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>{personalData.about}</p>
            <p>
              I don&apos;t just write code — I engineer solutions. My philosophy
              revolves around interfaces that feel natural and backends that are
              invisible yet powerful.
            </p>
            <p className="border-l-4 border-primary pl-5 italic text-foreground text-base">
              &quot;Great software is a combination of logic, art, and empathy.&quot;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={i % 2 === 0 ? "mt-0 sm:mt-6" : ""}
            >
              <Card
                className={`glass-card p-4 md:p-5 transition-shadow hover:shadow-lg ${card.className}`}
              >
                <card.icon className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-bold mb-1 text-sm md:text-base">{card.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{card.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}

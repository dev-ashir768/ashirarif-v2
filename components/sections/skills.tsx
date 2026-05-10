"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiJavascript,
  SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiExpress,
  SiHtml5, SiCss, SiBun, SiReactquery, SiGooglechrome, SiMysql,
  SiJquery, SiMui, SiShadcnui,
} from "react-icons/si";
import { Layers } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const skillData = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Bun.js", icon: SiBun, color: "#FBF0DF" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "Chrome Ext", icon: SiGooglechrome, color: "#4285F4" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease } },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-14 md:py-20 container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Tech <span className="text-primary">Arsenal</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
          A complete overview of my technical expertise.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
      >
        {skillData.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -4, scale: 1.03 }}
            className="group relative h-24 md:h-28 rounded-2xl glass-card flex flex-col items-center justify-center gap-2 overflow-hidden cursor-default"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-400 rounded-2xl"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-(--brand-color) transition-colors duration-300 pointer-events-none"
              style={{ "--brand-color": skill.color } as React.CSSProperties}
            />
            {skill.icon ? (
              <skill.icon
                className="w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
                style={{
                  color: skill.color === "#000000" ? "var(--foreground)" : skill.color,
                }}
              />
            ) : (
              <Layers className="w-8 h-8 text-foreground" />
            )}
            <span className="font-semibold text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center px-1 leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

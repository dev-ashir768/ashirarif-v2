"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiBun,
  SiReactquery,
  SiGooglechrome,
  SiMysql,
  SiJquery,
  SiMui,
  SiShadcnui,
} from "react-icons/si";
import { Layers } from "lucide-react";

// Prioritized Skill List
const skillData = [
  // Primary Stack (Top Priority)
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend & DB
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },

  // Tools & Libraries
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Bun.js", icon: SiBun, color: "#FBF0DF" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },

  // Foundation & Others
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "Chrome Ext", icon: SiGooglechrome, color: "#4285F4" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Tech <span className="text-primary">Arsenal</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          A complete overview of my technical expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative h-28 md:h-36 rounded-2xl glass-card flex flex-col items-center justify-center gap-3 md:gap-4 overflow-hidden"
          >
            {/* Hover Glow Effect matching brand color */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
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
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  color:
                    skill.color === "#000000"
                      ? "var(--foreground)"
                      : skill.color,
                }}
              />
            ) : (
              <Layers className="w-10 h-10 text-white" />
            )}

            <span className="font-bold text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors text-center px-2">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

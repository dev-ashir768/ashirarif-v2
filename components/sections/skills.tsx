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
  SiCss,
  SiBun,
  SiReactquery,
  SiGooglechrome,
  SiMysql,
  SiJquery,
  SiMui,
  SiShadcnui,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiRedux,
  SiGraphql,
  SiPostman,
  SiVite,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";
import { Layers } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const skillData = [
  // Core Stack
  { name: "React.js",      icon: SiReact,        color: "#61DAFB",   darkColor: "#61DAFB" },
  { name: "Next.js",       icon: SiNextdotjs,    color: "#111111",   darkColor: "#FFFFFF" },
  { name: "TypeScript",    icon: SiTypescript,   color: "#3178C6",   darkColor: "#3178C6" },
  { name: "JavaScript",    icon: SiJavascript,   color: "#D4A000",   darkColor: "#F7DF1E" },
  { name: "Node.js",       icon: SiNodedotjs,    color: "#2D8E2D",   darkColor: "#339933" },
  { name: "Express.js",    icon: SiExpress,      color: "#333333",   darkColor: "#CCCCCC" },

  // Databases
  { name: "MongoDB",       icon: SiMongodb,      color: "#47A248",   darkColor: "#47A248" },
  { name: "PostgreSQL",    icon: SiPostgresql,   color: "#4169E1",   darkColor: "#4169E1" },
  { name: "MySQL",         icon: SiMysql,        color: "#4479A1",   darkColor: "#4479A1" },
  { name: "Firebase",      icon: SiFirebase,     color: "#D4900A",   darkColor: "#FFCA28" },
  { name: "Prisma",        icon: SiPrisma,       color: "#2D3748",   darkColor: "#AAAAAA" },

  // Styling & UI
  { name: "Tailwind CSS",  icon: SiTailwindcss,  color: "#06B6D4",   darkColor: "#06B6D4" },
  { name: "Shadcn UI",     icon: SiShadcnui,     color: "#111111",   darkColor: "#FFFFFF" },
  { name: "Material UI",   icon: SiMui,          color: "#007FFF",   darkColor: "#007FFF" },
  { name: "HTML",          icon: SiHtml5,        color: "#E34F26",   darkColor: "#E34F26" },
  { name: "CSS",           icon: SiCss,          color: "#1572B6",   darkColor: "#1572B6" },

  // Tools & DevOps
  { name: "Git",           icon: SiGit,          color: "#F05032",   darkColor: "#F05032" },
  { name: "GitHub",        icon: SiGithub,       color: "#111111",   darkColor: "#EEEEEE" },
  { name: "Docker",        icon: SiDocker,       color: "#2496ED",   darkColor: "#2496ED" },
  { name: "Vercel",        icon: SiVercel,       color: "#111111",   darkColor: "#FFFFFF" },
  { name: "Vite",          icon: SiVite,         color: "#646CFF",   darkColor: "#646CFF" },
  { name: "Postman",       icon: SiPostman,      color: "#FF6C37",   darkColor: "#FF6C37" },

  // Libraries
  { name: "Redux",         icon: SiRedux,        color: "#764ABC",   darkColor: "#764ABC" },
  { name: "TanStack Query",icon: SiReactquery,   color: "#E03A3A",   darkColor: "#FF4154" },
  { name: "GraphQL",       icon: SiGraphql,      color: "#E10098",   darkColor: "#E10098" },
  { name: "Socket.io",     icon: SiSocketdotio,  color: "#111111",   darkColor: "#EEEEEE" },
  { name: "jQuery",        icon: SiJquery,       color: "#0769AD",   darkColor: "#0769AD" },
  { name: "Bun.js",        icon: SiBun,          color: "#A0763D",   darkColor: "#FBF0DF" },

  // Other
  { name: "Chrome Ext",    icon: SiGooglechrome, color: "#4285F4",   darkColor: "#4285F4" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show:   { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.3, ease } },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-8 md:py-12 container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Tech <span className="text-primary">Arsenal</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Technologies I use to build fast, scalable, full-stack applications.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5 md:gap-3"
      >
        {skillData.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -4, scale: 1.04 }}
            className="group relative h-[88px] md:h-24 rounded-xl glass-card flex flex-col items-center justify-center gap-1.5 overflow-hidden cursor-pointer"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-15 dark:group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
              style={{
                background: `radial-gradient(circle at center, var(--skill-color), transparent 70%)`,
                // @ts-ignore
                "--skill-color": skill.color,
              }}
            />
            {/* Hover border */}
            <div
              className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current transition-colors duration-300 pointer-events-none opacity-0 group-hover:opacity-40"
              style={{ color: skill.color }}
            />

            <skill.icon
              className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 dark:hidden"
              style={{ color: skill.color }}
            />
            <skill.icon
              className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 hidden dark:block"
              style={{ color: skill.darkColor }}
            />

            <span className="font-semibold text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center px-1 leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

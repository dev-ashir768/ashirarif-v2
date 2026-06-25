import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

// Above fold — load immediately
import { About } from "@/components/sections/about";

// Below fold — lazy load to reduce initial JS bundle
const Skills = dynamic(() => import("@/components/sections/skills").then((m) => ({ default: m.Skills })));
const Experience = dynamic(() => import("@/components/sections/experience").then((m) => ({ default: m.Experience })));
const Education = dynamic(() => import("@/components/sections/education").then((m) => ({ default: m.Education })));
const Projects = dynamic(() => import("@/components/sections/projects").then((m) => ({ default: m.Projects })));
const FAQ = dynamic(() => import("@/components/sections/faq").then((m) => ({ default: m.FAQ })));
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })));

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <FAQ />
      <Contact />
    </div>
  );
}

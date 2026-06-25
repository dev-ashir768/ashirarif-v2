"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
  {
    question: "What is AI automation development?",
    answer:
      "AI automation development involves building intelligent systems that automate business processes — including AI chatbots for customer support, voice agents for phone interactions, and workflow automations using tools like n8n, Make, and Zapier integrated with LLMs like OpenAI and Claude.",
  },
  {
    question: "What services does Ashir Arif offer as an AI Automation Developer?",
    answer:
      "Ashir Arif offers AI chatbot development, voice agent development, end-to-end workflow automation using n8n, Make, and Zapier, OpenAI and Claude LLM integration, lead generation automation, customer support automation, and onboarding pipeline automation for businesses worldwide.",
  },
  {
    question: "How can I hire an AI automation developer for my business?",
    answer:
      "You can hire Ashir Arif as a freelance AI automation developer by reaching out via the contact form on this site or emailing info.ashirarif@gmail.com. He is available for worldwide remote projects.",
  },
  {
    question: "What tools does Ashir Arif use for AI automation?",
    answer:
      "Ashir Arif uses n8n, Make (formerly Integromat), Zapier, OpenAI API, Claude API, and custom Node.js integrations to build powerful AI automation pipelines for lead generation, customer support, voice interactions, and internal business workflows.",
  },
  {
    question: "Can AI automation help my business save time?",
    answer:
      "Yes. AI automation eliminates repetitive manual tasks like data entry, customer follow-ups, appointment scheduling, and support ticket handling — saving businesses hours every day. Ashir Arif specializes in building these automations using n8n, Make, Zapier, and AI models.",
  },
  {
    question: "Does Ashir Arif build MERN Stack web applications as well?",
    answer:
      "Yes. Ashir Arif is a full-stack MERN Stack Developer with expertise in React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, and more. He builds production-grade SaaS platforms, e-commerce systems, admin dashboards, and custom web applications for clients worldwide.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="container relative py-8 md:py-12 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Everything you need to know about AI automation development and working with Ashir Arif.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              viewport={{ once: true }}
            >
              <div
                className={`glass-card rounded-xl overflow-hidden border transition-colors duration-200 ${
                  isOpen
                    ? "border-primary/30 bg-primary/5"
                    : "border-black/5 dark:border-white/5"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-muted-foreground">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease }}
                    >
                      <p className="px-5 pb-5 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-black/5 dark:border-white/5 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

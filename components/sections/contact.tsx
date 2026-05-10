"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { personalData } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

function FloatingInput({
  id,
  label,
  type = "text",
  error,
  className,
  ...props
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const floated = focused || filled;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); setFilled(!!e.target.value); props.onBlur?.(e); }}
        onChange={(e) => { setFilled(!!e.target.value); props.onChange?.(e); }}
        className={cn(
          "peer block w-full h-14 px-4 pt-5 pb-1 rounded-2xl border bg-black/5 dark:bg-white/5 text-base text-foreground focus:outline-none focus:ring-2 transition-all duration-200",
          error
            ? "border-destructive/50 focus:ring-destructive/20 focus:border-destructive/50"
            : "border-black/10 dark:border-white/10 focus:ring-primary/20 focus:border-primary/40",
          className
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-200 origin-left",
          floated
            ? "top-2.5 text-[10px] font-semibold tracking-widest uppercase text-primary/70"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
      {error && (
        <p className="text-xs text-destructive mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  error,
  className,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const floated = focused || filled;

  return (
    <div className="relative">
      <textarea
        id={id}
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); setFilled(!!e.target.value); props.onBlur?.(e); }}
        onChange={(e) => { setFilled(!!e.target.value); props.onChange?.(e); }}
        className={cn(
          "peer block w-full px-4 pt-8 pb-3 min-h-[140px] sm:min-h-[160px] rounded-2xl border bg-black/5 dark:bg-white/5 text-base text-foreground resize-none focus:outline-none focus:ring-2 transition-all duration-200",
          error
            ? "border-destructive/50 focus:ring-destructive/20 focus:border-destructive/50"
            : "border-black/10 dark:border-white/10 focus:ring-primary/20 focus:border-primary/40",
          className
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-200 origin-left",
          floated
            ? "top-2.5 text-[10px] font-semibold tracking-widest uppercase text-primary/70"
            : "top-4 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
      {error && (
        <p className="text-xs text-destructive mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-14 md:py-24 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none -z-10" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl md:rounded-[2.5rem] p-6 md:p-14 border border-black/5 dark:border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-black/5 dark:from-white/5 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 relative z-10">
            {/* Info Side */}
            <div className="flex flex-col justify-between h-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Let&apos;s build{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400 animate-gradient-x bg-[size:200%_auto]">
                    something epic.
                  </span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  Available for freelance projects and remote teams. Let&apos;s
                  turn your idea into reality.
                </p>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group p-4 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/8 dark:hover:bg-white/8 transition-all border border-transparent hover:border-black/5 dark:hover:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <div className="flex flex-col gap-0.5">
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-sm md:text-base font-medium hover:text-primary transition-colors truncate"
                      >
                        {personalData.email}
                      </a>
                      <a
                        href={`mailto:${personalData.secondaryEmail}`}
                        className="text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        {personalData.secondaryEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${personalData.phone
                    .replace(/\s/g, "")
                    .replace("+", "")}`}
                  target="_blank"
                  className="flex items-center gap-4 group p-4 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/8 dark:hover:bg-white/8 transition-all border border-transparent hover:border-black/5 dark:hover:border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                      WhatsApp
                    </p>
                    <span className="text-sm md:text-base font-medium">
                      {personalData.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                      Location
                    </p>
                    <span className="text-sm md:text-base font-medium">
                      Remote / Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-black/20 p-5 sm:p-7 rounded-2xl border border-black/5 dark:border-white/5 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <FloatingInput
                  id="field-name"
                  label="Your Name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <FloatingInput
                  id="field-email"
                  label="Email Address"
                  type="email"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <FloatingTextarea
                  id="field-message"
                  label="Your Message"
                  error={errors.message?.message}
                  {...register("message")}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 sm:h-14 text-base rounded-xl font-heading font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-[1.01] shadow-lg shadow-primary/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                {error && (
                  <div className="p-3 bg-destructive/10 text-destructive rounded-xl text-sm">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="p-3 bg-green-500/10 text-green-500 rounded-xl text-sm">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

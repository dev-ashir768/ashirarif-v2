"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { personalData } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

/* ─── Floating Input ─────────────────────────────────────────────────── */
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
  // float when focused, filled, OR has a validation error
  const floated = focused || filled || !!error;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          setFilled(!!e.target.value);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setFilled(!!e.target.value);
          props.onChange?.(e);
        }}
        className={cn(
          "peer block w-full h-14 px-4 pt-5 pb-1 rounded-2xl border text-base text-foreground focus:outline-none focus:ring-2 transition-all duration-200",
          "bg-white/80 dark:bg-white/5",
          error
            ? "border-destructive/60 focus:ring-destructive/20 focus:border-destructive/60"
            : "border-black/20 dark:border-white/10 focus:ring-primary/30 focus:border-primary/60",
          className
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-200",
          floated
            ? "top-[9px] text-[10px] font-bold tracking-widest uppercase text-primary/80"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
      {error && (
        <p className="text-[11px] text-destructive mt-1 ml-1">{error}</p>
      )}
    </div>
  );
}

/* ─── Floating Textarea ──────────────────────────────────────────────── */
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
  const floated = focused || filled || !!error;

  return (
    <div className="relative">
      <textarea
        id={id}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          setFilled(!!e.target.value);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setFilled(!!e.target.value);
          props.onChange?.(e);
        }}
        className={cn(
          "peer block w-full px-4 pt-7 pb-3 min-h-[130px] sm:min-h-[150px] rounded-2xl border text-base text-foreground resize-none focus:outline-none focus:ring-2 transition-all duration-200",
          "bg-white/80 dark:bg-white/5",
          error
            ? "border-destructive/60 focus:ring-destructive/20 focus:border-destructive/60"
            : "border-black/20 dark:border-white/10 focus:ring-primary/30 focus:border-primary/60",
          className
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-200",
          floated
            ? "top-[9px] text-[10px] font-bold tracking-widest uppercase text-primary/80"
            : "top-4 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
      {error && (
        <p className="text-[11px] text-destructive mt-1 ml-1">{error}</p>
      )}
    </div>
  );
}

/* ─── Contact Section ────────────────────────────────────────────────── */
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

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      content: (
        <div className="flex flex-col gap-0.5">
          <a href={`mailto:${personalData.email}`} className="text-sm md:text-base font-medium hover:text-primary transition-colors truncate">
            {personalData.email}
          </a>
          <a href={`mailto:${personalData.secondaryEmail}`} className="text-xs text-muted-foreground hover:text-primary transition-colors truncate">
            {personalData.secondaryEmail}
          </a>
        </div>
      ),
      href: undefined,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      content: <span className="text-sm md:text-base font-medium">{personalData.phone}</span>,
      href: `https://wa.me/${personalData.phone.replace(/\s/g, "").replace("+", "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
      content: <span className="text-sm md:text-base font-medium">Remote / Worldwide</span>,
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-10 md:py-16 overflow-hidden scroll-mt-16"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none -z-10" />

      <div className="container relative z-10">
        <div className="glass-card rounded-2xl md:rounded-[2rem] p-5 md:p-12 border border-black/5 dark:border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-white/20 dark:from-white/5 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 relative z-10">
            {/* Info Side */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Get In Touch</p>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                  Let&apos;s build{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400 animate-gradient-x bg-[size:200%_auto]">
                    something great.
                  </span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
                  Open to freelance projects, full-time roles, and remote teams.
                  Let&apos;s turn your idea into a product people love.
                </p>
              </motion.div>

              <div className="space-y-3">
                {contactItems.map(({ icon: Icon, label, content, href }) => {
                  const Wrapper = href ? "a" : "div";
                  const wrapperProps = href
                    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Wrapper
                      key={label}
                      {...wrapperProps}
                      className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-transparent hover:border-primary/20 hover:bg-black/8 dark:hover:bg-white/8 transition-all group"
                    >
                      <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                          {label}
                        </p>
                        {content}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-black/20 p-4 sm:p-6 rounded-2xl border border-black/10 dark:border-white/5 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  className="w-full h-12 text-sm rounded-xl font-heading font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-[1.01] shadow-lg shadow-primary/20"
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

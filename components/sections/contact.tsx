"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { personalData } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

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

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none -z-10" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 border border-black/5 dark:border-white/5 relative overflow-hidden">
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/5 dark:from-white/5 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
            {/* Info Side */}
            <div className="flex flex-col justify-between h-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Let's build <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400 animate-gradient-x bg-size-[200%_auto]">
                    something epic.
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                  I'm currently available for freelance projects and remote
                  teams. Let's discuss your next big idea.
                </p>
              </motion.div>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Emails
                    </h4>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-lg md:text-xl font-medium hover:text-primary transition-colors truncate"
                      >
                        {personalData.email}
                      </a>
                      <a
                        href={`mailto:${personalData.secondaryEmail}`}
                        className="text-base md:text-lg font-medium text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        {personalData.secondaryEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <a
                  href={`https://wa.me/${personalData.phone
                    .replace(/\s/g, "")
                    .replace("+", "")}`}
                  target="_blank"
                  className="flex items-center gap-4 group p-4 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all border border-transparent hover:border-black/5 dark:hover:border-white/10"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 10V4" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-0.5">
                      Phone / WhatsApp
                    </h4>
                    <span className="text-xl font-medium">
                      {personalData.phone}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-0.5">
                      Location
                    </h4>
                    <span className="text-xl font-medium">
                      Remote / Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/40 dark:bg-black/20 p-8 rounded-3xl border border-black/5 dark:border-white/5 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    What's your name?
                  </Label>
                  <Input
                    placeholder="John Doe"
                    {...register("name")}
                    className={cn(
                      "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 h-16 px-6 text-lg rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 transition-all placeholder:text-muted-foreground/50",
                      errors.name &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                  />
                  {errors.name && (
                    <span className="text-sm text-destructive ml-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Your Email
                  </Label>
                  <Input
                    placeholder="john@example.com"
                    {...register("email")}
                    className={cn(
                      "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 h-16 px-6 text-lg rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 transition-all placeholder:text-muted-foreground/50",
                      errors.email &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                  />
                  {errors.email && (
                    <span className="text-sm text-destructive ml-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Your Message
                  </Label>
                  <Textarea
                    placeholder="I have a project about..."
                    {...register("message")}
                    className={cn(
                      "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 min-h-[180px] p-6 text-lg rounded-2xl focus-visible:ring-primary focus-visible:border-primary/50 resize-none transition-all placeholder:text-muted-foreground/50",
                      errors.message &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                  />
                  {errors.message && (
                    <span className="text-sm text-destructive ml-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-16 text-lg rounded-2xl font-heading font-bold bg-primary hover:bg-primary/90 transition-all hover:scale-[1.01] shadow-xl shadow-primary/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </span>
                  )}
                </Button>

                {error && (
                  <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="p-4 bg-green-500/10 text-green-500 rounded-lg">
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

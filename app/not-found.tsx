import Link from "next/link";
import { ArrowLeft, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/15 blur-[80px] rounded-full pointer-events-none" />

      {/* 404 */}
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">404 Error</p>

      <h1 className="font-heading text-[120px] sm:text-[160px] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/10 mb-2 select-none">
        404
      </h1>

      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-5 h-5 text-primary" />
        <p className="font-heading text-xl md:text-2xl font-semibold">
          Page not found
        </p>
      </div>

      <p className="text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed mb-8">
        Looks like this page got automated away. Let&apos;s get you back to something real.
      </p>

      <Button
        asChild
        size="lg"
        className="rounded-full h-11 px-8 text-sm font-semibold bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(121,40,202,0.35)]"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </Button>
    </div>
  );
}

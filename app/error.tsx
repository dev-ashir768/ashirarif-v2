"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/15 blur-[80px] rounded-full pointer-events-none" />

      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Something went wrong</p>

      <h1 className="font-heading text-[100px] sm:text-[140px] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/10 mb-2 select-none">
        500
      </h1>

      <p className="font-heading text-xl md:text-2xl font-semibold mb-3">
        Unexpected error
      </p>

      <p className="text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed mb-8">
        Something broke on our end. Try refreshing — if it keeps happening, reach out.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={reset}
          size="lg"
          className="rounded-full h-11 px-8 text-sm font-semibold bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_24px_rgba(121,40,202,0.35)]"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Try Again
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full h-11 px-8 text-sm border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

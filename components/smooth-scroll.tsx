"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // We don't strictly need to expose the lenis instance via context here
  // because useLenis() hook from lenis/react provides access to the root lenis instance automatically
  // as long as it is rendered down the tree. However, ReactLenis 'root' prop handles this.

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

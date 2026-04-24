"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let x = -1000;
    let y = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let raf: number;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function animate() {
      currentX = lerp(currentX, x, 0.08);
      currentY = lerp(currentY, y, 0.08);
      glow!.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      raf = requestAnimationFrame(animate);
    }

    function onMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    function onLeave() {
      x = -1000;
      y = -1000;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[600px] w-[600px] rounded-full opacity-[0.07]"
      style={{
        background: "radial-gradient(circle, #2A9D8F 0%, transparent 70%)",
        willChange: "transform",
        transform: "translate(-1000px, -1000px)",
      }}
      aria-hidden="true"
    />
  );
}

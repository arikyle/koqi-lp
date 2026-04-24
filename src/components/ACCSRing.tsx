"use client";

import { useEffect, useRef, useState } from "react";

interface ACCSRingProps {
  score?: number;
  size?: number;
  dark?: boolean;
}

export function ACCSRing({ score = 87, size: sizeProp = 400, dark = false }: ACCSRingProps) {
  const [size, setSize] = useState(sizeProp);

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth < 480 ? Math.min(sizeProp, window.innerWidth - 48) : sizeProp);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [sizeProp]);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const strokeWidth = 4;
  const glowWidth = 12;
  const radius = (size - glowWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setProgress(score);
            observer.disconnect();
            return;
          }

          const start = performance.now();
          const duration = 1600;

          function animate(now: number) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(eased * score);

            if (t < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, score]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <filter id="accs-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.165  0 0 0 0 0.616  0 0 0 0 0.561  0 0 0 0.4 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={dark ? "rgba(255,255,255,0.1)" : "#E7E5E4"}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2A9D8F"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          filter="url(#accs-glow)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        <span className={`font-display leading-none ${dark ? "text-white" : "text-ink"}`} style={{ fontSize: size * 0.28 }}>
          {Math.round(progress)}
        </span>
        <span className={`text-xs font-medium uppercase tracking-[0.15em] ${dark ? "text-white/50" : "text-muted"}`}>ACCS</span>
      </div>
    </div>
  );
}

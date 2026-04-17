"use client";

import { useEffect, useRef, useState } from "react";

interface ACCSRingProps {
  score?: number;
  size?: number;
}

export function ACCSRing({ score = 87, size: sizeProp = 400 }: ACCSRingProps) {
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
  const radius = (size - strokeWidth) / 2;
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
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E7E5E4"
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
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display leading-none text-ink" style={{ fontSize: size * 0.3 }}>
          {Math.round(progress)}
        </span>
      </div>
    </div>
  );
}

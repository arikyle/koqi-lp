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

  const strokeWidth = 6;
  const pad = 20;
  const radius = (size - pad * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

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

  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const outerR = radius + 10;
    const innerR = radius + (isMajor ? 4 : 6);
    return {
      x1: center + Math.cos(rad) * innerR,
      y1: center + Math.sin(rad) * innerR,
      x2: center + Math.cos(rad) * outerR,
      y2: center + Math.sin(rad) * outerR,
      isMajor,
    };
  });

  const gradientId = `accs-grad-${dark ? "d" : "l"}`;
  const glowId = `accs-glow-${dark ? "d" : "l"}`;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A9D8F" />
            <stop offset="100%" stopColor="#4FD1C5" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.165  0 0 0 0 0.616  0 0 0 0 0.561  0 0 0 0.5 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}
            strokeWidth={t.isMajor ? 1.5 : 0.5}
          />
        ))}

        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={dark ? "rgba(255,255,255,0.08)" : "#E7E5E4"}
          strokeWidth={strokeWidth}
        />

        {/* Score arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          filter={`url(#${glowId})`}
        />

        {/* Endpoint dot */}
        {progress > 0 && (() => {
          const angle = ((progress / 100) * 360 - 90) * (Math.PI / 180);
          const dotX = center + Math.cos(angle) * radius;
          const dotY = center + Math.sin(angle) * radius;
          return (
            <circle
              cx={dotX}
              cy={dotY}
              r={4}
              fill="#4FD1C5"
              filter={`url(#${glowId})`}
            />
          );
        })()}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`font-display font-medium leading-none ${dark ? "text-white" : "text-ink"}`}
          style={{ fontSize: size * 0.32 }}
        >
          {Math.round(progress)}
        </span>
        <span
          className={`mt-1 text-xs font-medium uppercase tracking-[0.2em] ${dark ? "text-white/40" : "text-muted"}`}
        >
          ACCS
        </span>
      </div>
    </div>
  );
}

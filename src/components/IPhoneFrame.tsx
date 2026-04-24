"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface IPhoneFrameProps {
  children?: React.ReactNode;
  screens?: { src: string; alt: string }[];
  interval?: number;
}

export function IPhoneFrame({ children, screens, interval = 3500 }: IPhoneFrameProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const tiltEnabled = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: coarse)");
    tiltEnabled.current = !mq.matches && !pointer.matches;
  }, []);

  const advance = useCallback(() => {
    if (!screens || screens.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % screens.length);
  }, [screens]);

  useEffect(() => {
    if (!screens || screens.length <= 1) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval, screens]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!tiltEnabled.current || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frameRef.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) scale(1.02)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!frameRef.current) return;
    frameRef.current.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    frameRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    setTimeout(() => {
      if (frameRef.current) frameRef.current.style.transition = "";
    }, 600);
  }, []);

  return (
    <div className="relative mx-auto w-[280px]">
      <div
        ref={frameRef}
        className="overflow-hidden rounded-[40px] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl"
        style={{ willChange: "transform" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative">
          <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
            {screens ? (
              <>
                {screens.map((screen, i) => (
                  <motion.img
                    key={i}
                    src={screen.src}
                    alt={screen.alt}
                    animate={{ opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ))}
              </>
            ) : (
              children
            )}
          </div>
          <div className="pointer-events-none absolute left-1/2 top-[10px] z-10 h-[24px] w-[80px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
        </div>
      </div>

      {screens && screens.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {screens.map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 16 : 6,
                backgroundColor: activeIndex === i ? "#2A9D8F" : "#D6D3D1",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

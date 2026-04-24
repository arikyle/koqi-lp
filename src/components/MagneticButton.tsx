"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", href, strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: coarse)");
    setEnabled(!mq.matches && !pointer.matches);
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
    },
    [enabled, strength]
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    ref.current.style.transform = "translate(0, 0)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 500);
  }, []);

  const Tag = href ? "a" : "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLAnchorElement & HTMLDivElement>}
      href={href}
      className={`inline-block ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: enabled ? "transform" : undefined }}
    >
      {children}
    </Tag>
  );
}

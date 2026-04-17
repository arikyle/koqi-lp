"use client";

export function ScrollCue() {
  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
      <div
        className="h-12 w-px bg-accent animate-pulse"
        style={{ animationDuration: "2.4s" }}
      />
    </div>
  );
}

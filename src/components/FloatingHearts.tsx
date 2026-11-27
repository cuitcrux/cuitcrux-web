"use client";
import { useEffect, useState } from "react";
const chars = ["💗", "💖", "✨", "🌸", "🤍"];
export default function FloatingHearts({ count = 14 }: { count?: number }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="absolute -bottom-8 animate-floatUp opacity-0"
          style={{ left: `${(i * 37) % 100}%`, fontSize: 14 + ((i * 7) % 16), animationDelay: `${(i * 0.9) % 9}s`, animationDuration: `${10 + ((i * 3) % 8)}s` }}>
          {chars[i % chars.length]}
        </span>
      ))}
    </div>
  );
}

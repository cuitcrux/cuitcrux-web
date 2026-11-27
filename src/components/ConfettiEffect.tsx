"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
export default function ConfettiEffect({ fire, chars = ["💗", "❤️", "🌸", "✨", "💖"] }: { fire: number; chars?: string[] }) {
  const bits = useMemo(() => fire === 0 ? [] : Array.from({ length: 36 }, (_, i) => ({
    x: Math.random() * 100, dx: (Math.random() - 0.5) * 120, d: 2.2 + Math.random() * 1.8,
    delay: Math.random() * 0.4, s: 16 + Math.random() * 18, r: (Math.random() - 0.5) * 540, c: chars[i % chars.length],
  })), [fire]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div aria-hidden key={fire} className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {bits.map((b, i) => (
        <motion.span key={i} className="absolute top-0" style={{ left: `${b.x}%`, fontSize: b.s }}
          initial={{ y: -40, opacity: 1 }} animate={{ y: "105vh", x: b.dx, rotate: b.r, opacity: [1, 1, 0] }}
          transition={{ duration: b.d, delay: b.delay, ease: "easeIn" }}>{b.c}</motion.span>
      ))}
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { birthday as b } from "@/data/birthday";
import ConfettiEffect from "./ConfettiEffect";
export default function BirthdayReveal({ onNext }: { onNext: () => void }) {
  const [wish, setWish] = useState(0);
  return (
    <div className="screen">
      <ConfettiEffect fire={1} />
      <ConfettiEffect fire={wish} chars={["✨", "⭐", "🌟", "💫"]} />
      <div className="flex gap-8 text-5xl" aria-hidden>
        {["🎈", "🎈", "🎈"].map((x, i) => <span key={i} className="animate-bob" style={{ animationDelay: `${i * 0.6}s` }}>{x}</span>)}
      </div>
      <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", delay: 0.2 }}
        className="font-serif text-5xl font-bold leading-tight">{b.greeting}</motion.h1>
      <p className="font-hand text-3xl text-rose">{b.subGreeting}</p>
      <svg viewBox="0 0 120 120" className="h-36 w-36" aria-hidden>
        <g>{[42, 60, 78].map((x) => <g key={x}><rect x={x - 2} y="18" width="4" height="22" rx="2" fill="#D98A9B" /><ellipse cx={x} cy="14" rx="4" ry="7" fill="#FFC857" className="animate-glow" /></g>)}</g>
        <rect x="20" y="40" width="80" height="26" rx="8" fill="#FFE4EC" stroke="#D98A9B" strokeWidth="2" />
        <rect x="14" y="66" width="92" height="34" rx="8" fill="#C2344F" />
        <path d="M14 76q10 10 20 0t20 0 20 0 20 0 18 0" stroke="#FFF8F0" strokeWidth="3" fill="none" />
      </svg>
      <button className="btn-soft" onClick={() => setWish((w) => w + 1)}>Make a wish ✨</button>
      <button className="btn" onClick={onNext}>Read my letter 💌</button>
    </div>
  );
}

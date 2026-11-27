"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { birthday as b } from "@/data/birthday";
export default function ReasonsSection({ onNext }: { onNext: () => void }) {
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const [cur, setCur] = useState<number | null>(null);
  const tap = (i: number) => { setCur(i); setSeen((s) => new Set(s).add(i)); };
  return (
    <div className="screen">
      <h2 className="font-serif text-3xl leading-snug">Reasons why you&apos;re my favourite person 💗</h2>
      <div className="grid grid-cols-5 gap-3">
        {b.reasons.map((_, i) => (
          <motion.button key={i} whileTap={{ scale: 1.3 }} onClick={() => tap(i)} aria-label={`Reveal reason ${i + 1}`}
            className="animate-bob text-4xl" style={{ animationDelay: `${i * 0.3}s` }}>
            {seen.has(i) ? "💖" : "🤍"}
          </motion.button>
        ))}
      </div>
      <div className="min-h-[110px] w-full max-w-xs" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.p key={cur ?? -1} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="rounded-3xl bg-white/70 p-5 font-serif text-xl italic shadow-lg backdrop-blur">
            {cur === null ? "Tap a heart…" : b.reasons[cur]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="text-sm text-rose">{seen.size} of {b.reasons.length} found</p>
      <button className="btn" onClick={onNext}>{seen.size === b.reasons.length ? "One more thing 💌" : "Continue"}</button>
    </div>
  );
}

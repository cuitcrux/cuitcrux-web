"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { birthday as b } from "@/data/birthday";
import ConfettiEffect from "./ConfettiEffect";
export default function InteractiveQuestion({ onNext }: { onNext: () => void }) {
  const [fire, setFire] = useState(0);
  return (
    <div className="screen">
      <ConfettiEffect fire={fire} />
      <p className="font-hand text-3xl text-rose">{b.questionIntro}</p>
      <h2 className="font-serif text-4xl leading-tight">{b.question}</h2>
      {fire === 0 ? (
        <div className="flex w-full max-w-xs flex-col gap-3">
          {b.yesButtons.map((t) => <button key={t} className="btn" onClick={() => setFire((f) => f + 1)}>{t}</button>)}
        </div>
      ) : (
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }} className="flex flex-col items-center gap-5">
          <div className="animate-bob text-6xl">💞</div>
          <p className="font-serif text-2xl italic">{b.yesMessage}</p>
          <button className="btn" onClick={onNext}>One last surprise ✨</button>
        </motion.div>
      )}
    </div>
  );
}

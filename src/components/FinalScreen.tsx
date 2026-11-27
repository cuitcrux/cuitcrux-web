"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { birthday as b } from "@/data/birthday";
import ConfettiEffect from "./ConfettiEffect";
export default function FinalScreen({ onReplay }: { onReplay: () => void }) {
  const [step, setStep] = useState(0);
  useEffect(() => { const t = [setTimeout(() => setStep(1), 2500), setTimeout(() => setStep(2), 5000)]; return () => t.forEach(clearTimeout); }, []);
  return (
    <div className="screen">
      <ConfettiEffect fire={step === 1 ? 1 : 0} chars={["✨", "💗"]} />
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="font-serif text-3xl leading-snug">{b.finalLine1}</motion.h2>
      {step >= 1 && <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="font-serif text-5xl font-bold text-ruby">{b.finalLine2}</motion.h1>}
      {step >= 2 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
          <p className="max-w-xs font-hand text-3xl leading-8">{b.finalMessage}</p>
          <button className="btn-soft inline-flex items-center gap-2" onClick={onReplay}><RotateCcw size={18} /> Replay our little story</button>
        </motion.div>
      )}
    </div>
  );
}

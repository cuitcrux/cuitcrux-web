"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function IntroScreen({ onOpen, onNext }: { onOpen: () => void; onNext: () => void }) {
  const [open, setOpen] = useState(false);
  const go = () => { if (open) return; setOpen(true); onOpen(); setTimeout(onNext, 1500); };
  return (
    <div className="screen">
      <p className="font-hand text-2xl text-rose">A little something for someone special...</p>
      <button onClick={go} aria-label="Open envelope" className="relative my-4 h-44 w-64 animate-bob">
        <span className="absolute inset-0 -z-10 rounded-full bg-ruby/30 blur-3xl animate-glow" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose to-ruby shadow-2xl" />
        <motion.div className="absolute left-3 right-3 top-3 h-36 rounded-lg bg-cream p-3 shadow"
          animate={open ? { y: -70 } : { y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <p className="font-hand text-xl text-wine">For you ❤️</p>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-28 rounded-b-2xl bg-gradient-to-t from-rose to-rose/80" style={{ clipPath: "polygon(0 0,50% 55%,100% 0,100% 100%,0 100%)" }} />
        <motion.div className="absolute inset-x-0 top-0 h-28 origin-top rounded-t-2xl bg-gradient-to-b from-ruby to-rose"
          style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }} animate={{ rotateX: open ? 180 : 0 }} transition={{ duration: 0.7 }} />
        <span className="absolute left-1/2 top-[88px] -translate-x-1/2 text-3xl">{open ? "" : "💗"}</span>
      </button>
      <h1 className="font-serif text-4xl">I made something for you ❤️</h1>
      <button className="btn" onClick={go}>Open your surprise</button>
    </div>
  );
}

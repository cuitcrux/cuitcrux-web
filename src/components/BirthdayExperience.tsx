"use client";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { birthday } from "@/data/birthday";
import FloatingHearts from "./FloatingHearts";
import MusicControl from "./MusicControl";
import IntroScreen from "./IntroScreen";
import BirthdayReveal from "./BirthdayReveal";
import LoveLetter from "./LoveLetter";
import ReasonsSection from "./ReasonsSection";
import InteractiveQuestion from "./InteractiveQuestion";
import FinalScreen from "./FinalScreen";

const TOTAL = 6;
export default function BirthdayExperience() {
  const [stage, setStage] = useState(0);
  const [run, setRun] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const play = useCallback(() => { audio.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }, []);
  const toggle = useCallback(() => { const a = audio.current; if (!a) return; if (a.paused) play(); else { a.pause(); setPlaying(false); } }, [play]);
  const next = () => setStage((s) => Math.min(s + 1, TOTAL - 1));
  const replay = () => { setStage(0); setRun((r) => r + 1); };
  const screens = [
    <IntroScreen key="0" onOpen={play} onNext={next} />,
    <BirthdayReveal key="1" onNext={next} />,
    <LoveLetter key="2" onNext={next} />,
    <ReasonsSection key="3" onNext={next} />,
    <InteractiveQuestion key="4" onNext={next} />,
    <FinalScreen key="5" onReplay={replay} />,
  ];
  return (
    <main className="fixed inset-0 overflow-hidden bg-gradient-to-b from-cream via-blush to-lavender/70">
      <div className="absolute inset-x-0 top-0 z-50 h-1 bg-white/40" style={{ marginTop: "env(safe-area-inset-top)" }}>
        <motion.div className="h-full rounded-r bg-ruby" animate={{ width: `${((stage + 1) / TOTAL) * 100}%` }} />
      </div>
      <FloatingHearts />
      <audio ref={audio} src={birthday.musicUrl} loop preload="auto" />
      <MusicControl playing={playing} onToggle={toggle} />
      <AnimatePresence mode="wait">
        <motion.div key={`${run}-${stage}`} className="pt-safe-x absolute inset-0 overflow-y-auto overflow-x-hidden"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.5 }}>
          {screens[stage]}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

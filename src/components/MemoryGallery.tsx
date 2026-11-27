"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { birthday as b } from "@/data/birthday";
const tilt = [-4, 3, -2, 5, -3, 2];
export default function MemoryGallery({ onNext }: { onNext: () => void }) {
  const [hot, setHot] = useState<number | null>(null);
  return (
    <div className="flex min-h-full flex-col items-center gap-10 px-6 py-20 text-center">
      <h2 className="font-serif text-4xl">Little moments, big memories ✨</h2>
      {b.memories.map((m, i) => (
        <motion.figure key={i} onClick={() => setHot(hot === i ? null : i)}
          initial={{ opacity: 0, y: 50, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: tilt[i % 6] }} viewport={{ once: true, margin: "-60px" }}
          animate={hot === i ? { scale: 1.06, rotate: 0 } : undefined} whileTap={{ scale: 0.97 }}
          className={`w-60 cursor-pointer rounded-xl bg-white p-3 pb-4 shadow-xl shadow-rose/40 ${i % 2 ? "self-end" : "self-start"}`}>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-blush to-lavender">
            {m.src
              // eslint-disable-next-line @next/next/no-img-element
              ? <img src={m.src} alt={m.caption} className="h-full w-full object-cover" loading="lazy" />
              : <Heart className="absolute inset-0 m-auto text-rose" size={48} fill="currentColor" />}
          </div>
          <figcaption className="mt-3 font-hand text-2xl leading-6">{m.caption}</figcaption>
        </motion.figure>
      ))}
      <button className="btn" onClick={onNext}>Why I love you 💗</button>
    </div>
  );
}

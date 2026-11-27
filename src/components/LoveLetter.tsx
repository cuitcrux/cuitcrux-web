"use client";
import { useEffect, useState } from "react";
import { birthday as b } from "@/data/birthday";
export default function LoveLetter({ onNext }: { onNext: () => void }) {
  const [n, setN] = useState(0);
  const done = n >= b.letter.length;
  useEffect(() => { if (done) return; const t = setInterval(() => setN((x) => x + 2), 35); return () => clearInterval(t); }, [done]);
  return (
    <div className="screen">
      <div onClick={() => setN(b.letter.length)} className="w-full max-w-md rounded-sm bg-cream p-7 text-left shadow-2xl shadow-rose/40 ring-1 ring-rose/30"
        style={{ backgroundImage: "repeating-linear-gradient(transparent,transparent 31px,#f3d3dc 32px)" }}>
        <h2 className="mb-4 font-serif text-3xl italic">{b.letterTitle}</h2>
        <p className="whitespace-pre-line font-serif text-lg leading-8">{b.letter.slice(0, n)}{!done && <span className="animate-glow">|</span>}</p>
        {done && <p className="mt-6 text-right font-hand text-4xl text-ruby">{b.signature}</p>}
      </div>
      <button className="btn" onClick={onNext}>{done ? "See our memories ✨" : "Skip ahead"}</button>
    </div>
  );
}

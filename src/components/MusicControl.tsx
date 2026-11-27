"use client";
import { VolumeX } from "lucide-react";
export default function MusicControl({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} aria-label={playing ? "Mute music" : "Play music"}
      className="fixed right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-ruby shadow-lg backdrop-blur"
      style={{ top: "calc(env(safe-area-inset-top) + 16px)" }}>
      {playing ? (
        <span className="flex items-end gap-[3px]" aria-hidden>
          {[0, 1, 2].map((i) => <span key={i} className="w-[3px] animate-bob rounded bg-ruby" style={{ height: 8 + i * 4, animationDelay: `${i * 0.25}s`, animationDuration: "1s" }} />)}
        </span>
      ) : <VolumeX size={20} />}
    </button>
  );
}

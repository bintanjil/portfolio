"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundEffects() {
  const [isEnabled, setIsEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }, []);

  const playSound = (frequency: number, duration: number) => {
    if (!isEnabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  useEffect(() => {
    if (!isEnabled) return;

    const handleClick = () => playSound(600, 0.1);
    const handleHover = () => playSound(400, 0.05);

    // Add event listeners to interactive elements
    const buttons = document.querySelectorAll("button, a");
    buttons.forEach((btn) => {
      btn.addEventListener("click", handleClick);
      btn.addEventListener("mouseenter", handleHover);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
        btn.removeEventListener("mouseenter", handleHover);
      });
    };
  }, [isEnabled]);

  return (
    <button
      onClick={() => setIsEnabled(!isEnabled)}
      className="fixed bottom-6 left-6 z-50 p-3 bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-xl shadow-2xl shadow-indigo-500/20 hover:bg-slate-800/90 transition-colors"
      aria-label={isEnabled ? "Disable sound effects" : "Enable sound effects"}
    >
      {isEnabled ? (
        <Volume2 className="w-5 h-5 text-indigo-400" />
      ) : (
        <VolumeX className="w-5 h-5 text-slate-400" />
      )}
    </button>
  );
}

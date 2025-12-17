"use client";

import { useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, SkipForward } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    "Ambient Code",
    "Digital Dreams",
    "Cyber Waves",
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 shadow-2xl shadow-indigo-500/20 max-w-xs">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="text-xs text-slate-400 mb-1">Now Playing</div>
          <div className="text-sm font-medium text-slate-100 truncate">
            {tracks[currentTrack]}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-indigo-400" />
            ) : (
              <Play className="w-4 h-4 text-indigo-400" />
            )}
          </button>
          
          <button
            onClick={nextTrack}
            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
            aria-label="Next track"
          >
            <SkipForward className="w-4 h-4 text-indigo-400" />
          </button>
          
          <button
            onClick={toggleMute}
            className="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-indigo-400" />
            )}
          </button>
        </div>
      </div>
      
      {/* Progress Bar */}
      {isPlaying && !isMuted && (
        <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 animate-progress" />
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function ASCIIArtHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center animate-fadeOut pointer-events-none">
      <pre className="text-indigo-400 text-xs md:text-sm font-mono leading-tight animate-pulse">
{`
  ████████╗ █████╗ ███╗   ██╗     ██╗██╗██╗     
  ╚══██╔══╝██╔══██╗████╗  ██║     ██║██║██║     
     ██║   ███████║██╔██╗ ██║     ██║██║██║     
     ██║   ██╔══██║██║╚██╗██║██   ██║██║██║     
     ██║   ██║  ██║██║ ╚████║╚█████╔╝██║███████╗
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝╚══════╝
                                                  
        ╔═══════════════════════════════╗
        ║   PORTFOLIO.SYS v2.0.25      ║
        ║   Loading Profile...          ║
        ║   Status: ONLINE              ║
        ╚═══════════════════════════════╝
`}
      </pre>
    </div>
  );
}

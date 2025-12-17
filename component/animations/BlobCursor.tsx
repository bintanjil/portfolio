"use client";

import { useEffect, useRef } from "react";

export default function BlobCursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let mouseX = 0;
    let mouseY = 0;
    let blobX = 0;
    let blobY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth elastic follow
      const dx = mouseX - blobX;
      const dy = mouseY - blobY;
      
      blobX += dx * 0.12;
      blobY += dy * 0.12;

      // Calculate velocity for blob deformation
      const velocity = Math.sqrt(dx * dx + dy * dy);
      const scale = Math.min(1 + velocity * 0.0008, 1.3);

      blob.style.left = `${blobX}px`;
      blob.style.top = `${blobY}px`;
      blob.style.transform = `translate(-50%, -50%) scale(${scale})`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed w-12 h-12 rounded-full pointer-events-none z-[9998] hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.2))",
        filter: "blur(20px)",
        transition: "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm transition-shadow duration-300",
        scrolled && "shadow-sm"
      )}
    >
      <nav className="section-container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-950 font-mono text-xs font-semibold text-white">
              TM
            </span>
            <span className="hidden text-sm font-semibold text-neutral-950 sm:inline">
              Tanjil Bin Mohiuddin
            </span>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                  active === item.href
                    ? "bg-neutral-950 text-white"
                    : "text-neutral-500 hover:text-neutral-950"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <span className="hidden items-center gap-2 rounded-full bg-neutral-950 py-1.5 pl-3 pr-4 font-mono text-xs text-white lg:inline-flex">
            <span className="h-1.5 w-1.5 flex-shrink-0 animate-pulse rounded-full bg-green-500" />
            Open to opportunities
          </span>

          <button
            className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-neutral-200 py-2 xl:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider",
                  active === item.href
                    ? "bg-neutral-950 text-white"
                    : "text-neutral-500 hover:bg-neutral-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

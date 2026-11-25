"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/personal";

const navItems = [
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#awards" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-neutral-200 bg-white/80 backdrop-blur-md" : "border-transparent bg-white"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="#top" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-[11px] font-bold text-white">
            TM
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">
            Tanjil Bin Mohiuddin
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative text-sm transition-colors",
                  active === item.href
                    ? "font-medium text-indigo-600"
                    : "text-neutral-500 hover:text-neutral-950"
                )}
              >
                {item.name}
                {active === item.href && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-600" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-neutral-200 px-4 text-sm font-medium text-neutral-950 transition-colors hover:border-neutral-950"
        >
          CV
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

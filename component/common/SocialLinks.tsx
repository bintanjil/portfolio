"use client";

import { Code2, Github, Linkedin, Mail, Trophy } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";

const links = [
  { href: personalInfo.github, label: "GitHub", Icon: Github },
  { href: personalInfo.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: personalInfo.codeforces, label: "Codeforces", Icon: Trophy },
  { href: personalInfo.leetcode, label: "LeetCode", Icon: Code2 },
];

interface SocialLinksProps {
  tone?: "default" | "inverted";
}

export default function SocialLinks({ tone = "default" }: SocialLinksProps) {
  return (
    <div className="flex gap-3">
      {links.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={cn(
            "transition-colors",
            tone === "inverted"
              ? "text-stone-400 hover:text-white"
              : "text-stone-500 hover:text-indigo-600"
          )}
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
      <Link
        href={`mailto:${personalInfo.email}`}
        aria-label="Email"
        title="Email"
        className={cn(
          "transition-colors",
          tone === "inverted"
            ? "text-stone-400 hover:text-white"
            : "text-stone-500 hover:text-indigo-600"
        )}
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  );
}

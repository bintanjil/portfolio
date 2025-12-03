"use client";

import { Github, Linkedin, Mail, Code2, Trophy } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { toast } from "sonner";

export default function SocialLinks() {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    toast.success("Email copied to clipboard!", {
      description: personalInfo.email,
      duration: 3000,
    });
  };

  return (
    <div className="flex gap-4">
      <Link
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-indigo-400 transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </Link>
      <Link
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-indigo-400 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </Link>
      {personalInfo.codeforces && (
        <Link
          href={personalInfo.codeforces}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-400 transition-colors"
          aria-label="Codeforces"
          title="Codeforces"
        >
          <Trophy className="w-6 h-6" />
        </Link>
      )}
      {personalInfo.leetcode && (
        <Link
          href={personalInfo.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-400 transition-colors"
          aria-label="LeetCode"
          title="LeetCode"
        >
          <Code2 className="w-6 h-6" />
        </Link>
      )}
      <button
        onClick={handleCopyEmail}
        className="text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer"
        aria-label="Copy Email"
        title="Copy email to clipboard"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
}
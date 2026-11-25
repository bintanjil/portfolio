"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface MailOptionsProps {
  email: string;
}

const topics = ["Research / MSc / PhD", "Job opportunity", "Collaboration", "Other"];

const pill =
  "inline-flex h-10 items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 font-mono text-[12px] text-neutral-800 transition-colors hover:border-neutral-950";

export default function MailOptions({ email }: MailOptionsProps) {
  const [topic, setTopic] = useState(topics[0]);
  const [copied, setCopied] = useState(false);
  const s = encodeURIComponent(topic === "Other" ? "" : topic);

  const providers = [
    { name: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${s}` },
    { name: "Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${s}` },
    { name: "Yahoo", href: `https://compose.mail.yahoo.com/?to=${email}&subject=${s}` },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email address copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Please copy it manually.");
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-200 p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">Topic</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTopic(t)}
            aria-pressed={topic === t}
            className={cn(
              "cursor-pointer rounded-full px-3 py-1 font-mono text-[11px] transition-colors",
              topic === t
                ? "bg-neutral-950 text-white"
                : "border border-neutral-200 text-neutral-500 hover:text-neutral-950"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
        Write with
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {providers.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={pill}>
            {p.name}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ))}
        <a
          href={`mailto:${email}?subject=${s}`}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-950 px-4 font-mono text-[12px] text-white transition-colors hover:bg-neutral-800"
        >
          <Mail className="h-3.5 w-3.5" />
          Mail app
        </a>
        <button type="button" onClick={handleCopy} className={cn(pill, "cursor-pointer")}>
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
}

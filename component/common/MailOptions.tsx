"use client";

import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface MailOptionsProps {
  email: string;
}

const topics = ["Research / PhD", "Job opportunity", "Collaboration", "Other"];

export default function MailOptions({ email }: MailOptionsProps) {
  const [topic, setTopic] = useState(topics[0]);
  const s = encodeURIComponent(topic === "Other" ? "" : topic);

  const options = [
    { name: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${s}` },
    { name: "Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${s}` },
    { name: "Yahoo Mail", href: `https://compose.mail.yahoo.com/?to=${email}&subject=${s}` },
    { name: "default mail app", href: `mailto:${email}?subject=${s}` },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email address copied");
    } catch {
      toast.error("Could not copy. Please copy it manually.");
    }
  };

  return (
    <div className="space-y-3 text-[15px] leading-7">
      <p className="flex flex-wrap items-baseline gap-x-1 gap-y-1">
        <span className="mr-2 text-muted">Topic:</span>
        {topics.map((t, i) => (
          <span key={t}>
            <button
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={cn(
                "cursor-pointer transition-colors",
                topic === t
                  ? "font-medium text-ink underline decoration-accent decoration-2 underline-offset-4"
                  : "text-muted hover:text-ink"
              )}
            >
              {t}
            </button>
            {i < topics.length - 1 && <span className="ml-1 text-rule">/</span>}
          </span>
        ))}
      </p>

      <p className="text-ink/90">
        <span className="text-muted">Write with </span>
        {options.map((option, i) => (
          <span key={option.name}>
            <a
              href={option.href}
              {...(!option.href.startsWith("mailto:") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="link"
            >
              {option.name}
            </a>
            {i < options.length - 2 ? ", " : i === options.length - 2 ? ", or your " : ""}
          </span>
        ))}
        <span className="text-muted">, or </span>
        <button type="button" onClick={handleCopy} className="link cursor-pointer">
          copy the address
        </button>
        .
      </p>
    </div>
  );
}

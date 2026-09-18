"use client";

import { useEffect, useState } from "react";

interface LiveClockProps {
  timeZone: string;
  label: string;
}

export default function LiveClock({ timeZone, label }: LiveClockProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const interval = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!time) return null;

  return (
    <span>
      {time} {label}
    </span>
  );
}

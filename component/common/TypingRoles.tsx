"use client";

import { useEffect, useState } from "react";

interface TypingRolesProps {
  roles: string[];
}

export default function TypingRoles({ roles }: TypingRolesProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    } else {
      timeout = setTimeout(
        () =>
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          ),
        deleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <span className="typing-caret font-semibold text-indigo-300">{text}</span>
  );
}

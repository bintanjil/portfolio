import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

const iconLinks = [
  { label: "GitHub", href: personalInfo.github, Icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${personalInfo.email}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="container-page pb-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-neutral-500">
          © {new Date().getFullYear()} {personalInfo.name}
          <span className="mx-2 text-neutral-300">·</span>
          {personalInfo.location}
        </p>
        <div className="flex items-center gap-2">
          {iconLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(!href.startsWith("mailto:") && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-950 hover:text-neutral-950"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#top"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-neutral-200 px-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-600 transition-colors hover:border-neutral-950 hover:text-neutral-950"
          >
            Top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

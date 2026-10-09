import Link from "next/link";
import { personalInfo } from "@/data/personal";

const navItems = [
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-3xl px-5 pt-8 sm:px-8 sm:pt-10">
      <nav className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-baseline sm:justify-between">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-ink">
          {personalInfo.name}
        </Link>
        <ul className="flex flex-wrap gap-x-3.5 gap-y-1 text-sm text-muted sm:gap-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent transition-colors hover:text-accent-hover"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

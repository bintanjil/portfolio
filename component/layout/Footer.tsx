import SocialLinks from "@/component/common/SocialLinks";
import { personalInfo } from "@/data/personal";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-xl font-black tracking-tight text-neutral-950">
              {personalInfo.name}
            </h3>
            <p className="font-mono text-sm text-neutral-500">{personalInfo.title}</p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-neutral-950">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-green-800"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-neutral-950">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-green-800"
                >
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-green-800"
                >
                  <Phone className="h-4 w-4" />
                  {personalInfo.phone}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="font-mono text-xs text-neutral-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

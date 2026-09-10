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
    <footer className="border-t border-stone-200 bg-[#f3f1ea]">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-stone-900">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-stone-500">{personalInfo.title}</p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors hover:text-indigo-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-900">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-stone-500">
              <li>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-indigo-600"
                >
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-indigo-600"
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

        <div className="mt-10 border-t border-stone-200 pt-6">
          <p className="text-sm text-stone-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

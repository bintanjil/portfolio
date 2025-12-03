import SocialLinks from "@/component/common/SocialLinks";
import { personalInfo } from "@/data/personal";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {personalInfo.title}
            </p>
            <div className="pt-2">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{personalInfo.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {personalInfo.phone}
                </Link>
              </li>
              <li className="text-sm text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Availability</h4>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm text-green-400 font-medium">
                  Open to Work
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-400">
              Designed & Built with{" "}
              <span className="text-indigo-400 font-medium">Next.js</span> &{" "}
              <span className="text-indigo-400 font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
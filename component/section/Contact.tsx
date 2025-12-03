"use client";

import SectionTitle from "@/component/ui/SectionTitle";
import { Card, CardContent } from "@/component/ui/card";
import { personalInfo } from "@/data/personal";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import SocialLinks from "@/component/common/SocialLinks";
import ContactForm from "@/component/form/ContactForm";
import Link from "next/link";
import { toast } from "sonner";

export default function Contact() {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    toast.success("Email copied to clipboard!", {
      description: personalInfo.email,
      duration: 3000,
    });
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.phone);
    toast.success("Phone number copied!", {
      description: personalInfo.phone,
      duration: 3000,
    });
  };

  return (
    <section id="contact" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Simple elegant background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(99,102,241,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_rgba(139,92,246,0.12),transparent_40%)]" />
      </div>
      <div className="section-container relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Feel free to reach out for opportunities, collaborations, or just to say hi!"
          centered
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-6">
                <Card className="group relative hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:-translate-y-2 hover:scale-105 hover:border-indigo-500/50 animate-slideUp overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/10 before:to-violet-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 cursor-pointer" style={{ animationDelay: '0ms' }} onClick={handleCopyEmail}>
                  <CardContent className="pt-6 text-center relative z-10">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-indigo-500/50 animate-bounceIn">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-slate-100">Email</h3>
                    <button
                      onClick={handleCopyEmail}
                      className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.email}
                    </button>
                  </CardContent>
                </Card>

                <Card className="group relative hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:-translate-y-2 hover:scale-105 hover:border-indigo-500/50 animate-slideUp overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/10 before:to-violet-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 cursor-pointer" style={{ animationDelay: '150ms' }} onClick={handleCopyPhone}>
                  <CardContent className="pt-6 text-center relative z-10">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-indigo-500/50 animate-bounceIn" style={{ animationDelay: '150ms' }}>
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-slate-100">Phone</h3>
                    <button
                      onClick={handleCopyPhone}
                      className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </button>
                  </CardContent>
                </Card>

                <Card className="group relative hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:-translate-y-2 hover:scale-105 hover:border-indigo-500/50 animate-slideUp overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-indigo-500/10 before:to-violet-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500" style={{ animationDelay: '300ms' }}>
                  <CardContent className="pt-6 text-center relative z-10">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-indigo-500/50 animate-bounceIn" style={{ animationDelay: '300ms' }}>
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-slate-100">Location</h3>
                    <p className="text-sm text-slate-400">
                      {personalInfo.location}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-slate-400 mb-6">
                  Connect with me on social media
                </p>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
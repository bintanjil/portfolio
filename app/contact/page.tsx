import Contact from "@/component/section/Contact";
import PageTransition from "@/component/common/PageTransition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tanjil Bin Mohiuddin",
  description: "Get in touch with Tanjil Bin Mohiuddin for opportunities and collaborations",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      <Contact />
    </div>
  );
}
import Contact from "@/component/section/Contact";
import PageTransition from "@/component/common/PageTransition";
import AnimatedBackground from "@/component/common/AnimatedBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tanjil Bin Mohiuddin",
  description: "Get in touch with Tanjil for collaboration opportunities and inquiries",
};

export default function ContactPage() {
  return (
    <AnimatedBackground
      blobColors={["#6366f1", "#8b5cf6", "#a855f7"]}
      blobCount={2}
      animationSpeed="slow"
      bgGradient="from-black via-slate-950 to-black"
    >
      <div className="min-h-screen pt-20">
        <Contact />
      </div>
    </AnimatedBackground>
  );
}
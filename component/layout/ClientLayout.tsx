"use client";

import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import BackToTop from "@/component/common/BackToTop";
import ScrollProgress from "@/component/common/ScrollProgress";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <BackToTop />
      <Toaster position="bottom-right" theme="light" richColors />
    </>
  );
}

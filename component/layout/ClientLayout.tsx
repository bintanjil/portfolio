"use client";

import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import BackToTop from "@/component/common/BackToTop";
import Ticker from "@/component/common/Ticker";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-9 sm:pb-0">{children}</main>
      <Footer />
      <BackToTop />
      <Ticker />
      <Toaster position="bottom-right" theme="light" richColors />
    </>
  );
}

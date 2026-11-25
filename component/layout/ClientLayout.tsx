"use client";

import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="bottom-center" theme="light" />
    </div>
  );
}

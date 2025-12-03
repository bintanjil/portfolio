"use client";

import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import Breadcrumb from "@/component/ui/Breadcrumb";
import { ViewTransitions } from "@/component/common/ViewTransitions";
import PageWrapper from "@/component/layout/PageWrapper";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ViewTransitions />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "#e2e8f0",
            backdropFilter: "blur(12px)",
          },
          className: "sonner-toast",
        }}
        theme="dark"
      />
      <Header />
      <Breadcrumb />
      <main className="min-h-screen">
        <PageWrapper>{children}</PageWrapper>
      </main>
      <Footer />
    </>
  );
}

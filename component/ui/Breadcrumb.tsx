"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Don't show breadcrumb on home page
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, path };
    }),
  ];

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="section-container">
        <div className="flex items-center justify-between py-3">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm overflow-x-auto scrollbar-hide">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const isHome = index === 0;

              return (
                <div key={item.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-slate-600 mx-1 flex-shrink-0" />
                  )}
                  {isLast ? (
                    <span className="text-indigo-400 font-medium whitespace-nowrap flex items-center">
                      {isHome && <Home className="w-4 h-4 mr-1.5" />}
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-slate-400 hover:text-indigo-400 transition-colors whitespace-nowrap flex items-center group"
                    >
                      {isHome && (
                        <Home className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                      )}
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Current Time */}
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400 ml-4 flex-shrink-0">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

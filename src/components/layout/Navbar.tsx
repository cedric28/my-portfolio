"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        "w-[calc(100%-2rem)] max-w-5xl"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between rounded-full border border-white/10 px-5 py-2.5 transition-all duration-300",
          scrolled
            ? "bg-zinc-950/70 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
            : "bg-white/[0.02] backdrop-blur-md"
        )}
      >
        <a href="#home" className="font-mono text-sm text-white tracking-tight">
          <span className="text-gradient font-semibold">cedric</span>
          <span className="text-zinc-500">.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:cedric.legarda97@gmail.com"
          className="text-xs font-mono text-zinc-300 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.02] hover:bg-white/[0.06]"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

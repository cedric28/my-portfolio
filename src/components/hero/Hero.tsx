"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const ParticleField = dynamic(
  () => import("./ParticleField").then((m) => m.ParticleField),
  { ssr: false, loading: () => null },
);

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { opacity: 0, y: 40 });
      gsap.set(".hero-fade", { opacity: 0, y: 20 });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .to(
          ".hero-line",
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          0.2,
        )
        .to(
          ".hero-fade",
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          0.7,
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 py-24">
        <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-zinc-300 backdrop-blur mb-8 opacity-0">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
          <span className="hero-line block text-white">Cedric Nathan</span>
          <span className="hero-line block text-white">Legarda.</span>
          <span className="hero-line block text-gradient">
            FullStack Developer.
          </span>
        </h1>

        <p className="hero-fade mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed opacity-0">
          I build web platforms end-to-end — from pixel-perfect interfaces to
          scalable backends. 8+ years shipping products across casino, aviation,
          fintech, and real estate.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap gap-4 opacity-0">
          <a href="#projects">
            <Button size="lg" variant="primary">
              View projects <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="/CV-Cedric-Nathan-Legarda.pdf" download>
            <Button size="lg" variant="secondary">
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </a>
        </div>

        <div className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

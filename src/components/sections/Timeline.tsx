"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data/experience";
import { techBySlug, iconUrl } from "@/lib/data/techStack";
import { SectionHeading } from "@/components/ui/section-heading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Timeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Journey"
          title="Where I've been."
          description="Every stop shaped how I think about product, code, and shipping."
        />

        <div ref={rootRef} className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.06]" />
          <div
            ref={lineRef}
            className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent"
          />

          <ol className="relative space-y-12">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={exp.company + exp.start}
                  className={`timeline-item relative md:grid md:grid-cols-2 md:gap-16 ${
                    isLeft ? "" : "md:flex md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`absolute left-3 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300 shadow-[0_0_20px_2px_rgba(139,92,246,0.5)]`}
                  />

                  <div className={isLeft ? "md:col-start-1 md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-5 hover:border-white/20 transition-colors">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/80 mb-2">
                        {exp.start} — {exp.end}
                      </div>
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">{exp.role}</p>

                      <ul className={`mt-4 space-y-1.5 text-sm text-zinc-400 leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="list-none">
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                        {exp.tech.slice(0, 8).map((slug) => {
                          const t = techBySlug[slug];
                          if (!t) return null;
                          return (
                            <span
                              key={slug}
                              title={t.name}
                              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]"
                            >
                              <Image
                                src={iconUrl(t.slug, t.color)}
                                alt={t.name}
                                width={12}
                                height={12}
                                className="h-3 w-3 object-contain"
                                unoptimized
                              />
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

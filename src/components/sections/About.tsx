"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { MapPin, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const facts = [
  { icon: Briefcase, label: "8+ years", sub: "professional experience" },
  { icon: MapPin, label: "Balanga, PH", sub: "based in Bataan" },
  { icon: GraduationCap, label: "BSIT", sub: "Cavite State University" },
  { icon: Sparkles, label: "FullStack", sub: "frontend + backend + cloud" },
];

const expertise = [
  "FullStack Development",
  "Web Development",
  "System Administration",
  "Project Management",
  "Payment Integration",
  "Microservices",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12 md:gap-16 items-start">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border-gradient">
            <Image
              src="/cedric.jpg"
              alt="Cedric Nathan Legarda"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
          </div>

          <div>
            <SectionHeading
              eyebrow="About me"
              title="Building web platforms end-to-end since 2018."
            />

            <div className="mt-8 space-y-4 text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                I&apos;m a FullStack Developer from the Philippines with
                hands-on experience building databases, crafting user
                interfaces, writing and testing code, troubleshooting complex
                issues, and shipping new features to production.
              </p>
              <p>
                Over 8+ years I&apos;ve worked across online casino platforms,
                aviation systems (Collins Aerospace), fintech (Dragonpay,
                Bayad), real estate portals (Lamudi), and horse racing platforms
                (Racing Victoria Australia) — always with an obsession for clean
                UI, scalable APIs, and reliable delivery.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur"
                >
                  {e}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur hover:bg-white/[0.04] transition-colors"
                >
                  <f.icon className="h-4 w-4 text-violet-300 mb-3" />
                  <div className="text-sm font-semibold text-white">
                    {f.label}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

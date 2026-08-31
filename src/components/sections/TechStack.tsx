"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStack, categoryLabels, iconUrl, type TechCategory } from "@/lib/data/techStack";
import { SectionHeading } from "@/components/ui/section-heading";

const order: TechCategory[] = ["frontend", "backend", "database", "testing", "devops"];

export function TechStack() {
  const grouped = order.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: techStack.filter((t) => t.category === cat),
  }));

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for."
          description="A mix of the modern web stack and battle-tested backend tooling — from Next.js and Three.js to AWS, Docker, and Nest."
        />

        <div className="mt-16 space-y-12">
          {grouped.map((group) => (
            <div key={group.category}>
              <div className="mb-5 flex items-center gap-3">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {group.label}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item.slug}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group relative flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur px-3 py-5 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-default"
                  >
                    <div className="relative h-8 w-8 flex items-center justify-center">
                      <Image
                        src={iconUrl(item.slug, item.color)}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="object-contain transition-transform group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs text-zinc-400 group-hover:text-white transition-colors text-center leading-tight">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

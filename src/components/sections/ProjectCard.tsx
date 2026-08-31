"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { techBySlug, iconUrl } from "@/lib/data/techStack";
import { screenshotUrl } from "@/lib/microlink";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shot = screenshotUrl(project.url);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur hover:border-white/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          src={shot}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-base font-semibold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-zinc-500 mt-0.5 uppercase tracking-wider">
              {project.company}
            </p>
          </div>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((slug) => {
            const t = techBySlug[slug];
            if (!t) return null;
            return (
              <span
                key={slug}
                title={t.name}
                className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5"
              >
                <Image
                  src={iconUrl(t.slug, t.color)}
                  alt={t.name}
                  width={12}
                  height={12}
                  className="h-3 w-3 object-contain"
                  unoptimized
                />
                <span className="text-[10px] text-zinc-400">{t.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </motion.a>
  );
}

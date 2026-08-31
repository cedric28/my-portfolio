"use client";

import { projects, projectsByCompany } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const companies = Object.keys(projectsByCompany);
  let globalIndex = -1;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title={`${projects.length} projects, shipped.`}
          description="A snapshot of client and product work across casino, aviation, real estate, and racing platforms. Live previews auto-refresh from each site."
        />

        <div className="mt-16 space-y-16">
          {companies.map((company) => {
            const list = projectsByCompany[company];
            return (
              <div key={company}>
                <div className="mb-6 flex items-baseline gap-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80">
                    {company}
                  </h3>
                  <span className="text-xs text-zinc-600">
                    {list.length} {list.length === 1 ? "project" : "projects"}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {list.map((p) => {
                    globalIndex += 1;
                    return <ProjectCard key={p.id} project={p} index={globalIndex} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

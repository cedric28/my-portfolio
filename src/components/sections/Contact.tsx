"use client";

import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

const socials = [
  { label: "Email", value: "cedric.legarda97@gmail.com", href: "mailto:cedric.legarda97@gmail.com", icon: Mail },
  { label: "Phone", value: "+63 917 627 0449", href: "tel:+639176270449", icon: Phone },
  { label: "GitHub", value: "github.com/cedric28", href: "https://github.com/cedric28", icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80">
            Contact
          </span>
          <h2 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span className="text-white">Let&apos;s build</span>
            <br />
            <span className="text-gradient">something.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-zinc-400 leading-relaxed">
            Open to freelance projects, contract roles, and full-time
            opportunities. The fastest way to reach me is email.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-5 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/10 border border-white/10">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {s.label}
                </div>
                <div className="text-sm text-white truncate">{s.value}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} Cedric Nathan Legarda
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Built with Next.js · Tailwind · GSAP · R3F
          </p>
        </footer>
      </div>
    </section>
  );
}

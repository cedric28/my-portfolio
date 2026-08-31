import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-zinc-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

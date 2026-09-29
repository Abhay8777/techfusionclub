import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner({
  eyebrow = "Recruitment",
  title = "Build what comes next.",
  body = "Applications are open for the next TFC intake. Learn with peers, choose a domain, and ship something you're proud of.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <Reveal className="mx-auto w-full max-w-7xl">
        <div className="glass-strong hero-gradient border-animated relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Technical background */}
          <div className="circuit-lines pointer-events-none absolute inset-0 opacity-60" />

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Large TFC watermark */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 select-none text-[10rem] font-black leading-none tracking-[-0.08em] text-foreground/[0.025] sm:text-[14rem] lg:text-[18rem]">
              TFC
            </div>

            {/* Right orbital rings */}
            <div className="absolute -right-32 top-1/2 size-[28rem] -translate-y-1/2 rounded-full border border-primary/10" />

            <div className="absolute -right-20 top-1/2 size-[22rem] -translate-y-1/2 rounded-full border border-primary/10" />

            <div className="absolute -right-8 top-1/2 size-[16rem] -translate-y-1/2 rounded-full border border-primary/10" />

            {/* Small technical dots */}
            <span className="absolute left-[12%] top-[20%] size-1.5 rounded-full bg-primary/50" />
            <span className="absolute left-[25%] bottom-[18%] size-1 rounded-full bg-primary/40" />
            <span className="absolute right-[18%] top-[18%] size-1.5 rounded-full bg-primary/50" />
            <span className="absolute right-[8%] bottom-[25%] size-1 rounded-full bg-primary/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Recruitment status */}
            <div className="flex flex-col items-center">
              <p className="eyebrow">
                {eyebrow}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                Applications Open
              </div>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-balance text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              <span className="text-foreground">
                Build what
              </span>
              <br />
              <span className="text-primary">
                comes next.
              </span>
            </h2>

            {/* Body */}
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {body}
            </p>

            {/* Information cards */}
            <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
              <InfoItem
                icon={<GraduationCap className="size-5" />}
                label="Open to"
                value="All SRMU Students"
              />

              <InfoItem
                icon={<Users className="size-5" />}
                label="Experience"
                value="Beginner Friendly"
              />
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/join"
                className="group pulse-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] sm:w-auto"
              >
                Apply to join

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary-glow sm:w-auto"
              >
                Learn More

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

    
        </div>
      </Reveal>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/35 px-5 py-5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background/50">
      <div className="absolute -right-8 -top-8 size-20 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />

      <div className="relative flex items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </p>

          <p className="mt-1 text-sm font-semibold text-foreground">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
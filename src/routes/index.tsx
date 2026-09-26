import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, Quote, Sparkles, Zap, Shield, Cpu, Code2, Terminal, ExternalLink } from "lucide-react";
import { club, domains, stats } from "@/data/club";
import { featuredEvent, formatEventDate } from "@/data/events";
import { galleryPhotos } from "@/data/gallery";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { StatCounter } from "@/components/site/StatCounter";
import { CTABanner } from "@/components/site/CTABanner";
import { GlowCard } from "@/components/site/GlowCard";
import { ProjectsShowcase } from "@/components/site/ProjectsShowcase";
import { ClubRoadmap } from "@/components/site/ClubRoadmap";
import { PillarsSection } from "@/components/site/PillarsSection";
import { PartnersSection } from "@/components/site/PartnersSection";

import { HeroBackground } from "@/components/site/HeroBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Fusion Club (TFC SRMU) | Coding & Viveka Fest" },
      {
        name: "description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest. Founded by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content: "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, engineering club, tech community",
      },
      { property: "og:title", content: "Tech Fusion Club (TFC SRMU) | Viveka Fest & Coding" },
      {
        property: "og:description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
      },
      { name: "twitter:title", content: "Tech Fusion Club (TFC SRMU)" },
      {
        name: "twitter:description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const previewPhotos = galleryPhotos.slice(0, 5);

  return (
    <>
    
    {/* ---------------- Premium Hero ---------------- */}
<section className="hero-gradient relative isolate min-h-[92vh] overflow-hidden px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:min-h-[94vh]">
  {/* Background effects */}
  <HeroBackground />

  <div className="circuit-lines pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_10%,#000_35%,transparent_100%)]" />

  <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,#000_30%,transparent_100%)]" />

  {/* Main Hero */}
  <div className="relative z-20 mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center">

    {/* Top decorative line */}
    <div className="mb-8 flex items-center gap-3 animate-rise">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/70 sm:w-16" />

      <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary-glow/80">
        Tech Fusion Club
      </span>

      <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/70 sm:w-16" />
    </div>

    {/* Heading */}
    <div className="relative">
      {/* Heading glow */}
      <div className="pointer-events-none absolute inset-x-10 top-1/2 -z-10 h-32 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]" />

      <h1 className="max-w-5xl text-balance font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] animate-rise [animation-delay:80ms] sm:text-6xl lg:text-8xl">
        Where ideas{" "}
        <span className="relative inline-block">
          <span className="text-gradient">fuse</span>

          {/* animated underline */}
          <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary animate-[heroLine_1.2s_ease-out_0.7s_forwards] sm:-bottom-2" />
        </span>{" "}
        into technology.
      </h1>
    </div>

    {/* Subtitle */}
    <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms] sm:text-xl">
      {club.name} is the student-run technical collective at {club.university}. Six domains,
      one calendar of workshops and hackathons, and a mentorship ladder running unbroken since {club.foundedYear}.
    </p>

    {/* CTA */}
    <div className="mt-10 flex flex-col gap-4 animate-rise [animation-delay:240ms] sm:flex-row sm:items-center">
      <Link
        to="/events"
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[0_0_35px_rgba(217,72,15,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(217,72,15,0.55)]"
      >
        {/* button shine */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative">
          Explore events
        </span>

        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      <Link
        to="/join"
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border/80 bg-background/20 px-8 py-4 font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary-glow"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative">
          Join the club
        </span>

        <ArrowUpRight className="relative size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>

    {/* Domain badges */}
    <div className="mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 animate-rise [animation-delay:300ms]">
      {[
        { name: "Web Dev", icon: <Code2 className="size-3.5 text-primary-glow" /> },
        { name: "AI / ML", icon: <Cpu className="size-3.5 text-accent" /> },
        { name: "Cybersecurity", icon: <Shield className="size-3.5 text-emerald-400" /> },
        { name: "App Dev", icon: <Sparkles className="size-3.5 text-cyan-400" /> },
        { name: "Cloud & DevOps", icon: <Terminal className="size-3.5 text-amber-400" /> },
        { name: "UI/UX Design", icon: <Zap className="size-3.5 text-purple-400" /> },
      ].map((d, i) => (
        <span
          key={d.name}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/25 px-3.5 py-1.5 font-mono text-xs text-foreground/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          style={{
            animationDelay: `${350 + i * 70}ms`,
          }}
        >
          <span className="transition-transform duration-300 group-hover:scale-125">
            {d.icon}
          </span>

          {d.name}
        </span>
      ))}
    </div>

    {/* Stats */}
    <dl className="mt-16 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-border/60 bg-background/15 backdrop-blur-md animate-rise [animation-delay:380ms] sm:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`relative px-5 py-7 transition-colors duration-300 hover:bg-primary/[0.04] ${
            i !== 0 ? "border-t border-border/50 sm:border-l sm:border-t-0" : ""
          }`}
        >
          <StatCounter
            value={s.value}
            prefix={s.prefix ?? ""}
            suffix={s.suffix ?? ""}
            label={s.label}
          />
        </div>
      ))}
    </dl>

    {/* Bottom scroll indicator */}
    <div className="mt-10 flex flex-col items-center gap-2 opacity-50 animate-rise [animation-delay:500ms]">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll
      </span>

      <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border/70 p-1">
        <span className="h-1.5 w-1 rounded-full bg-primary-glow animate-[scrollDot_1.8s_ease-in-out_infinite]" />
      </span>
    </div>
  </div>

  {/* Bottom fade */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
</section>

      {/* ---------------- NEW SECTION: The 4 Core Pillars of Tech Fusion ---------------- */}
      {/* ---------------- FOUR PILLARS ---------------- */}
      <PillarsSection />

      {/* ---------------- Mission ---------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              A club that measures itself in things shipped.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-pretty text-lg leading-relaxed text-foreground/90">{club.mission}</p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{club.vision}</p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary-glow"
            >
              Read the full story
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Featured Event ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Featured"
          title="What's next on the calendar"
          body="Our flagship fest and every workshop in between — all open to students from any department."
          action={
            <Link
              to="/events"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
            >
              All events <ArrowRight className="size-4" />
            </Link>
          }
        />

        <Reveal className="glass-strong border-animated mt-12 grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
          <div className="relative min-h-[18rem] overflow-hidden">
            <img
              src={featuredEvent.cover}
              alt={featuredEvent.title}
              className="size-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="p-8 sm:p-12">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {featuredEvent.status === "upcoming" ? "Upcoming" : featuredEvent.category}
            </span>
            <h3 className="mt-5 text-balance font-display text-2xl font-bold leading-snug sm:text-3xl">
              {featuredEvent.title}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {featuredEvent.summary}
            </p>
            <ul className="mt-7 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <li className="flex items-center gap-2">
                <CalendarDays className="size-3.5 text-primary-glow" /> {formatEventDate(featuredEvent)}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-3.5 text-primary-glow" /> {featuredEvent.venue}
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Event details <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://viveka.techfusion.club"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
              >
                Viveka 6.0 Site <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Domains ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="What we work on"
          title="Six domains, one shared standard of craft"
          body="Every member picks a domain on day one and gets a mentor inside it. Cross-domain project teams are the norm, not the exception."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={i * 60}>
              <GlowCard className="glass lift group h-full rounded-2xl p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary-glow">
                    {d.name}
                  </h3>
                  <span className="font-mono text-[11px] text-primary-glow/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {d.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------------- Member Projects Showcase ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Proof of Work"
          title="Shipped & Built by Fusion Members"
          body="We don't just talk about tech — our members build open-source tools, mobile apps, and security scanners used across campus."
        />
        <div className="mt-12">
          <Reveal>
            <ProjectsShowcase />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Club Roadmap / Member Journey ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="The Lifecycle"
          title="Your 1-Year Journey in Tech Fusion"
          body="From a beginner joining day one to organizing campus hackathons and landing tech roles."
        />
        <div className="mt-12">
          <Reveal>
            <ClubRoadmap />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- NEW SECTION: Global Tech Partners & Sponsors Matrix ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Ecosystem"
          title="Supported by Industry Leaders"
          body="Our events, cloud infrastructure, and dev tools are backed by global technology sponsors."
          align="center"
        />
        <div className="mt-12">
          <Reveal>
            <PartnersSection />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Gallery strip ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="From the floor"
          title="Recent event photos"
          action={
            <Link
              to="/gallery"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
            >
              Full gallery <ArrowRight className="size-4" />
            </Link>
          }
        />
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {previewPhotos.map((p, i) => (
            <Link
              key={p.src}
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className={`aspect-square w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${
                  i === 0 ? "sm:aspect-square" : ""
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {p.event}
              </span>
            </Link>
          ))}
        </Reveal>
      </Section>


      <CTABanner />
    </>
  );
}



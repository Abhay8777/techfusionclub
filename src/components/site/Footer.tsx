import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { club } from "@/data/club";
import { Logo } from "./Logo";

const exploreLinks = [
  { to: "/about", label: "About" },
  { to: "/governance", label: "Governance" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/alumni", label: "Alumni" },
] as const;

const communityLinks = [
  { to: "/join", label: "Join the Club" },
  { to: "/events", label: "Workshops & Events" },
  { to: "/team", label: "Our Teams" },
  {
    href: "https://viveka.techfusion.club",
    label: "Viveka 6.0 Fest",
    external: true,
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-primary/[0.045] blur-[120px]" />

        <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/[0.035] blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        {/* Main footer grid */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.25fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <Logo className="h-11 w-auto sm:h-12" />

              <div className="flex flex-col">
                <span className="font-display text-lg font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary-glow to-accent">
                  Tech Fusion
                </span>

                <span className="-mt-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-primary-glow">
                  Club
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              {club.tagline} A student-led technical club at{" "}
              {club.university}, active since {club.foundedYear}.
            </p>

            {/* University identity */}
            <div className="mt-8 max-w-sm">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                A Student Community at
              </p>

              <p className="mt-2 text-sm font-semibold text-foreground">
                Shri Ramswaroop Memorial University
              </p>

              <div className="mt-3 flex items-start gap-2.5 text-xs leading-5 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />

                <span>
                  Village – Hadauri, Post – Tindola
                  <br />
                  Lucknow-Deva Road, Barabanki
                  <br />
                  Uttar Pradesh — 225003
                </span>
              </div>

              <a
                href="https://srmu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-glow"
              >
                Official SRMU Website
                <ExternalLink className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer explore links">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground">
              Explore
            </h2>

            <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary-glow"
                  >
                    {link.label}

                    <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Community */}
          <nav aria-label="Footer community links">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground">
              Community
            </h2>

            <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
              {communityLinks.map((link) => (
                <li
                  key={"to" in link ? link.to : link.href}
                >
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary-glow"
                    >
                      {link.label}

                      <ExternalLink className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <Link
                      to={"to" in link ? link.to : "/"}
                      className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary-glow"
                    >
                      {link.label}

                      <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground">
              Contact
            </h2>

            <a
              href={`mailto:${club.email}`}
              className="mt-5 inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary-glow"
            >
              <span className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-background/40">
                <Mail className="size-4 text-primary" />
              </span>

              {club.email}
            </a>

            <p className="mt-6 text-xs leading-6 text-muted-foreground">
              For collaborations, workshops, partnerships, and general
              enquiries, get in touch with the Tech Fusion Club team.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {club.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex rounded-full px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-glow"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-glow mt-14" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-6 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
             {club.name}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            <span>Created By TFC Students</span>

            <span className="hidden size-1 rounded-full bg-primary/60 sm:block" />

            <span>Shri Ramswaroop Memorial University</span>

            <span className="hidden size-1 rounded-full bg-primary/60 sm:block" />

            <Link
              to="/"
              className="transition-colors hover:text-primary-glow"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Award,
  Terminal,
  Code2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Weekly Hands-on Build Nights",
    subtitle: "Shipping Code Over Slideware",
    description:
      "Every Thursday evening, members gather in the computer labs to write code, debug real-world applications, and collaborate on cross-domain projects.",
    tags: ["Build Nights", "Peer Coding", "Live Demos"],
    icon: <Code2 className="size-6 text-primary-glow" />,
  },
  {
    number: "02",
    title: "1-on-1 Senior Mentorship Ladder",
    subtitle: "From Beginner to Domain Lead",
    description:
      "Every junior is matched with a senior mentor inside their domain for code reviews, project guidance, and technical career advice.",
    tags: ["Code Review", "Career Prep", "1-on-1 Help"],
    icon: <Users className="size-6 text-accent" />,
  },
  {
    number: "03",
    title: "Production Shipping & Open Source",
    subtitle: "Real Repositories, Real Users",
    description:
      "Members leave university with deployed web apps, open-source pull requests, and production code that interviewers actually ask about.",
    tags: ["GitHub Repos", "Open Source", "Public Deploy"],
    icon: <Terminal className="size-6 text-emerald-400" />,
  },
  {
    number: "04",
    title: "Flagship Hackathons & Competitions",
    subtitle: "Organize & Compete at Scale",
    description:
      "Lead and participate in Viveka 6.0, Smart India Hackathon campus prep, CTFs, and intra-college tech-culture expos.",
    tags: ["Viveka 6.0", "SIH Prep", "CTF Gauntlets"],
    icon: <Award className="size-6 text-cyan-400" />,
  },
];

export function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const orangeLineRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      if (cards.length !== 4) return;

      const card1 = cards[0];
      const card2 = cards[1];
      const card3 = cards[2];
      const card4 = cards[3];

      if (!card1 || !card2 || !card3 || !card4) {
        return;
      }

      /*
       * ==========================================
       * HEADING INITIAL STATE
       * ==========================================
       */

      gsap.set(headingRef.current, {
        y: 45,
        opacity: 0,
      });

      /*
       * ==========================================
       * ORANGE LINE INITIAL STATE
       * ==========================================
       */

      if (orangeLineRef.current) {
        const length =
          orangeLineRef.current.getTotalLength();

        gsap.set(orangeLineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }

      /*
       * ==========================================
       * INITIAL CARD STATES
       * ==========================================
       *
       * Only Pillar 01 starts near the stage.
       * All other cards are completely hidden.
       */

      gsap.set(card1, {
        xPercent: -28,
        yPercent: 0,
        scale: 0.72,
        opacity: 0,
        visibility: "hidden",
        zIndex: 10,
        transformOrigin: "center center",
      });

      gsap.set(card2, {
        xPercent: 0,
        yPercent: 28,
        scale: 0.72,
        opacity: 0,
        visibility: "hidden",
        zIndex: 11,
        transformOrigin: "center center",
      });

      gsap.set(card3, {
        xPercent: 0,
        yPercent: 28,
        scale: 0.72,
        opacity: 0,
        visibility: "hidden",
        zIndex: 12,
        transformOrigin: "center center",
      });

      gsap.set(card4, {
        xPercent: 0,
        yPercent: 28,
        scale: 0.72,
        opacity: 0,
        visibility: "hidden",
        zIndex: 13,
        transformOrigin: "center center",
      });

      /*
       * ==========================================
       * MASTER TIMELINE
       * ==========================================
       */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },

        scrollTrigger: {
          trigger: section,

          start: "top top",

          /*
           * IMPORTANT:
           *
           * This is deliberately shorter than before.
           * Once Pillar 04 reaches its final state,
           * the pin ends immediately.
           */
          end: "+=4200",

          pin: true,

          scrub: 0.6,

          anticipatePin: 1,

          invalidateOnRefresh: true,

          /*
           * Snap ONLY to completed states.
           */
          snap: {
            snapTo: "labelsDirectional",

            delay: 0.08,

            duration: {
              min: 0.3,
              max: 0.7,
            },

            ease: "power3.inOut",

            directional: true,

            inertia: false,
          },
        },
      });

      /*
       * ==========================================
       * START
       * ==========================================
       */

      tl.addLabel("start", 0);

      /*
       * ==========================================
       * INTRO
       * ==========================================
       */

      tl.to(
        headingRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        0,
      );

      if (orangeLineRef.current) {
        tl.to(
          orangeLineRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.8,
          },
          0,
        );
      }

      /*
       * ==========================================
       * PILLAR 01
       * ==========================================
       *
       * LEFT -> CENTER
       * SMALL -> FULL
       */

      tl.set(
        card1,
        {
          visibility: "visible",
        },
        0.2,
      );

      tl.to(
        card1,
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.35,
        },
        0.2,
      );

      tl.to(
        progressRef.current,
        {
          scaleX: 0.25,
          duration: 0.2,
        },
        "<",
      );

      /*
       * PILLAR 01 COMPLETE
       */
      tl.addLabel("pillar01");

      /*
       * HOLD
       */
      tl.to({}, {
        duration: 0.55,
      });

      /*
       * ==========================================
       * PILLAR 02
       * ==========================================
       *
       * First Pillar 01 disappears completely.
       * Then Pillar 02 enters.
       */

      tl.to(
        card1,
        {
          scale: 0.96,
          opacity: 0,
          duration: 0.3,
        },
      );

      tl.set(card1, {
        visibility: "hidden",
      });

      tl.set(card2, {
        visibility: "visible",
      });

      tl.to(
        card2,
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
        },
      );

      tl.to(
        progressRef.current,
        {
          scaleX: 0.5,
          duration: 0.2,
        },
        "<0.15",
      );

      /*
       * PILLAR 02 COMPLETE
       */
      tl.addLabel("pillar02");

      /*
       * HOLD
       */
      tl.to({}, {
        duration: 0.55,
      });

      /*
       * ==========================================
       * PILLAR 03
       * ==========================================
       */

      tl.to(
        card2,
        {
          scale: 0.96,
          opacity: 0,
          duration: 0.3,
        },
      );

      tl.set(card2, {
        visibility: "hidden",
      });

      tl.set(card3, {
        visibility: "visible",
      });

      tl.to(
        card3,
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
        },
      );

      tl.to(
        progressRef.current,
        {
          scaleX: 0.75,
          duration: 0.2,
        },
        "<0.15",
      );

      /*
       * PILLAR 03 COMPLETE
       */
      tl.addLabel("pillar03");

      /*
       * HOLD
       */
      tl.to({}, {
        duration: 0.55,
      });

      /*
       * ==========================================
       * PILLAR 04
       * ==========================================
       */

      tl.to(
        card3,
        {
          scale: 0.96,
          opacity: 0,
          duration: 0.3,
        },
      );

      tl.set(card3, {
        visibility: "hidden",
      });

      tl.set(card4, {
        visibility: "visible",
      });

      tl.to(
        card4,
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
        },
      );

      tl.to(
        progressRef.current,
        {
          scaleX: 1,
          duration: 0.2,
        },
        "<0.15",
      );

      /*
       * ==========================================
       * PILLAR 04 COMPLETE
       * ==========================================
       *
       * NO FINAL HOLD HERE.
       *
       * Timeline ends immediately after Pillar 04.
       * Therefore ScrollTrigger can release the pin.
       */

      tl.addLabel("pillar04");
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[68%] top-[50%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[150px]" />

        <div className="absolute left-[40%] top-[35%] h-[28rem] w-[28rem] rounded-full bg-orange-500/[0.035] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

        <div className="absolute left-[75%] top-[48%] size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.055]" />

        <div className="absolute left-[75%] top-[48%] size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.03]" />
      </div>

      {/* ==========================================
          PROGRESS
      ========================================== */}

      <div className="pointer-events-none absolute bottom-12 left-8 z-40 hidden w-[190px] lg:block">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>

          <span className="font-mono text-[9px] text-primary-glow">
            01 / 04
          </span>
        </div>

        <div className="h-[2px] w-full overflow-hidden bg-border/60">
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.8)]"
          />
        </div>
      </div>

      {/* ==========================================
          ORANGE CURVED LINE
      ========================================== */}

      <svg
        className="pointer-events-none absolute right-[-5%] top-[8%] z-[2] hidden h-[80%] w-[62%] lg:block"
        viewBox="0 0 900 850"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={orangeLineRef}
          d="
            M 40 40
            C 230 80,
              110 300,
              300 350
            C 500 400,
              350 510,
              520 560
            C 680 610,
              600 760,
              850 790
          "
          stroke="hsl(var(--primary))"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col items-center px-5 py-16 sm:px-8 sm:py-20 lg:block lg:px-16 lg:py-16">
        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <div
          ref={headingRef}
          className="relative z-40 w-full max-w-[530px] lg:absolute lg:left-[5%] lg:top-1/2 lg:w-[34%] lg:-translate-y-1/2"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-primary sm:w-16" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.34em] text-primary-glow">
              The Framework
            </span>
          </div>

          <h2 className="font-display text-[2.8rem] font-black leading-[0.9] tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            Four Pillars of{" "}
            <span className="text-gradient">
              Tech Fusion Club
            </span>
          </h2>

          <p className="mt-7 max-w-[490px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            How our technical collective operates week after week to produce
            industry-ready student engineers.
          </p>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-9 bg-primary" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Scroll to explore
            </span>

            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border/70 p-1">
              <span className="h-1.5 w-1 rounded-full bg-primary" />
            </span>
          </div>
        </div>

        {/* ========================================
            RIGHT PILLAR STAGE
        ======================================== */}

        <div className="relative mt-12 h-[420px] w-full shrink-0 sm:mt-14 sm:h-[470px] lg:absolute lg:left-[43%] lg:right-[4%] lg:top-1/2 lg:mt-0 lg:h-[570px] lg:w-auto lg:-translate-y-1/2">
          {/* Outer frame */}
          <div className="absolute inset-0 rounded-[2.2rem] border border-primary/[0.13]" />

          {/* Inner frame */}
          <div className="absolute inset-x-3 inset-y-3 rounded-[2rem] border border-primary/[0.07]" />

          {/* Stage glow */}
          <div className="pointer-events-none absolute inset-8 rounded-[2rem] bg-primary/[0.025] blur-2xl" />

          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              ref={(element) => {
                if (element) {
                  cardsRef.current[index] = element;
                }
              }}
              className="absolute inset-5 overflow-hidden rounded-[2rem] border border-primary/[0.16] bg-card/[0.94] shadow-[0_40px_120px_hsl(var(--primary)/0.09)] backdrop-blur-xl"
              style={{
                zIndex: 20 + index,
              }}
            >
              <PillarCard pillar={pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
}: {
  pillar: (typeof pillars)[number];
}) {
  return (
    <div className="relative flex h-full flex-col justify-between p-5 sm:p-8 md:p-10 lg:p-14">
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-4 top-2 select-none font-display text-[7rem] font-black leading-none tracking-[-0.1em] text-primary/[0.035] sm:right-8 sm:text-[11rem] lg:text-[15rem]"
        aria-hidden="true"
      >
        {pillar.number}
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.05] sm:size-14 sm:rounded-2xl">
            {pillar.icon}
          </div>

          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary-glow">
            Pillar {pillar.number}
          </span>
        </div>

        <h3 className="max-w-3xl font-display text-2xl font-black leading-[0.96] tracking-[-0.045em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          {pillar.title}
        </h3>

        <p className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary-glow sm:text-sm">
          {pillar.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {pillar.description}
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <div className="mb-5 h-px w-full bg-gradient-to-r from-border via-primary/30 to-transparent" />

        <div className="flex flex-wrap gap-2">
          {pillar.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 bg-surface/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
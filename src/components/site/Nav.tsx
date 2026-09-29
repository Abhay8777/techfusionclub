import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/governance", label: "Governance" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/alumni", label: "Alumni" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top
      if (currentScrollY <= 20) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY + 4) {
        setVisible(false);
        setOpen(false);
      }

      // Scrolling up → show
      if (currentScrollY < lastScrollY - 4) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "px-4 sm:px-6 lg:px-8",
        "pt-4 sm:pt-6",
        "transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]",

        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-[140%] opacity-0 pointer-events-none",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-full max-w-[1250px]",
          "items-center justify-between gap-4",

          "rounded-full",

          "border border-white/50",
          "dark:border-white/10",

          "backdrop-blur-xl",
"supports-[backdrop-filter]:bg-white/30",
"dark:supports-[backdrop-filter]:bg-black/20",
          "sm:px-4 sm:py-3",

          "backdrop-blur-2xl",

          "shadow-[0_15px_45px_rgba(0,0,0,0.10)]",

          "transition-all duration-500",

          "hover:shadow-[0_18px_55px_rgba(217,72,15,0.14)]",
        )}
      >
        {/* =====================================================
            BRAND
        ====================================================== */}

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="relative">
            <span
              className={cn(
                "pointer-events-none absolute -inset-2",
                "rounded-full bg-primary/15 blur-lg",
                "opacity-0",
                "transition-opacity duration-500",
                "group-hover:opacity-100",
              )}
            />

            <Logo
              className={cn(
                "relative h-9 w-auto",
                "transition-transform duration-300",
                "group-hover:scale-105",
                "sm:h-11",
              )}
            />
          </div>

          <div className="hidden flex-col sm:flex">
            <span
              className={cn(
                "font-display text-lg font-extrabold",
                "uppercase tracking-[0.06em]",
                "leading-none",
                "text-transparent bg-clip-text",
                "bg-gradient-to-r",
                "from-foreground via-primary-glow to-primary",
              )}
            >
              TECH FUSION
            </span>

            <span
              className={cn(
                "mt-1 font-mono text-[7px]",
                "font-bold uppercase",
                "tracking-[0.45em]",
                "text-primary-glow",
              )}
            >
              CLUB
            </span>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{
                  exact: link.to === "/",
                }}
                activeProps={{
                  className:
                    "bg-primary text-primary-foreground shadow-[0_5px_20px_rgba(217,72,15,0.30)]",
                }}
                className={cn(
                  "inline-flex items-center",
                  "justify-center",
                  "rounded-full",
                  "px-3.5 py-2.5",
                  "text-[13px] font-medium",
                  "text-muted-foreground",
                  "transition-all duration-300",
                  "hover:bg-primary/10",
                  "hover:text-foreground",
                  "xl:px-4",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* =====================================================
            RIGHT ACTIONS
        ====================================================== */}

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            title={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            className={cn(
              "group relative inline-flex size-9",
              "items-center justify-center",
              "rounded-full",
              "border border-border/70",
              "bg-background/50",
              "text-foreground",
              "backdrop-blur-xl",
              "transition-all duration-300",
              "hover:scale-105",
              "hover:border-primary/40",
              "hover:bg-primary/10",
              "sm:size-10",
            )}
          >
            <span
              className={cn(
                "absolute inset-0 rounded-full",
                "bg-primary/10 blur-md",
                "opacity-0",
                "transition-opacity duration-300",
                "group-hover:opacity-100",
              )}
            />

            <span className="relative z-10 transition-transform duration-500 group-hover:rotate-12">
              {theme === "dark" ? (
                <Sun className="size-[17px] text-amber-400" />
              ) : (
                <Moon className="size-[17px] text-indigo-600" />
              )}
            </span>
          </button>

          {/* Join Button */}

          <Link
            to="/join"
            className={cn(
              "group relative hidden sm:inline-flex",
              "items-center gap-1.5",
              "overflow-hidden",
              "rounded-full",
              "bg-primary",
              "px-5 py-2.5",
              "text-sm font-semibold",
              "text-primary-foreground",
              "shadow-[0_6px_25px_rgba(217,72,15,0.25)]",
              "transition-all duration-300",
              "hover:-translate-y-0.5",
              "hover:scale-[1.03]",
              "hover:shadow-[0_8px_35px_rgba(217,72,15,0.40)]",
            )}
          >
            <span
              className={cn(
                "pointer-events-none absolute",
                "inset-y-0 -left-full",
                "w-1/2 skew-x-[-20deg]",
                "bg-gradient-to-r",
                "from-transparent via-white/30 to-transparent",
                "transition-all duration-700",
                "group-hover:left-[120%]",
              )}
            />

            <span className="relative z-10">
              Join the Club
            </span>

            <ArrowUpRight
              className={cn(
                "relative z-10 size-3.5",
                "transition-transform duration-300",
                "group-hover:-translate-y-0.5",
                "group-hover:translate-x-0.5",
              )}
            />
          </Link>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            className={cn(
              "inline-flex size-9",
              "items-center justify-center",
              "rounded-full",
              "border border-border/70",
              "bg-background/50",
              "text-foreground",
              "backdrop-blur-xl",
              "transition-all duration-300",
              "hover:border-primary/40",
              "hover:bg-primary/10",
              "sm:size-10",
              "lg:hidden",
            )}
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "mx-auto mt-3 max-w-[1250px]",
          "overflow-hidden rounded-3xl",
          "border border-border/70",
          "bg-background/90",
          "shadow-2xl",
          "backdrop-blur-2xl",
          "lg:hidden",
        )}
      >
        <div className="px-4 pb-5 pt-3 sm:px-6">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                  activeProps={{
                    className:
                      "bg-primary/10 text-primary-glow",
                  }}
                  className={cn(
                    "group flex items-center",
                    "justify-between",
                    "rounded-xl",
                    "px-4 py-3.5",
                    "font-display text-base",
                    "font-semibold",
                    "text-muted-foreground",
                    "transition-all duration-300",
                    "hover:bg-primary/5",
                    "hover:pl-5",
                    "hover:text-foreground",
                  )}
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    className={cn(
                      "size-4 opacity-0",
                      "transition-all duration-300",
                      "group-hover:-translate-y-0.5",
                      "group-hover:translate-x-0.5",
                      "group-hover:opacity-100",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/join"
            onClick={() => setOpen(false)}
            className={cn(
              "mt-4 flex w-full",
              "items-center justify-center",
              "gap-2 rounded-full",
              "bg-primary px-5 py-3.5",
              "font-semibold",
              "text-primary-foreground",
              "shadow-[0_8px_25px_rgba(217,72,15,0.25)]",
            )}
          >
            Join the Club
            <ArrowUpRight className="size-4" />
          </Link>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-muted-foreground/60">
              Tech Fusion Club
            </span>

            <span className="h-px w-10 bg-border" />
          </div>
        </div>
      </div>
    </header>
  );
}
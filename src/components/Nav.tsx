import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/compare", label: "Compare" },
  { to: "/find-my-exchange", label: "Find Exchange" },
  { to: "/cards", label: "Cards" },
  { to: "/news", label: "News" },
  { to: "/advertise", label: "Advertise" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-16 bg-bg/90 backdrop-blur hairline-b">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 md:px-8">
        <Link to="/" className="font-semibold tracking-tight text-txt text-lg">
          C<span className="text-cyan">o</span>in<span className="text-cyan">S</span>iglieri
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3 py-2 text-sm text-muted transition-colors hover:text-txt [&[data-status=active]]:text-txt"
              activeProps={{
                className:
                  "relative px-3 py-2 text-sm text-txt after:absolute after:left-3 after:right-3 after:-bottom-[18px] after:h-[2px] after:bg-emerald",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://app.coinsiglieri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1 hairline-cyan rounded-[3px] px-3 py-1.5 text-sm text-cyan transition-colors hover:bg-cyan/10"
          >
            Open App <span aria-hidden>→</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-txt"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-b bg-bg">
          <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted hairline-b last:border-b-0"
                activeProps={{ className: "py-3 text-sm text-emerald hairline-b last:border-b-0" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://app.coinsiglieri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-1 hairline-cyan rounded-[3px] px-3 py-2 text-sm text-cyan"
            >
              Open App →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

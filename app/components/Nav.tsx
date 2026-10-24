"use client";

import { useState } from "react";
import { Logo } from "./Decor";

const links = ["Home", "Services", "About", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between px-6 pt-6 pb-2 md:pt-9">
      <a href="#home" className="shrink-0">
        <Logo size={64} />
      </a>
      <nav className="hidden items-center gap-10 text-[17px] text-ink md:flex">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:opacity-70">
            {l}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="hidden rounded-full border-2 border-ink px-6 py-2.5 text-[17px] text-ink transition-colors hover:bg-ink hover:text-cream md:block"
      >
        Contact us
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink text-ink md:hidden"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          className="mt-4 flex w-full basis-full flex-col gap-1 rounded-[28px] border-2 border-ink bg-cream p-4 text-[17px] text-ink md:hidden"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2.5 hover:bg-ink hover:text-cream"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-cream hover:bg-ink-soft"
          >
            Contact us
          </a>
        </nav>
      )}
    </header>
  );
}

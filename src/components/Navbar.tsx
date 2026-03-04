"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Social Content", href: "#social-content" },
  { label: "Cinematic Work", href: "#cinematic-work" },
  { label: "Let's Work Together", href: "#work-together" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-7">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white p-1"
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <span
          className="text-white text-lg tracking-[0.2em] font-light"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          media by zehra
        </span>

        <a
          href="mailto:hello@mediabyzehra.com"
          className="text-white p-1"
          aria-label="Send email"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
        </a>
      </header>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-8 text-white p-1"
          aria-label="Close menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white text-3xl font-light tracking-widest hover:text-rose-200 transition-colors duration-200"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-10 py-16 px-8"
      style={{ backgroundColor: "#7d3461" }}
    >
      {/* Logo badge */}
      <div
        className="rounded-2xl px-8 py-3"
        style={{ backgroundColor: "#a05585" }}
      >
        <span
          className="text-white text-xl font-bold tracking-widest"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          M:Z
        </span>
      </div>

      {/* Social icons */}
      <div className="flex gap-5">
        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      {/* Email */}
      <a
        href="mailto:mediabyzehra@gmail.com"
        className="text-white/80 text-sm italic hover:text-white transition-colors"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        mediabyzehra@gmail.com
      </a>

      {/* Copyright */}
      <p
        className="text-white/60 text-xs"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        © 2026 media by zehra
      </p>
    </footer>
  );
}

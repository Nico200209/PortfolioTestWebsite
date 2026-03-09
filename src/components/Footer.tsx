import { FaTiktok, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-6 py-10 px-8"
      style={{ backgroundColor: "#9C326B" }}
    >
      {/* Logo badge */}
      <div
        className="rounded-2xl px-8 py-3"
        style={{ backgroundColor: "#DFACEA" }}
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
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-colors"
        >
          <FaTiktok size={18} />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-colors"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white transition-colors"
        >
          <FaLinkedinIn size={18} />
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

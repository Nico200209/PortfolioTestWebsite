"use client";

import { useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero/ZomerhuisDuik.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white backdrop-blur-sm"
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.63 3.63a1 1 0 0 0 0 1.41L7.29 8.7 7 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l4 4a1 1 0 0 0 1.7-.7v-2.58l4.18 4.18a9 9 0 0 1-2.41 1.07 1 1 0 1 0 .58 1.92 11 11 0 0 0 3.24-1.5l1.27 1.27a1 1 0 0 0 1.41-1.41L5.05 3.63a1 1 0 0 0-1.42 0zM19 12c0 .82-.12 1.61-.33 2.36l1.53 1.53A11 11 0 0 0 21 12c0-5.05-3.37-9.33-8-10.65V3.4A9 9 0 0 1 19 12zm-9-8.27L8.18 5.55 10 7.37V3.73zM15.5 12A3.5 3.5 0 0 0 13 8.69v1.58l2.48 2.48c.01-.25.02-.5.02-.75z"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            I create videos that
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            connect with
          </span>
          <span
            className="block text-4xl md:text-6xl lg:text-7xl font-normal italic text-rose-200 leading-tight mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            your audience.
          </span>
        </h1>
      </div>
    </section>
  );
}

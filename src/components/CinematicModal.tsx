"use client";

import { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  src: string;
  name: string;
  onClose: () => void;
}

export default function CinematicModal({ src, name, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play().catch(() => { video.muted = true; video.play(); });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
        >
          <IoCloseOutline size={22} />
        </button>

        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="auto"
            className="w-full h-full object-contain"
          />
        </div>

        <p
          className="mt-3 text-sm font-bold text-white lowercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

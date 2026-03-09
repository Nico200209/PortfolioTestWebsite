"use client";

import { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

export interface SocialProject {
  name: string;
  description: string;
  thumbnail: string;
  videos: string[];
}

interface Props {
  project: SocialProject;
  onClose: () => void;
}

export default function SocialProjectModal({ project, onClose }: Props) {
  const firstVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F0EBE6] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center"
        >
          <IoCloseOutline size={22} />
        </button>

        <div className="pt-8 pb-8 flex flex-col gap-6">
          {/* Title */}
          <h3
            className="text-2xl font-black text-neutral-900 text-center px-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {project.name}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed text-neutral-600 text-center px-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {project.description}
          </p>

          {/* Videos */}
          {project.videos.length <= 3 ? (
            <div className="flex justify-center gap-4 px-8 pb-2">
              {project.videos.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-[200px] md:w-[240px]">
                  <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
                    <video
                      ref={i === 0 ? firstVideoRef : undefined}
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{ scrollPaddingLeft: "2rem" }}
            >
              <div className="flex gap-4 pb-2" style={{ paddingLeft: "2rem" }}>
                {project.videos.map((src, i) => (
                  <div key={i} className="flex-shrink-0 snap-start snap-always w-[200px] md:w-[240px]">
                    <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
                      <video
                        ref={i === 0 ? firstVideoRef : undefined}
                        src={src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
                <div className="flex-shrink-0 w-8" aria-hidden="true" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

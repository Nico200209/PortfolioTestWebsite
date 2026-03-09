"use client";

import { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CinematicModal from "./CinematicModal";

interface CinematicProject {
  src: string;
  name: string;
}

const projects: CinematicProject[] = [
  { src: "/videos/cinematic/PuertoPlata15Seconds.mp4", name: "DR Puerto Plata in 15 seconds" },
  { src: "/videos/cinematic/MaltaInSeptember.mp4", name: "Malta in September" },
  { src: "/videos/cinematic/MaltaThroughMyEyes.mp4", name: "Malta through my eyes" },
  { src: "/videos/cinematic/SummerInScheveningen.mp4", name: "Summer in Scheveningen" },
  { src: "/videos/cinematic/SummerInUtrecht.mp4", name: "Summer in Utrecht" },
  /* { src: "/videos/cinematic/cinematic-6.mp4", name: "project name" }, */
];

export default function CinematicWorkSection() {
  const [selected, setSelected] = useState<CinematicProject | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 480 : -480, behavior: "smooth" });
  };

  return (
    <section
      id="cinematic-work"
      className="py-14"
      style={{ backgroundColor: "#F0EBE6" }}
    >
      {/* Header row with arrows */}
      <div className="flex items-center justify-between px-12 mb-6">
        <h2
          className="text-3xl font-black text-black lowercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          cinematic work
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center text-black"
          >
            <IoChevronBack size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center text-black"
          >
            <IoChevronForward size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "3rem" }}
      >
        <div className="flex gap-4 pb-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start snap-always w-[calc((100vw-3rem)/1.2-1rem)] md:w-[calc((100vw-3rem)/2-1rem)] lg:w-[calc((100vw-3rem)/2.5-1rem)] cursor-pointer"
              style={i === 0 ? { marginLeft: "3rem" } : undefined}
              onClick={() => setSelected(project)}
            >
              {/* Video card */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#d9d6d3] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-3">
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={project.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Label */}
              <p
                className="mt-2 text-sm font-bold text-black"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {project.name}
              </p>
            </div>
          ))}
          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-8" aria-hidden="true" />
        </div>
      </div>

      {selected && (
        <CinematicModal
          src={selected.src}
          name={selected.name}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

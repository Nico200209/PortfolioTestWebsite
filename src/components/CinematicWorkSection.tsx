"use client";

import { useState, useRef } from "react";
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
  { src: "/videos/cinematic/cinematic-5.mp4", name: "project name" },
  { src: "/videos/cinematic/cinematic-6.mp4", name: "project name" },
];

export default function CinematicWorkSection() {
  const [selected, setSelected] = useState<CinematicProject | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <section
      id="cinematic-work"
      className="py-14"
      style={{ backgroundColor: "#F0EBE6" }}
    >
      <h2
        className="text-3xl font-black text-black lowercase mb-6 px-12"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        cinematic work
      </h2>

      {/* Scrollable carousel */}
      <div
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

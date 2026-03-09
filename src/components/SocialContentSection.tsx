"use client";

import { useState } from "react";
import Image from "next/image";
import SocialProjectModal, { SocialProject } from "./SocialProjectModal";

const projects: SocialProject[] = [
  {
    name: "project name",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumbnail: "/social-1.jpg",
    videos: ["/social-1-v1.mp4", "/social-1-v2.mp4", "/social-1-v3.mp4", "/social-1-v4.mp4", "/social-1-v5.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-2.jpg",
    videos: ["/social-2-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-3.jpg",
    videos: ["/social-3-v1.mp4", "/social-3-v2.mp4", "/social-3-v3.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-4.jpg",
    videos: ["/social-4-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-5.jpg",
    videos: ["/social-5-v1.mp4", "/social-5-v2.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-6.jpg",
    videos: ["/social-6-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-7.jpg",
    videos: ["/social-7-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/social-8.jpg",
    videos: ["/social-8-v1.mp4"],
  },
];

export default function SocialContentSection() {
  const [selected, setSelected] = useState<SocialProject | null>(null);

  return (
    <section
      id="social-content"
      className="py-14"
      style={{ backgroundColor: "#9C326B" }}
    >
      <h2
        className="text-3xl font-black text-white lowercase mb-6 px-12"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        social content
      </h2>

      {/* Scrollable carousel */}
      <div
        className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "3rem", scrollPaddingRight: "3rem" }}
      >
        <div className="flex gap-4 pb-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start snap-always w-[calc((100vw-3rem)/2-1rem)] md:w-[calc((100vw-3rem)/3.5-1rem)] lg:w-[calc((100vw-3rem)/4.5-1rem)] cursor-pointer"
              style={i === 0 ? { marginLeft: "3rem" } : undefined}
              onClick={() => setSelected(project)}
            >
              {/* Image card */}
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-[#d9d6d3] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-3">
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Label */}
              <p
                className="mt-2 text-sm font-bold text-white lowercase"
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
        <SocialProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

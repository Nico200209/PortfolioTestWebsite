"use client";

import { useState } from "react";
import Image from "next/image";
import SocialProjectModal, { SocialProject } from "./SocialProjectModal";

const projects: SocialProject[] = [
  {
    name: "UGC Paid Social",
    description: "Omdat authentieke content het beste werkt, combineer ik de losse 'look & feel' van UGC met strakke marketingprincipes. Mijn focus ligt op retentie: de kijker vasthouden. Door strategische editing met wisselende hooks en CTA's creëer ik video's die natuurlijk aanvoelen én ook performen.",
    thumbnail: "/images/social/ugc/ugcpreview.png",
    videos: ["/videos/social/ugc/UGCPaidSocialMediabyZehra1.mp4", "/videos/social/ugc/UGCPaidSocialMediabyZehra2.mp4", "/videos/social/ugc/UGCPaidSocialMediabyZehra3.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-2.jpg",
    videos: ["/videos/social/social-2-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-3.jpg",
    videos: ["/videos/social/social-3-v1.mp4", "/videos/social/social-3-v2.mp4", "/videos/social/social-3-v3.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-4.jpg",
    videos: ["/videos/social/social-4-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-5.jpg",
    videos: ["/videos/social/social-5-v1.mp4", "/videos/social/social-5-v2.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-6.jpg",
    videos: ["/videos/social/social-6-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-7.jpg",
    videos: ["/videos/social/social-7-v1.mp4"],
  },
  {
    name: "project name",
    description: "A short description of this project, what it was for and what you created.",
    thumbnail: "/images/social/social-8.jpg",
    videos: ["/videos/social/social-8-v1.mp4"],
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
                className="mt-2 text-sm font-bold text-white"
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

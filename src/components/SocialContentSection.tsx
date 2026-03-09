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
    name: "Wehkamp x PIECES x Tessa van Montfoort",
    description: [
      "Voor een collab tussen Wehkamp, PIECES en influencer Tessa van Montfoort heb ik (zonder briefings) super toffe beelden mogen omtoveren tot een aantal edits in een compleet nieuwe stijl die past bij beide merken én Tessa zelf.",
      "Voor deze campagne heb ik vooral inspiratie genomen van Tessa's eigen socials en heb dit gecombineerd met de stijl van Wehkamp en PIECES en natuurlijk moest het ook in lijn zijn met de collectie die is uitgebracht. Hiervoor ben ik gegaan voor een vrolijke zomerse stijl.",
    ],
    thumbnail: "/images/social/pieces/PiecesPreview.png",
    videos: ["/videos/social/pieces/PiecesVideo1.mp4", "/videos/social/pieces/PiecesVideo2.mp4", "/videos/social/pieces/PiecesVideo3.mp4"],
  },
  {
    name: "Het Wehkamp Zomerhuis",
    description: "Voor de campagne Het Wehkamp Zomerhuis hebben we een week lang allerlei content opgenomen in een gehuurd huisje. Ik was verantwoordelijk voor het editen van de content onder strakke deadlines en ook het filmen van sommige video's.",
    thumbnail: "/images/social/zomerhuis/ZomerhuisPreview.png",
    videos: ["/videos/social/zomerhuis/ZomerhuisVideo1.mp4", "/videos/social/zomerhuis/ZomerhuisVideo2.mp4", "/videos/social/zomerhuis/ZomerhuisVideo3.mp4"],
  },
  {
    name: "Vriendjes van kleertjes",
    description: "Vriendjes van kleertjes is een videoserie waarin het draait om kinderen en hun soms wat gekke antwoorden…",
    thumbnail: "/images/social/vriendjes/VriendjesPreview.png",
    videos: ["/videos/social/vriendjes/VriendjesVideo1.mp4", "/videos/social/vriendjes/VriendjesVideo2.mp4", "/videos/social/vriendjes/VriendjesVideo3.mp4"],
  },
  {
    name: "Union River",
    description: "Het merk Union River is gefocust op fashion voor jonge mannen. Voor dit merk heb ik vooral TikTok's geëdit omdat de doelgroep daar het beste was te bereiken.",
    thumbnail: "/images/social/unionriver/UnionRiverPreview.png",
    videos: ["/videos/social/unionriver/UnionRiverVideo1.mp4", "/videos/social/unionriver/UnionRiverVideo2.mp4", "/videos/social/unionriver/UnionRiverVideo3.mp4"],
  },
  {
    name: "Kleertjes & kletsen",
    description: "Kleertjes & kletsen is een videoseries met presentatrice Roos die allerlei tips geeft over kleertjes, speelgoed en cadeau's aan alle mama's (en papa's) van Nederland.",
    thumbnail: "/images/social/kleertjes/KleertjesPreview.png",
    videos: ["/videos/social/kleertjes/KleertjesVideo1.mp4", "/videos/social/kleertjes/KleertjesVideo2.mp4"],
  },
/*   {
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
  }, */
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

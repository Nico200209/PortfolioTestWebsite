"use client";

import { useEffect } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  onClose: () => void;
}

export default function AboutModal({ onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/50 animate-fade-in"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative bg-[#F0EBE6] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center"
        >
          <IoCloseOutline size={22} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Photo */}
          <div className="flex-shrink-0 relative w-full md:w-[260px] h-[280px] md:h-auto md:min-h-[500px] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden">
            <Image
              src="/images/about/about-modal.jpg"
              alt="Zehra"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 p-8 overflow-y-auto">
            <h3
              className="text-2xl font-black text-neutral-900 leading-tight"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Van hobby tot werk
            </h3>

            <p
              className="text-sm leading-relaxed text-neutral-700"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Hi! Ik ben Zehra. Mijn passie voor video was er eigenlijk al zolang ik me kan herinneren. Het begon van kleins af aan met mijn iPad waar ik vlogs mee maakte. Nu ben ik inmiddels 22 jaar en is die passie alleen maar gegroeid en kan ik met trots zeggen dat ik van mijn passie mijn werk heb gemaakt.
            </p>

            <p
              className="text-sm leading-relaxed text-neutral-700"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Momenteel combineer ik het beste van twee werelden. Bij Wehkamp en kleertjes.com focus ik me op organische content: van concept en filmen tot edits die perfect bij het merk passen. Daarnaast werk ik als freelancer voor merken als Parfumado, waar ik me specialiseer in Paid Social.
            </p>

            <p
              className="text-sm leading-relaxed text-neutral-700"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Wat mij uniek maakt is mijn achtergrond in UI/UX en mijn marketing mindset. Ik kijk niet alleen naar mooie plaatjes, maar begrijp ook hoe je video&apos;s maakt die niet alleen bekeken worden, maar ook resultaat opleveren.
            </p>

            <p
              className="text-sm leading-relaxed text-neutral-700"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              En als ik niet aan het editen ben? Dan ben ik buiten te vinden met mijn camera, of lig ik op de bank diep in TikTok en Instagram (voor research purposes, natuurlijk).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

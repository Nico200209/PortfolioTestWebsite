import Image from "next/image";

export default function WorkTogetherSection() {
  return (
    <section
      id="work-together"
      className="py-20 px-12"
      style={{ backgroundColor: "#e9e3d8" }}
    >
      {/* Heading */}
      <h2
        className="text-5xl md:text-7xl font-black text-neutral-900 lowercase mb-14 leading-none"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        let&apos;s work together.
      </h2>

      {/* Content row */}
      <div className="flex flex-col md:flex-row gap-12 items-start relative">
        {/* Photo */}
        <div className="flex-shrink-0 relative w-[260px] h-[330px] rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/work-together.jpg"
            alt="Zehra filming"
            fill
            className="object-cover"
          />
        </div>

        {/* Text + CTA */}
        <div className="flex flex-col justify-center gap-6 max-w-xl">
          <p
            className="text-base leading-relaxed text-neutral-700"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            I make videos that actually grab attention. From TikToks and Reels to
            podcasts and branded edits, I help you show up online in a way that
            feels real, looks good, and hits the right vibe.
          </p>
          <p
            className="text-base leading-relaxed text-neutral-700"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            I edit all kinds of content, whether it is short-form, cinematic, or something
            in between. I&apos;m always down to explore something new. I am especially
            interested in diving into event and wedding videography soon, so feel
            free to reach out if you are looking for someone with a creative eye and a
            fresh approach.
          </p>
          <button
            className="self-start rounded-full border px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[#c9a4bc]/10"
            style={{
              borderColor: "#c9a4bc",
              color: "#7d3461",
              fontFamily: "var(--font-inter)",
            }}
          >
            get in contact
          </button>
        </div>

        {/* Heart doodle */}
        <div className="hidden md:block absolute right-0 top-0">
          <HeartDoodle />
        </div>
      </div>
    </section>
  );
}

function HeartDoodle() {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer heart shape */}
      <path
        d="M55 85 C55 85, 18 60, 18 38 C18 26, 27 18, 37 20 C44 22, 50 28, 55 34 C60 28, 66 22, 73 20 C83 18, 92 26, 92 38 C92 60, 55 85, 55 85 Z"
        stroke="#9b7ab0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#d8bce8"
        fillOpacity="0.35"
      />
      {/* Signature Z inside */}
      <path
        d="M44 42 L62 42 L44 60 L62 60"
        stroke="#7d3461"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

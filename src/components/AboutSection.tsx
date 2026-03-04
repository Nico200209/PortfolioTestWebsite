import Image from "next/image";

const photos = [
  { src: "/about-1.jpg", alt: "Zehra portrait", rotate: "-rotate-6" },
  { src: "/about-2.jpg", alt: "Zehra with camera", rotate: "rotate-1" },
  { src: "/about-3.jpg", alt: "Zehra outdoors", rotate: "rotate-5" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center py-24 px-6"
      style={{ backgroundColor: "#e9e3d8" }}
    >
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2
          className="text-6xl md:text-7xl font-black leading-none tracking-tight text-neutral-900"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          hi there!
        </h2>
        <p
          className="text-5xl md:text-6xl font-normal text-neutral-900 mt-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          I&apos;m Zehra.
        </p>
      </div>

      {/* Photos + doodles */}
      <div className="relative flex items-center justify-center gap-4 md:gap-6 mb-16 px-16">
        {/* Left doodle */}
        <div className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2">
          <CurlyArrowDoodle />
        </div>

        {photos.map((photo) => (
          <div
            key={photo.src}
            className={`${photo.rotate} relative w-[140px] h-[190px] md:w-[180px] md:h-[240px] overflow-hidden rounded-sm shadow-md flex-shrink-0`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Right doodle */}
        <div className="absolute right-0 md:-right-4 top-4">
          <SunDoodle />
        </div>
      </div>

      {/* Bio text */}
      <p
        className="max-w-sm text-center text-sm md:text-base leading-relaxed text-neutral-700 mb-10"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        with experience at a large company (Wehkamp), where I have worked on
        content for multiple brands and influencers, I also take on more
        personal, story-driven projects. I specialize in editing and can adapt
        my style to match your brand identity and boost engagement.
      </p>

      {/* CTA button */}
      <button
        className="rounded-full border px-8 py-3 text-sm tracking-wide transition-colors hover:bg-[#c9a4bc]/10"
        style={{
          borderColor: "#c9a4bc",
          color: "#c9a4bc",
          fontFamily: "var(--font-inter)",
        }}
      >
        more about me
      </button>
    </section>
  );
}

function CurlyArrowDoodle() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 50 C15 35, 25 15, 40 20 C55 25, 45 45, 35 40 C25 35, 30 20, 42 22"
        stroke="#9b7ab0"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 18 L42 22 L37 25"
        stroke="#9b7ab0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function SunDoodle() {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rays */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => (
        <line
          key={angle}
          x1={37.5 + 20 * Math.cos((angle * Math.PI) / 180)}
          y1={37.5 + 20 * Math.sin((angle * Math.PI) / 180)}
          x2={37.5 + 30 * Math.cos((angle * Math.PI) / 180)}
          y2={37.5 + 30 * Math.sin((angle * Math.PI) / 180)}
          stroke="#9b7ab0"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      {/* Spiral center */}
      <path
        d="M37.5 29 C44 29, 47 33, 46 37.5 C45 42, 40 44, 37.5 43 C33 42, 31 38, 33 35.5 C35 33, 38 34, 38.5 36"
        stroke="#9b7ab0"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

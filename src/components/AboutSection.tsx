import Image from "next/image";

const photos = [
  { src: "/about-1.png", alt: "Zehra portrait", rotate: "-rotate-6", z: "z-10" },
  { src: "/about-2.png", alt: "Zehra with camera", rotate: "rotate-1", z: "z-20", offset: "translate-y-8" },
  { src: "/about-3.png", alt: "Zehra outdoors", rotate: "rotate-5", z: "z-10" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center py-24 px-6"
      style={{ backgroundColor: "#F0EBE6" }}
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
      <div className="relative flex items-center justify-center mb-16 px-16">
        {/* Left doodle */}
        <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2">
          <Image src="/ShapesArrow.png" alt="" width={120} height={120} className="object-contain" />
        </div>

        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`${photo.rotate} ${photo.z} ${"offset" in photo ? photo.offset : ""} relative w-[140px] h-[190px] md:w-[180px] md:h-[240px] overflow-hidden rounded-sm shadow-md flex-shrink-0 ${i !== 0 ? "-ml-10 md:-ml-14" : ""} transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-4 hover:z-30`}
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
        <div className="absolute -right-8 md:-right-10 top-0 z-10">
          <Image src="/ShapesSun.png" alt="" width={120} height={120} className="object-contain" />
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
        className="rounded-full px-8 py-3 text-sm tracking-wide text-white transition-opacity hover:opacity-80"
        style={{
          backgroundColor: "#DFACEA",
          fontFamily: "var(--font-inter)",
        }}
      >
        more about me
      </button>
    </section>
  );
}

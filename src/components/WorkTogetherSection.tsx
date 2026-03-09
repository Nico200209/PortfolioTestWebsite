import Image from "next/image";

export default function WorkTogetherSection() {
  return (
    <section
      id="work-together"
      className="py-20 px-12"
      style={{ backgroundColor: "#F0EBE6" }}
    >
      {/* Heading */}
      <h2
        className="text-5xl md:text-7xl font-black text-neutral-900 lowercase mb-14 leading-none"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        let&apos;s work together.
      </h2>

      {/* Content row */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Photo */}
        <div className="flex-shrink-0 relative w-[260px] h-[330px] rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/images/worktogether/work-together.jpg"
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
          <a
            href="mailto:mediabyzehra@gmail.com"
            className="self-start rounded-full px-8 py-3 text-sm tracking-wide text-white transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#DFACEA",
              fontFamily: "var(--font-inter)",
            }}
          >
            get in contact
          </a>
        </div>

        {/* Heart sticker — flex child so it never overlaps text */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center ml-auto">
          <Image src="/images/shapes/ShapesHeart.png" alt="" width={140} height={140} className="object-contain" />
        </div>
      </div>
    </section>
  );
}

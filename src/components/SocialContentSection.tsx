import Image from "next/image";

const projects = [
  { src: "/social-1.jpg", name: "project name" },
  { src: "/social-2.jpg", name: "project name" },
  { src: "/social-3.jpg", name: "project name" },
  { src: "/social-4.jpg", name: "project name" },
  { src: "/social-5.jpg", name: "project name" },
  { src: "/social-6.jpg", name: "project name" },
  { src: "/social-7.jpg", name: "project name" },
  { src: "/social-8.jpg", name: "project name" },
];

export default function SocialContentSection() {
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
            className="flex-shrink-0 snap-start snap-always w-[calc((100vw-3rem)/2-1rem)] md:w-[calc((100vw-3rem)/3.5-1rem)] lg:w-[calc((100vw-3rem)/4.5-1rem)]"
            style={i === 0 ? { marginLeft: "3rem" } : undefined}
          >
            {/* Image card */}
            <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-[#d9d6d3] transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-3">
              <Image
                src={project.src}
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
        {/* Trailing spacer: gap(1rem) + this(2rem) = 3rem, matching left margin */}
        <div className="flex-shrink-0 w-8" aria-hidden="true" />
      </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image — add your photo as /public/hero-bg.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            I create videos that
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            connect with
          </span>
          <span
            className="block text-4xl md:text-6xl lg:text-7xl font-normal italic text-rose-200 leading-tight mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            your audience.
          </span>
        </h1>
      </div>
    </section>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <section id="about" className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">About Me — coming soon</p>
      </section>

      <section id="social-content" className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Social Content — coming soon</p>
      </section>

      <section id="cinematic-work" className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Cinematic Work — coming soon</p>
      </section>

      <section id="work-together" className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Let&apos;s Work Together — coming soon</p>
      </section>
    </main>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SocialContentSection from "@/components/SocialContentSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />

      <SocialContentSection />

      <section id="cinematic-work" className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Cinematic Work — coming soon</p>
      </section>

      <section id="work-together" className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Let&apos;s Work Together — coming soon</p>
      </section>
    </main>
  );
}

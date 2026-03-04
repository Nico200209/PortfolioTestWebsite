import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SocialContentSection from "@/components/SocialContentSection";
import CinematicWorkSection from "@/components/CinematicWorkSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />

      <SocialContentSection />

      <CinematicWorkSection />

      <section id="work-together" className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-gray-300 text-sm tracking-widest uppercase">Let&apos;s Work Together — coming soon</p>
      </section>
    </main>
  );
}

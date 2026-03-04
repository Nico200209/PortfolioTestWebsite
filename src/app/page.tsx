import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SocialContentSection from "@/components/SocialContentSection";
import CinematicWorkSection from "@/components/CinematicWorkSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />

      <SocialContentSection />

      <CinematicWorkSection />

      <WorkTogetherSection />
      <Footer />
    </main>
  );
}

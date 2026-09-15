import Hero from "@/components/Hero";
import LoveLetter from "@/components/LoveLetter";
import PhotoGallery from "@/components/PhotoGallery";
import Reasons from "@/components/Reasons";
import Timeline from "@/components/Timeline";
import SurpriseCards from "@/components/SurpriseCards";
import BirthdayCake from "@/components/BirthdayCake";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative">
      <MusicPlayer />
      <Hero />
      <LoveLetter />
      <PhotoGallery />
      <Reasons />
      <BirthdayCake />
      <Footer />
    </main>
  );
}

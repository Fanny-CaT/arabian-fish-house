import HeroSection from "@/components/home/HeroSection";
import {
  SignatureStory,
  MenuHighlights,
  ParallaxDivider,
  WhyChooseUs,
  ReservationCtaBand,
  Testimonials,
  GalleryStrip,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SignatureStory />
      <MenuHighlights />
      <ParallaxDivider />
      <WhyChooseUs />
      <ReservationCtaBand />
      <Testimonials />
      <GalleryStrip />
    </>
  );
}

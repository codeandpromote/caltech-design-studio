import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesDuo from "@/components/ServicesDuo";
import SignatureSlider from "@/components/SignatureSlider";
import HeritageStrip from "@/components/HeritageStrip";
import Philosophy from "@/components/Philosophy";
import CTA from "@/components/CTA";

const AmbientCanvas = dynamic(() => import("@/components/AmbientCanvas"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <AmbientCanvas />
        <Hero />
      </div>
      <Marquee />
      <ServicesDuo />
      <SignatureSlider />
      <HeritageStrip />
      <Philosophy />
      <CTA />
    </>
  );
}

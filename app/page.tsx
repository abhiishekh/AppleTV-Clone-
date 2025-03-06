import { Container } from "./components/Container";
import { Hero } from "./components/section/hero";
import Usps from "./components/section/Usps";
import ThreeColLayout from "./components/section/ThreeColLayout";
import { VideoCarousel } from "./components/section/video-carousel";
import { Lockup } from "./components/section-content/lockup";
import { Brands } from "./components/section-content/brands";
import { FAQ } from "./components/FAQs/faq";
import { BundleSection } from "./components/Bundle-section/bundle-section";
import { AppleMusic } from "./components/Apple-music/Apple-music";
import { AirPlayAndTv } from "./components/AirPlayAndTv/aireplayAndTv";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        {/* // in black background  */}
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
          <ThreeColLayout />
        </div>

        {/* // oute side black background  */}
        <VideoCarousel />
        <Lockup />
        {/* // brands section  */}

        <Brands />

        {/* //question and answers  */}
        <h1 className="text-3xl md:text-3xl xl:text-7xl font-bold text-center mt-28 mb-12 sm:mb-16 sm:mt-40">
          Questions? Answers.
        </h1>
        <div>
          {/* // faq section  */}

          <FAQ />

          {/* // bundle section  */}
          <BundleSection />
          <AppleMusic />

          {/* //air play and tv  */}
          <AirPlayAndTv />
          <hr className="w-full h-[1px] bg-gray-200"/>
          <Container className="mx-auto text-center">Copyright © 2025 Apple Inc. All rights reserved</Container>
        </div>
      </main>
    </>
  );
}

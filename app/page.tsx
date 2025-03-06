import Image from "next/image";
import { Container } from "./components/Container";
import { Hero } from "./components/section/hero";
import Usps from "./components/section/Usps";
import Check from "./components/Check";
import ThreeColLayout from "./components/section/ThreeColLayout";
import { VideoCarousel } from "./components/section/video-carousel";
import { Lockup } from "./components/section-content/lockup";

export default function Home() {
  return (
    <>
      <main className="bg-mycolor">

        {/* // in black background  */}
        <div className="bg-background relative z-10">
        <Hero />
        <Usps />
        <ThreeColLayout/>
        </div>

        {/* // oute side black background  */}
        <VideoCarousel />
        <Lockup/>
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}

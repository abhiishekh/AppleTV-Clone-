import React from "react";
import { Container } from "../Container";
import Fadein from "../Fadein";

const Usps = () => {
  return (
    <Container className="text-white text-4xl 2xl:text-5xl font-bold space-y-20  py-36 relative z-10 3xl:max-w-[1600px]">
      <Fadein>
        <p>New Apple Originals every month — always ad‑free.</p>
      </Fadein>
      <Fadein>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </Fadein>
      <Fadein>
        <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
      </Fadein>

      <Fadein>
        <p>Share a single subscription with up to five people.</p>
      </Fadein>
      <Fadein>
        <p>New Apple Originals every month — always ad‑free.</p>
      </Fadein>
    </Container>
  );
};

export default Usps;

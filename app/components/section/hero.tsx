"use client";

import { Tv } from "lucide-react";
import { Button } from "../button";
import { Container } from "../Container";
import img from "@/public/images/airplane.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["0 0.2", "1 0.8"], // Adjusted offset
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.4, 0]); // Adjusted transform

  useEffect(() => {}, [scrollYProgress]);

  return (
    <div className="relative  bg-background text-white">
      <motion.div
        ref={videoContainerRef}
        style={{ opacity }}
        className="absolute left-0 top-0 w-full h-[200vh]"
      >
        <img
          src={img.src}
          alt="hero image"
          width={100}
          height={100}
          className="w-full sticky top-0 object-cover h-[100vh]"
        />
      </motion.div>

      <Container className="relative z-10 top-0 left-0 h-[calc(100vh-174px)] pb-7">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.8 }}
          className="flex h-full flex-col justify-end items-start"
        >
          <h1 className="text-4xl 2 xl:text-6xl font-bold mb-10">
            All Apple Originals. <br /> Only On Apple TV+.
          </h1>
          <Button size="lg" className="mb-16">
            Stream now
          </Button>
          <p className="font-semibold">
            Watch on the <Tv /> app.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};


"use client"
import Image from "next/image";
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "@/app/movies";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { useWindowSize } from "react-use";
import { Button } from "../button";
import { Play } from "lucide-react";
import { Container } from "../Container";

export const VideoCarousel = () => {
    const { width, height } = useWindowSize()
    const carouselWrapperRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ['start start', 'end start']
    })
    const maxiMumScale  = useMemo(()=>{
        const windowRatio = height/width;
        const Xscale = 1.666667;
        const Yscale = Xscale *(16/9)* windowRatio;
        return Math.max(Xscale, Yscale);
    },[width, height])
    const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66],[maxiMumScale * 1.15, maxiMumScale, 1])

    const scaleMobile = useTransform(scrollYProgress, [0.3, 0.5, 0.66],[maxiMumScale * 0.45, maxiMumScale * .45, 1])


    const posterOpacity = useTransform(
        scrollYProgress,
        [0.64, 0.66],
        [0, 1]
    )

  return (
    <div className="bg-background text-white pb-8">
      <div ref={carouselWrapperRef} 
      className="overflow-clip h-[250vh]">
        <div className="h-screen sticky top-0 mt-[-100vh] flex items-center justify-center">

        <div className="  w-full flex gap-4 3xl:gap-8 left-1/2 -translate-x-1/2">
          <motion.div style={{opacity:posterOpacity}} className="shrink-0 lg:aspect-video h-[70vh] lg:h-auto w-[60vw] rounded-2xl overflow-clip">
            <Image
              src={movies[0].poster}
              alt={movies[0].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div style={{ scale: width < 1024 ? scaleMobile : scale }}  className="shrink-0 aspect-video w-[60vw] rounded-2xl overflow-clip lg:scale-[scale]">
            <Image
              src={movies[1].poster}
              alt={movies[1].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div style={{opacity:posterOpacity}} className="shrink-0 aspect-video w-[60vw] rounded-2xl overflow-clip">
            <Image
              src={movies[2].poster}
              alt={movies[2].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div style={{opacity:posterOpacity}} className="shrink-0 aspect-video w-[60vw] rounded-2xl overflow-clip">
            <Image
              src={movies[3].poster}
              alt={movies[3].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        </div>
      </div>
      <div className="-mt-[calc((100vh - (60vw *(16/9)/2))] space-y-3">
        <SmallVideoCarousel movies={randomMoviesSet1} />

        <div className="[--carousel-offset:-32px] [--duration:68s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    <Container className="flex justify-center">

      <Button size="lg" className="border border-white bg-background text-white">See full lineup</Button>
    </Container>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-4 3xl:gap-8 my-4 3xl:my-8 animate-carousel">
        {movies.map((movie, index) => (
         <div
         key={`${movie.name}-${index}`}
         className=" w-full lg:w-[25vw] aspect-video shrink-0 relative group"
       >
         <Image
           src={movie.poster}
           alt={movie.name}
           className="w-full h-full object-cover rounded-lg 3xl:rounded-xl hover:opacity-[0.6] transform transition-all duration-300 overflow-hidden"
         />
         <motion.div 
        //  initial={{opacity:0, y:20}}
        //  whileHover={{opacity:1,y:0}}
         className="absolute inset-0 bg-transparent hover:bg-red-50/10  flex items-center justify-center opacity-0  group-hover:opacity-100 transition-all duration-300">
           <Button className="flex items-center gap-2">Stream Now <Play size={14}/></Button>
         </motion.div>
       </div>
        ))}
      </div>
    </div>
  );
};

import { Container } from "../Container";
import { Button } from "../button";
import { ChevronRight } from "lucide-react";
import tv from "@/public/images/tv.png";
import remote from "@/public/images/appletvremote.jpg";
import aireplay from "@/public/images/airplay.jpg";
export const AirPlayAndTv = () => {
  return (
    <div className="w-full h-full my-12">
      <Container className="grid grid-cols-1 sm:grid-cols-2 max-w-[1600px] gap-12">
        <div className="w-full col-span-1 flex flex-col justify-between items-center  bg-[#EEEDF0]/60">
          {/* //1 */}
          <div className="flex flex-col items-center pt-24 sm:w-[400px]">
            <div className="w-32 h-16">
              <img
                src={tv.src}
                alt="tv"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="leading-12 text-4xl text-textblack font-bold text-center my-8 tracking-tighter">
              The Apple experience. Cinematic in every sense.
            </h1>
            <div className="w-full flex justify-center gap-12 items-center">
              <Button className="bg-blue-500 text-white" size="lg">
                Buy
              </Button>
              <p className="text-xl text-blue-500 flex items-center gap-2">
                learn more <ChevronRight />
              </p>
            </div>
          </div>

          {/* //2 */}

          <div className="w-full -mg-24 sm:-mb-24 h-96 sm:h-[800px]">
            <img
              src={remote.src}
              alt="appleTv-remote"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-between items-center  bg-[#EEEDF0]/60">
          {/* //1 */}
          <div className="flex flex-col items-center pt-24 sm:w-[400px]">
            <div className="w-16 h-16">
              <p className="text-4xl text-textblack font-semibold">AirPlay</p>
            </div>
            <h1 className="leading-12 text-4xl text-textblack font-bold text-center my-8 tracking-tighter">
              Bring Apple TV+ to a screen near you.
            </h1>
            <div className="w-full flex justify-center gap-12 items-center">
              <p className="text-xl text-blue-500 flex items-center gap-2">
                learn more <ChevronRight />
              </p>
            </div>
          </div>

          {/* //2 */}

          <div className="w-full -mb-28 sm:mb-0 h-[800px]  mx-auto">
            <img
              src={aireplay.src}
              alt="appleTv-remote"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

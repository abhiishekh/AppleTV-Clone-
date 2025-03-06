import Image from "next/image";
import { Container } from "../Container";
import appleMusic from "@/public/images/appleStudent.jpg";
import { Button } from "../button";

export const AppleMusic = () => {
  return (
    <div className="w-full h-auto my-12  bg-[#EEEDF0]/60">
      <Container className="max-w-[1500px]">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 ">
          <div className="col-span-1 flex  flex-col pt-24  justify-center items-center sm:items-start">
            <h1 className="text-[2.8rem] leading-12 w-full sm:w-4/6 mt-4 text-textblack font-bold tracking-tighter text-center sm:text-left">
              The Apple Music Student Plan comes with
            </h1>
            <h1 className="text-[2.8rem]  w-4/6 -mt-2 text-textblack font-bold text-center sm:text-left tracking-tighter">
              And enjoy more for less.
            </h1>
            <div className="text-left">
              <Button className="bg-background text-white my-8" size="lg">
                Apple TV+ for free.6
              </Button>
            </div>
          </div>
          <div className="col-span-1 pt-24">
            <img
              src={appleMusic.src}
              alt="bundleimage"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

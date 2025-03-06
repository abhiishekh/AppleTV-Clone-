import Image from "next/image";
import bundelImage from "@/public/images/bundle.jpg";
import appleone from "@/public/images/appleone.png";
import { Container } from "../Container";
import { Button } from "../button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const BundleSection = () => {
  return (
    <div className="px-8 w-full h-auto mt-28  bg-[#EEEDF0]/60">
      <Container className="max-w-[1500px]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 ">
          <div className="col-span-1 py-24">
            <Image
              src={bundelImage}
              alt="bundleimage"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex  flex-col py-24 items-center ">
            <div className="w-36 h-16 ">
              <Image
                src={appleone}
                alt="appleOne logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-[2.8rem] leading-12 w-full sm:w-4/6 mt-4 text-textblack font-bold text-center tracking-tighter">
              Bundle Apple TV+ with up to five other great services.
            </h1>
            <h1 className="text-[2.8rem]  w-4/6 -mt-2 text-textblack font-bold text-center tracking-tighter">
              And enjoy more for less.
            </h1>

            <Button className="bg-background text-white my-8" size="lg">
              Try Apple One free5
            </Button>
            <Link
              href={""}
              className="flex items-center gap-1 text-blue-400 text-xl"
            >
              Learn more <ChevronRight />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

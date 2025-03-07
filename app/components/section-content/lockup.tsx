import Image from "next/image"
import { Container } from "../Container"
import appleTv from '@/public/images/appleTv.png'
import Products from "./Products"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const Lockup = () =>{
    return (
        <Container className="my-32 w-[87.5%] mx-auto">
        <div className="flex justify-center items-center ">
            <Image src={appleTv} alt="appletv logo" className="object-contain" width={100} height={100}/>
        </div>

        <div className="w-full h-auto my-12 flex justify-center ">
            <h1 className="text-5xl 2xl:text-7xl font-bold text-textblack text-center">Watch Apple TV+ anywhere
            on the Apple TV app.</h1>
        </div>

        <div className="flex justify-center items-center my-12">
            <p className="text-2xl w-full lg:w-1/2 text-center ">Find the Apple TV app on your favorite devices.
            Or watch Apple TV+ online at <span className="text-blue-400">tv.apple.com</span>.</p>

        </div>

        {/* // products list  */}

        <Products/>

        {/* //next section  */}

        <div className="w-full h-auto flex flex-col items-center justify-center ">
            <h1 className="w-full sm:w-1/2 text-4xl 3xl:text-5xl text-textblack font-semibold text-center">See it on your smart TV or streaming device.</h1>
            <Link href={''}>
            <p className="text-sm lg:text-xl mt-8 text-blue-400 font-medium sm:text-blue-400 flex gap-1 items-center">Set up your device <span><ChevronRight/></span></p>
            </Link>
        </div>

       
    </Container>
    )
}
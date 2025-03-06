import Image from "next/image"
import { Container } from "../Container"
import appleTv from '@/public/images/appleTv.png'
import Products from "./Products"

export const Lockup = () =>{
    return (
        <Container className="my-32">
        <div className="flex justify-center items-center ">
            <Image src={appleTv} alt="appletv logo" width={100} height={100}/>
        </div>

        <div className="w-full h-auto my-12 flex justify-center ">
            <h1 className="text-7xl font-bold text-textblack text-center">Watch Apple TV+ anywhere
            on the Apple TV app.</h1>
        </div>

        <div className="flex justify-center items-center my-12">
            <p className="text-2xl w-1/2 text-center">Find the Apple TV app on your favorite devices.
            Or watch Apple TV+ online at <span className="text-blue-400">tv.apple.com</span>.</p>

        </div>

        {/* // products list  */}

        <Products/>
    </Container>
    )
}
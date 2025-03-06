import React from 'react'
import Image, { StaticImageData } from 'next/image'
import {data} from '@/app/section'
import Link from 'next/link';
interface data {
    poster:string | StaticImageData;
    title:string;
    link?:string;
}
const Products = () => {
  return (
    <div className='grid grid-cols-12 my-32 mx-auto   w-[300px] lg:w-[87.5%] xl:w-[930px] '>
        {
            data.map((item: data, index: number) => (
                <div key={index} className='col-span-6 lg:col-span-3 flex flex-col items-center mb-16 gap-4 gap-x-8'>
                    <div className='w-16 xl:w-24 h-16 xl:h-24'>
                    <Image src={item.poster} alt={item.title} className='w-full h-full object-contain ' />
                    </div>
                    <p className='text-textblack text-sm lg:text-xl font-bold text-center'>{item.title}</p>

                    
                    <Link href={''}>
                    <p className='text-blue-400 sm:text-blue-400 text-sm lg:text-xl font-medium text-center hover:underline underline-offset-4 underline-blue-500. flex items-center gap-1'>{item.link}
                      {/* <span> {item.link? <ArrowUpRight/>:''} </span>  */}
                    </p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Products


import {brandsData} from '@/app/brands'
import Image from 'next/image'
import { Container } from '../Container'
export const Brands =()=>{

    return (
        <Container>

        <div className='  mx-auto  w-[300px] sm:w-[87.5%] grid grid-cols-2   sm:flex flex-wrap  gap-20 justify-center '>
        {
            brandsData.map((item, index: number) => (
                <div key={index} className=''>
                    <div className='w-28 xl:w-36 -mt-12 h-28 xl:h-36'>
                    <Image src={item.poster} alt="icon" className='w-full h-full object-contain ' />
                    </div>
                   
                </div>
            ))
        }
    </div>
        </Container>
    )
}
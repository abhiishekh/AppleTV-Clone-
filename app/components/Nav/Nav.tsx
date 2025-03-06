import { Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import { FaApple } from 'react-icons/fa'
import { Container } from '../Container'
import { Button } from '../button'
import { TbMenu } from 'react-icons/tb'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
   <header className='bg-backgroundContrast px-6 text-white  '>
    <Container className='flex items-center min-h-11 justify-between '>

    <Link href="/" className='flex h-11 items-center px-6 -ml-12 sm:-ml-6'><FaApple className='text-xl'/> <span className='sr-only'>Back to homepage</span></Link>

    <div className='md:hidden flex gap-4 sm:gap-8 items-center -mr-6 sm:mr-0'>
      <Search className='w-4 cursor-pointer'/>
      <ShoppingBag className='w-4 cursor-pointer'/>
      <TbMenu className='w-8 cursor-pointer'/>

    </div>

    <div className='hidden md:block '>
      <ul className='flex items-center gap-8 font-light text-gray-300  text-lg'>
        <li>Store</li>
        <li>Mac</li>
        <li>ipad</li>
        <li>iphone</li>
        <li>Watch</li>
        <li>Vison</li>  
        <li>AirPods</li>
        <li>Tv&Home</li>
        <li>Entertainment</li>
        <li>Accessesories</li>
        <li>Support</li>

      </ul>

    </div>
    <div className='hidden md:flex items-center gap-4 sm:gap-8'>

        <ShoppingBag className='w-4 cursor-pointer'/>
      <TbMenu className='w-8 cursor-pointer'/>
    </div>

    </Container>
    </header>



   <div className='bg-backgroundContrast text-white sticky py-2 -top-1 z-20'>
    <Container className='flex items-center min-h-11 justify-between'>
    <p className='text-xl'>Apple TV+ </p>
    <Button >Stream now</Button>
    </Container>
   </div>
    </>
  )
}

export default Nav

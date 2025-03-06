import { Apple } from 'lucide-react'
import React from 'react'
import { FaApple } from 'react-icons/fa'
import { Container } from '../Container'
import { Button } from '../button'

const Nav = () => {
  return (
    <>
   <header className='bg-backgroundContrast p-6 text-white  '>
    <Container className='flex items-center min-h-11'>

    <a href="/" className='flex h-11 items-center px-6 -ml-6'><FaApple className='text-xl'/> <span className='sr-only'>Back to homepage</span></a>
    </Container>
    </header>
   <div className='bg-backgroundContrast text-white sticky -top-1 z-20'>
    <Container className='flex items-center min-h-11 justify-between'>
    <p className='text-xl'>Apple TV+ </p>
    <Button>Stream now</Button>
    </Container>
   </div>
    </>
  )
}

export default Nav

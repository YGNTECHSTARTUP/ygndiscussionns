
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
  } from "@/components/ui/sheet"
  // import ygn from '../assets/images/site-logo.svg'
  // import Link from 'next/link'
  import ham from "../assets/icons/hamburger.svg"
  import Image from 'next/image'
  // import { usePathname } from 'next/navigation'
// import Navcontent from './Navcontent'
// import { SignedOut } from '@clerk/nextjs'
// import { Button } from '@/components/ui/button'
import Logo from './Logo'
import Navcontent from './Navcontent'

const MobNav = () => {

  return (
    <div><Sheet >
    <SheetTrigger asChild>
        <Image 
        src={ham}
        alt="Hamburger Menu"
        width={36}
        height={36}
        className='cursor-pointer invert dark:invert-0 sm:hidden'
        />
    </SheetTrigger>
    <SheetContent side={'left'} className='border-none'>
    <div className='flex justify-center border-b-2 border-muted-foreground'>
      <SheetClose asChild>
        <Logo/>
      {/* <Link className='-ml-5 flex' href={'/'}>
     
          <span className=' font-sans text-3xl  font-extrabold text-primary '>
          Ygn  </span>
          <span className='mt-2 font-sans text-xl font-bold text-popover-foreground'>Discussions</span></Link>
          */}
      </SheetClose>
        
      </div>
      <SheetClose asChild>
      <Navcontent/>
    </SheetClose>
     
    </SheetContent>
    
  </Sheet>
  </div>
  )
}

export default MobNav
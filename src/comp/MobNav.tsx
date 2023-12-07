
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import ygn from '../assets/images/site-logo.svg'
  import Link from 'next/link'
  import ham from "../assets/icons/hamburger.svg"
  import Image from 'next/image'
  // import { usePathname } from 'next/navigation'
// import Navcontent from './Navcontent'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
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
      <Link className='-ml-5 flex' href={'/'}>
        <Image alt="ygn" height={26} width={26} src={ygn} />
          <span className=' font-sans text-3xl  font-extrabold text-primary'>
          Ygn  </span>
          <span className='mt-2 font-sans text-xl font-bold text-popover-foreground'>Discussions</span></Link>
         
      </SheetClose>
        
      </div>
      <SheetClose asChild>
      <Navcontent/>
    </SheetClose>
     <SignedOut>
      
      <SheetClose  asChild >
      
     
        <Link href={'/sign-in'}>
          
          <Button className='ml-3 mt-4 w-80  border-2 border-primary bg-card-foreground px-32 text-muted hover:bg-primary hover:text-popover-foreground' variant='destructive' >Sign In</Button>
          
      </Link>
    
      
      </SheetClose>
      <SheetClose  asChild >
      
     
      <Link href={'/sign-up'}>
        
        <Button className='ml-3 mt-4 w-80  border-2 border-primary bg-card-foreground  text-muted hover:bg-primary hover:text-popover-foreground' variant='destructive' >Sign Up</Button>
        
    </Link>
  
    
    </SheetClose>
      
    
    
     </SignedOut>
    </SheetContent>
    
  </Sheet>
  </div>
  )
}

export default MobNav
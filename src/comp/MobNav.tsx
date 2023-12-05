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
// import Navcontent from './Navcontent'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const MobNav = () => {
  return (
    <div><Sheet >
    <SheetTrigger asChild>
        <Image 
        src={ham}
        alt="Hamburger Menu"
        width={36}
        height={36}
        className='invert dark:invert-0 sm:hidden'
        />
    </SheetTrigger>
    <SheetContent side={'left'} className='border-none'>
    <div className='flex justify-center border-b-2 border-muted-foreground'>
        <Link className='-ml-11 flex' href={'/'}>
        <Image alt="ygn" height={26} width={26} src={ygn} className=' contrast-100'/>
          <span className=' font-sans text-3xl  font-extrabold text-primary'>
          Ygn  </span>
          <span className='mt-2 font-sans text-xl font-bold text-popover-foreground'>Discussions</span></Link>
         
      </div>
      {/* <SheetClose>
      <Navcontent/>
    </SheetClose> */}
     <SignedOut>
      
      <SheetClose  asChild >
      
     
        <Link href={'/sign-in'}>
          
          <Button className='ml-3 mt-4 border-2  border-primary bg-card-foreground  px-32 text-muted hover:bg-primary hover:text-popover-foreground' variant='destructive' >Sign In</Button>
          
      </Link>
    
      
      </SheetClose>
      <SheetClose  asChild >
      
     
      <Link href={'/sign-up'}>
        
        <Button className='ml-3 mt-4 border-2  border-primary bg-card-foreground  px-[124px] text-muted hover:bg-primary hover:text-popover-foreground' variant='destructive' >Sign Up</Button>
        
    </Link>
  
    
    </SheetClose>
      
    
    
     </SignedOut>
    </SheetContent>
    
  </Sheet>
  </div>
  )
}

export default MobNav
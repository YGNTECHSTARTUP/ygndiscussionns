/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ui/toggle'
import { UserButton,} from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import MobNav from './MobNav';
import Image from 'next/image'
import ygn from '../assets/images/site-logo.svg'
import Searchheader from './Searchheader';
// import { Button } from '@/components/ui/button';
const Navbar = () => {
  return (
  <nav className='flex justify-around  h-16 p-2 border-b-2 border-muted-foreground'>
    <ul className='flex justify-start'>
      <li className='p-2'>
        <Link className='flex -ml-11' href={'/'}>
        <Image alt="ygn" height={26} width={26} src={ygn} className=' contrast-100'/>
          <span className=' text-3xl text-primary  font-sans font-extrabold'>
          Ygn  </span>
          <span className='mt-2 text-popover-foreground text-xl font-sans font-bold'>Discussions</span></Link>
      </li>
     
    </ul>
    <div className='hidden mt-2 sm:block '>
      <Searchheader/>
    </div>
    <div className=' flex space-x-4  mt-[5px]' >
    <ModeToggle/>
   <div className=' outline-primary '>
   <UserButton  appearance={{
        baseTheme: dark,
      }} afterSignOutUrl='/'/>
 
   </div>
 <div>
 <MobNav/>
  </div>  
    
   
    </div>

  </nav>
  )
}

export default Navbar
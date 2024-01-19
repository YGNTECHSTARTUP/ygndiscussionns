/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ui/toggle'
import { UserButton,} from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import MobNav from './MobNav';
// import Image from 'next/image'
// import ygn from '../assets/images/site-logo.svg'
import Searchheader from './Searchheader';
import Logo from './Logo';
// import { Button } from '@/components/ui/button';
const Navbar = () => {
  return (
  
  <nav className='flex bg-primary-foreground justify-between  h-16 p-2 border-b-2   border-ring border-b-indigo-400 fixed z-50 w-full sm:px-12  '>
    <ul className='flex justify-start ml-12'>
    <li className='p-2 opacity-100'>
    <Logo/>
      </li>

      {/* 
        <Link className='flex -ml-11 ' href={'/'}>
        <Image alt="ygn" height={26} width={26} src={ygn} className=' contrast-100'/>
          <span className=' text-3xl   font-sans font-extrabold  bg-gradient-to-bl from-gray-900 via-[#7f51c1fc] to-slate-900 bg-clip-text text-transparent '>
          Ygn  </span>
          <span className='mt-2  text-xl font-sans font-extrabold bg-gradient-to-bl from-gray-900 via-[#895cc9fc] to-slate-900 bg-clip-text text-transparent'>Discussions</span></Link>
      </li> */}
     
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
/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ui/toggle'
import { UserButton,} from "@clerk/nextjs";
import { dark } from '@clerk/themes';

// import { Button } from '@/components/ui/button';
const Navbar = () => {
  return (
  <nav className='flex justify-around bg-accent-foreground h-16 p-2'>
    <ul className='flex justify-start'>
      <li className='p-2'>
        <Link href={'/'}>
          <span className='text-3xl text-primary font-sans font-extrabold'>
          Ygn  </span>
          <span className='text-muted text-2xl font-sans font-bold'>Discussions</span></Link>
      </li>
     
    </ul>
    <div className=' flex space-x-4  mt-[5px]' >
    <ModeToggle/>
   <div className=' outline-primary '>
   <UserButton  appearance={{
        baseTheme: dark,
      }} afterSignOutUrl='/'/>
 
   </div>
   
    
   
    </div>

  </nav>
  )
}

export default Navbar
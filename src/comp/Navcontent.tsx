/* eslint-disable tailwindcss/no-custom-classname */
"use client"
import React from 'react'
import { sidebarLinks } from '@/app/constant'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { SheetClose } from '@/components/ui/sheet'
import { SignedOut } from '@clerk/nextjs'


const Navcontent = () => {
  const  pathname  = usePathname()
  
  return (
    <div>
   <ul>
    {

    sidebarLinks.map((link)=>{
      const isActive = (pathname.includes(link.route)&&(pathname.length > 1))||(pathname === link.route)
      console.log(link.imgURL)
      return (
        <>
        <SheetClose asChild key={link.route} >
  <Link
        href={link.route}>
          
       
            <Button className={`${isActive ? "my-3  flex w-60 flex-col bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4 text-primary dark:bg-gradient-to-bl dark:from-gray-900 dark:via-[#300171fc] dark:to-slate-900 dark:text-fuchsia-100 min-[442px]:w-72" : "my-3 w-60 flex-col p-4 dark:bg-primary-foreground  dark:text-fuchsia-100 min-[442px]:w-72"}`} variant='secondary' >
            {
                
                link.label
              }
           
           
            
             
                
            </Button>
          
        </Link>
        
        </SheetClose>
       
      </>
      )
    })}
   </ul>
   <SignedOut>
      
      <SheetClose  asChild >
      
     
        <Link href={'/sign-in'}>
          
          <Button  className='ml-3 mt-4 w-64 border-2  border-primary bg-card-foreground px-32 text-muted hover:bg-card hover:text-primary sm:w-80'  >Sign In</Button>
          
      </Link>
    
      
      </SheetClose>
      <SheetClose  asChild >
      
     
      <Link href={'/sign-up'}>
        
        <Button className='ml-3 mt-4 w-64 border-2  border-primary bg-card-foreground text-muted  hover:bg-card hover:text-primary sm:w-80'  >Sign Up</Button>
        
    </Link>
  
    
    </SheetClose>
      
    
    
     </SignedOut>
    </div>
  )
}

export default Navcontent
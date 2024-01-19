"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/app/constant'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignedOut } from '@clerk/nextjs'
const LeftSidebar = () => {
  const  pathname  = usePathname()
  return (
    <section className=' sticky  left-0 top-16 z-10 h-screen w-1/12    border-r-2  border-ring border-r-indigo-400 bg-primary-foreground ring-regalpurple ring-offset-2 max-sm:hidden lg:w-[14%] '>
    
  
  return (
    <div className='mx-auto mt-20 justify-center'>
   <ul>
    {

    sidebarLinks.map((link)=>{
      const isActive = (pathname.includes(link.route) && (pathname.length === 1)) || (pathname === link.route);

      console.log(link.imgURL)
      return (
        <>
      
  <Link
        href={link.route}>
          
       
            <Button className={`${isActive ? " mx-auto my-3 flex w-[90%] flex-col bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-7  text-primary dark:bg-gradient-to-bl dark:from-gray-900 dark:via-[#300171fc] dark:to-slate-900 dark:text-fuchsia-100 " : " text-regalpurple  mx-auto my-4 flex w-[90%] flex-col  p-7     "}`} variant='ghost' >
            {
                
                link.label
              }
           
           
            
             
                
            </Button>
          
        </Link>
        
       
      </>
      )
    })}
   </ul>
   <SignedOut>
      
      
      
     
        <Link href={'/sign-in'}>
          
          <Button  className='ml-3 mt-48 w-[90%] border-2  border-primary bg-muted p-5  text-regalpurple  hover:bg-card hover:text-primary '  >Sign In</Button>
          
      </Link>
    
      
    
      
     
      <Link href={'/sign-up'}>
        
        <Button className='ml-3 mt-4 w-[90%] border-2 border-primary  bg-card-foreground p-5 text-muted  hover:bg-card hover:text-primary'  >Sign Up</Button>
        
    </Link>
  
    
    
      
    
    
     </SignedOut>
    </div>
  
    </section>
  )
}

export default LeftSidebar
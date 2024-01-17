"use client"
import React from 'react'
import { sidebarLinks } from '@/app/constant'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { SheetClose } from '@/components/ui/sheet'

const Navcontent = () => {
  const  pathname  = usePathname()
  
  return (
    <div>
   <ul>
    {

    sidebarLinks.map((link)=>{
      const isActive = (pathname.includes(link.route)&&(pathname.length > 1))||(pathname === link.route)
      
      return (
        <SheetClose asChild key={link.route} >
  <Link
        href={link.route}>
          
       
            <Button className={`${isActive ? "min-[442px]:w-72 w-60 p-4 flex-col my-3  dark:bg-accent dark:text-accent-foreground" : "w-60 min-[442px]:w-72 p-4 flex-col my-3  dark:bg-muted dark:text-muted-foreground"}`} variant='secondary' >
          
              {
                
              link.label
            }
          
            </Button>
          
        </Link>
        </SheetClose>
      
      )
    })}
   </ul>
    </div>
  )
}

export default Navcontent
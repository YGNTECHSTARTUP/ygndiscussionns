
import React from 'react'
import { sidebarLinks } from '@/app/constant'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { SheetClose } from '@/components/ui/sheet'

const Navcontent = () => {
  return (
    <div>
   <ul>
    {

    sidebarLinks.map((link)=>{
      return (
        <SheetClose asChild key={link.route} >
  <Link
        href={link.route}>
          
       
            <Button className="ml-3 mt-4 w-80 border-2 border-primary bg-card-foreground px-32 text-muted  hover:bg-primary hover:text-popover-foreground active:ring-2 active:ring-primary-foreground " variant='destructive' >
          
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
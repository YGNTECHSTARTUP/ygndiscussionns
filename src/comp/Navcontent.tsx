import React from 'react'
import { sidebarLinks } from '@/app/constant'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Navcontent = () => {
  console.log(sidebarLinks)
  return (
    <div>
   <ul>
    {sidebarLinks.map((link)=>{
      return (
        <Link
        key={link.route}
        href={link.route}>
           <Image alt={link.label} height={20} width={20} src={link.imgURL} />
       
            <Button className='ml-3 mt-4 border-2  border-primary bg-card-foreground  px-32 text-muted hover:bg-primary hover:text-popover-foreground' variant='destructive' >{
              link.label
            }
            </Button>
          
        </Link>
      )
    })}
   </ul>
    </div>
  )
}

export default Navcontent
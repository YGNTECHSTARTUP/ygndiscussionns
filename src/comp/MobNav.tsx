import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import ham from "../assets/icons/hamburger.svg"
  import Image from 'next/image'

const MobNav = () => {
  return (
    <div><Sheet >
    <SheetTrigger asChild>
        <Image 
        src={ham}
        alt="Hamburger Menu"
        width={36}
        height={36}
        className='dark:invert sm:hidden'
        />
    </SheetTrigger>
    <SheetContent side={'left'} className='border-none'>
      <SheetHeader>
        <SheetTitle className='text-primary'>Are you sure absolutely sure?</SheetTitle>
        <SheetDescription className='text-muted-foreground'>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  </div>
  )
}

export default MobNav
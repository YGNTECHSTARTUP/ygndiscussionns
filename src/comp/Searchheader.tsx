import React from 'react'
import { Input } from "@/components/ui/input"

const Searchheader = () => {
  return (
    
<form>   
    <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
    <div className="relative sm:w-[16rem] md:w-[22rem] lg:w-[24rem] xl:w-[26rem] 2xl:w-[32rem]">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex  items-center ps-3">
            <svg className="h-4 w-4 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <Input type="search" id="default-search" className="block  rounded-lg border-2 border-primary bg-muted p-4  ps-10 text-sm text-muted-foreground ring-2 ring-primary-foreground focus:border-primary focus:ring-primary" placeholder="Search..." required>
        </Input>
    </div>
</form>

  )
}

export default Searchheader
import React from 'react'
import { questions , tags } from '@/app/constant'

import { Badge } from '@/components/ui/badge'

const RightSidebar = () => {
  
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className=' sticky  right-0  z-10 flex h-screen w-fit flex-col overflow-y-auto    border-2  border-indigo-400 border-ring bg-primary-foreground ring-regalpurple ring-offset-2 max-sm:hidden lg:w-[100%] '>
<h1 className=' mx-5 mt-28 text-3xl font-extrabold text-regalpurple'>Top questions:</h1>
{
  questions.map((question,index)=>{
    return(
      <div key={index} className=' flex w-full flex-col items-start justify-start rounded-lg bg-primary-foreground p-5'>
        {/* <h1 className='text-xl font-semibold text-primary'>{question.title}</h1> */}
        <p className='font-sans text-sm font-extrabold   text-primary'>{question.title}</p>
      </div>
    )
  })
  
}
<h1 className=' mx-5 my-3 mt-28 text-3xl font-extrabold text-regalpurple'>Popular Tags:</h1>
<ul className='mx-2 grid grid-cols-3 gap-1 gap-y-2'>
  {
    tags.map((tags,index)=>{
      return(
        <li key={index} className='text-sm font-medium text-primary'>
          <Badge>{tags}</Badge>
        </li>
      )
    })
  }
</ul>

    </section>
  )
}

export default RightSidebar
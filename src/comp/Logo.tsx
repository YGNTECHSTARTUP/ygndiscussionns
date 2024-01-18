import React from 'react'
import Link from 'next/link'
const Logo = () => {
  return (
    <div>  
    <Link className='-ml-11 flex ' href={'/'}>
    {/* <Image alt="ygn" height={26} width={26} src={ygn} className=' contrast-100'/> */}
      <span className=' bg-gradient-to-bl   from-gray-900 via-[#7f51c1fc]  to-slate-900 bg-clip-text font-sans text-3xl font-extrabold text-transparent '>
      Ygn  </span>
      <span className='mt-2  bg-gradient-to-bl from-gray-900 via-[#895cc9fc] to-slate-900 bg-clip-text font-sans text-xl font-extrabold text-transparent'>Discussions</span></Link>
 </div>
  )
}

export default Logo
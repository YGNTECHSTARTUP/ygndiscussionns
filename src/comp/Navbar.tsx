/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex  h-20   bg-black'>
        <ul className='flex justify-end'>
            <li  className='text-white text-2xl font-bold p-5'>
              <Link href={'/'}>Home</Link>
            </li>
            <li className='text-white text-2xl font-bold p-5'>
              <Link href={'/about'}>About</Link>
            </li>
            <li className='text-white text-2xl font-bold p-5'>
              <Link href={'/contact'}>Contact</Link></li>
              <li className='text-white text-2xl font-bold p-5'>
              <Link href={'/account'}>Account</Link></li>
              <li className='text-white text-2xl font-bold p-5'>
              <Link href={'/sign-in'}>SignUp</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
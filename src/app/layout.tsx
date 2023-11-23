import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import {GeistMono} from "geist/font/mono"
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/comp/Navbar';
import React from 'react'

import './globals.css'



export const metadata: Metadata = {
  title: 'YgnDiscussions',
  description: 'A community driven platform where you can discuss about anything related to technology and you can gain new insights from the community.',
  icons:'assets/images/site-logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en " className={`${GeistSans.variable} ${GeistMono.variable}`}>

      <body className='overflow-hidden' >
        <Navbar/>
        {children}</body>
    </html>
    </ClerkProvider>
  )
}

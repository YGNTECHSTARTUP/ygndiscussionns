import LeftSidebar from "@/comp/LeftSidebar"
import Navbar from "@/comp/Navbar"
import { ThemeProvider } from "@/components/Theme-Provider"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import React from "react"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     
 
  
  <html lang="en " className={`${GeistSans.variable} ${GeistMono.variable}`}>
  
  <body className='overflow-hidden bg-background' >
    <ThemeProvider  attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange>
    <Navbar/>
    <div>
    <LeftSidebar/>
    </div>
  
    {children}
    </ThemeProvider>
  
    </body>
  </html>
     
    )
  }
  
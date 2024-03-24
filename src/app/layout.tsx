import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationEvents } from '@/components/navigation-events'
import { Suspense } from 'react'
import './globals.css'
import bg from '../assets/wave.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Urban Weather',
  description: 'Simple Next Js weather app.',
  creator : 'Aaron Carvalho'
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={inter.className}        
      >
        <div 
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            backgroundSize : 'cover'
          }}
        >
          {children}
        </div>
      </body>      
    </html>
  )
}
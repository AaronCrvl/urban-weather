import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationEvents } from '@/components/navigation-events'
import { Suspense } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Urban Weather',
  description: 'Simple Next Js weather app.',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Suspense fallback={null}>
          <NavigationEvents />
      </Suspense>
    </html>
  )
}
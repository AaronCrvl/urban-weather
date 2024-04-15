import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import bg from "../../assets/wave-search.svg"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather Search',
  description: 'Simple next js weather application.',
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
          className='mb-10'
        >
          {children}
        </div>
      </body>      
    </html>
  )
}
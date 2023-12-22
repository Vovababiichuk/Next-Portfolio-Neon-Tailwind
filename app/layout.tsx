import type { Metadata } from 'next'
import { Days_One } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'

const inter = Days_One({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Volodymyr | Code_PRO',
  description: 'Frontend & Mobile Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

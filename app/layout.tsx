import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Footer, NavBar } from "../components";
import { Providers } from '@/provider/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextride',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet"/>
       {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      <body className='relative'>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

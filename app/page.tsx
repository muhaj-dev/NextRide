import { Card, Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
        <main className='overflow-hidden'>
           <Hero />
           <div className="flex-center">
             <Card /> 
           </div>
        </main>
  )
}

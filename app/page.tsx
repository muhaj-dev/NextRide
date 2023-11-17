import { Brands, CarCard, Card, CardHow, CustomButton, Hero, Testimonials, WhyChoose } from '@/components'
import Image from 'next/image'
import Head from 'next/head';
import {BsArrowRight } from  "react-icons/bs"
import Link from 'next/link';
export default function Home() {
  const testimonials = [
    {
      name: 'John Doe',
      image: '/Rectangle 26.png', 
      description: 'There are many variations of passages a but Nullam vulputate urna, adipiscing vulputate mauris nisl sagittis et. Quisque id semper est nullam enim leo in nec laoreet.',
      year: 5,
    },

  ];
  const faqs = [
    {
      question: 'What is Next.js?',
      answer: 'Next.js is a popular React framework for building web applications.',
    },
    {
      question: 'How do I get started with Next.js?',
      answer: 'You can start by creating a Next.js project using `create-next-app`.',
    },
    {
      question: 'Is Next.js suitable for SEO?',
      answer: 'Yes, Next.js offers great support for SEO optimization.',
    },
  ];
  return (
    <>
     {/* <Head children={undefined}>
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet"/>
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> 
     </Head> */}
     <main className='overflow-hidden'>
           <Hero />
           <div className="flex-center">
             <Card /> 
           </div>
           {/* <Brands /> */}
           <div className="mx-auto ">
            <div className='flex justify-center items-center flex-col gap-4 my-20'>
              <p className='text-[16px] text-black font-light mt-5'>HOW IT WORK</p>
              <h1 className='block md:hidden 2xl:text-[29px] sm:text-[22px] text-[20px] font-extrabold text-center'>HOW IT WORK</h1>
              <h1 className='hidden md:block 2xl:text-[29px] sm:text-[22px] text-[20px] font-extrabold text-center mb-10'>Rent with following 3 working steps</h1>

              <div className="max-width flex flex-wrap flex-row justify-center items-center gap-10 mt-5">
                 <CardHow backgroundColor="#FFFF"  icon="/location.png" title='Choose location' description='Choose your location and find your best car.' />
                 <CardHow backgroundColor='radial-gradient(115.89% 115.89% at 49.61% 115.89%, #3083FF 0%, #87B5FB 100%)' icon="/calendar-tick.png" title='Pick-up date' description='Select your pick up date and time to book your car.'/>
                 <CardHow backgroundColor="#FFFF" icon="/car.png" title='Book your car' description='Book your car and we will deliver it directly to you.'/>
              </div>

            </div>
              <WhyChoose />
              <div className="flex justify-center items-center flex-col max-width my-20">
              <p className='text-[16px] text-black font-light mt-5'>Popular hire deals</p>
              <h1 className='block md:hidden 2xl:text-[32px] sm:text-[24px] text-[20px] font-extrabold text-center'>Most popular vehicle <br/>hire deals</h1>
              <h1 className='hidden md:block 2xl:text-[32px] sm:text-[24px] text-[20px] font-extrabold mb-4'>Most popular vehicle hire deals</h1>
                <div className=" flex flex-wrap justify-center  items-center  gap-5 mt-10">
                <CarCard imageUrl='/Red Mazda Car - 1180x664 1.png' title='Red Mazda 6 - Elite Estate' year={2013} pricePerDay={4000} />
                <CarCard imageUrl='/Red Mazda Car - 1180x664 1.png' title='Red Mazda 6 - Elite Estate' year={2014} pricePerDay={4000} />
                <CarCard imageUrl='/Red Mazda Car - 1180x664 1.png' title='Red Mazda 6 - Elite Estate' year={2019} pricePerDay={4000} />
                <CarCard imageUrl='/Red Mazda Car - 1180x664 1.png' title='Red Mazda 6 - Elite Estate' year={2022} pricePerDay={4000} />
                <CarCard imageUrl='/Red Mazda Car - 1180x664 1.png' title='Red Mazda 6 - Elite Estate' year={2022} pricePerDay={4000} />
                <CarCard imageUrl='/Red Mazda Car - 1180x664 1.png' title='Red Mazda 6 - Elite Estate' year={2022} pricePerDay={4000} />
                </div>     
               <div className="flex justify-start items-center gap-2 rounded-lg shadow-lg mt-4 p-1">
               <CustomButton 
                  title='Show more'
                  containerStyles=" text-[#1D1E21] "
                />
                  <BsArrowRight />
                </div> 
              </div>
              <div className=" bg-ash py-20">
                <div className='max-width  flex justify-center items-center flex-col mb-64'>
                  <p className='text-[16px] text-black font-light mt-5'>Testimonials</p>
                  <h1 className='2xl:text-[32px] sm:text-[24px] text-[20px] font-extrabold'>What people say about us?</h1>
                    <div className="flex flex-wrap gap-5 mt-5">
                    {/* {testimonials.map((testimonial, index) => (
                      <Testimonials key={index} {...testimonial} />
                    ))} */}

                </div>
                </div>
              </div>
              <div className="py-20">
                <div className="max-width  flex justify-center items-center flex-col mb-64">
                <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
                {/* <FAQ faqs={faqs} /> */}
              </div>

              </div>
           </div>
             
        </main>
    </>
       
  )
}

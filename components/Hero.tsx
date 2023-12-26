"use client";

import Image from "next/image";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Hero = () => {

  const spanStyle = {
    // padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px',
    // maxWidth: '500px',
  }
  
  const slideImages = [
    {
      url: '/heroCar/2021_Toyota_Camry-removebg-preview.png',
    },
    {
      url: '/heroCar/2021_Toyota_Coaster-removebg-preview.png',
    },
    {
      url: '/heroCar/2022_Lexus-removebg-preview.png',
    },
    {
      url: '/heroCar/2022_Range_Rover_Velar-removebg-preview.png',
    },
    {
      url: '/heroCar/2022_Rolls_Royce_Cullinan-removebg-preview.png',
    },
    {
      url: '/heroCar/2022_Toyota_Hiace-removebg-preview.png',
    },
    
  ];

  return (
    <div className="hero">
      <div className=" pt-36 px-6 lg:px-4 max-w-[750px]">
        <div className="hero__title">
           Find, book, and hire vehicle in 
           <p className="text-[#3083FF] w-[120px] sm:w-[160px] xl:w-[180px] pl-2 inline-block flex-col justify-center items-center">
              <span>Easy</span>
             <Image
               src="/Rectangle 16.png"
               alt="logo"
               width={136.068}
               height={6.813}
               className="object-contain -mt-4"
              />
           </p> steps.
        </div>
      

        <p className="hero__subtitle">
           Streamline your vehicle hire experience with our effortless booking process.
        </p>
        {/* <div className="flex flex-wrap justify-start items-center gap-5 mt-2">
                 <Image
                      src="/App Store.png"
                      alt="logo"
                      width={130}
                      height={44}
                      className="object-contain "
                    />
                    <Image
                      src="/Google Play.png"
                      alt="logo"
                      width={130}
                      height={44}
                      className="object-contain"
                    />
                 </div> */}
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
        <div className="">
        <Fade>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
            <Image 
              src={slideImage.url}  
              alt="hero" 
              width={600}
              height={700}
              
              className="object-contain mt-24 mx-auto" 
            />
              {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div> */}
            </div>
          ))} 
        </Fade>
      </div>
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;

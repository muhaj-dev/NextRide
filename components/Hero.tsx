"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  

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
          {/* <Carousel 
          autoPlay
          infiniteLoop
          autoFocus
          showIndicators={false}
          showStatus={false}
          stopOnHover
          showThumbs={false}
          dynamicHeight={true}>
          </Carousel> */}
          <Image src="/hero.png"  alt="hero" fill className="object-contain" />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;

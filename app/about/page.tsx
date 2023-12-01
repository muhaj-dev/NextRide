import Link from "next/link";
import React from "react";
import { FaCar } from "react-icons/fa";
import { MdIndeterminateCheckBox } from "react-icons/md"
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function page() {
  return (
    <div className="py-32 mb-40 max-width text-[1.1rem]">
      <p className="font-bold text-[2rem] text-center">ABOUT US</p>
      <div className="flex gap-4  pt-12 items-start justify-center">
        <div className="basis-[400px] text-center">
          <div className="w-fit mx-auto pb-3 ">
            <MdIndeterminateCheckBox size={50} />
          </div>
          Nextride stands as a technology-powered mobility company based in
          Nigeria, committed to delivering seamless transportation solutions for
          both individuals and businesses across diverse locations.
        </div>

        <div className="basis-[400px] text-center">
          <div className="w-fit mx-auto pb-3 ">
            <FaCar size={50} />
          </div>
          Our vehicle rental service ensures an extensive range of premium
          vehicles, encompassing luxurious cars and buses. These vehicles are
          available for discerning customers seeking rentals and for vehicle
          owners interested in generating income. Additionally, we provide a
          variety of VIP services, including security escorts, bouncers, and
          other security-related offerings.
        </div>
        <div className="basis-[400px] text-center">
        <div className="w-fit mx-auto pb-3 ">
        <VscWorkspaceTrusted size={50}/>
          </div>
          At Nextride, we pride ourselves on being trustworthy, reliable, safe,
          and affordable. Our dedicated team is ever-ready to offer assistance.
          Embark on a journey to discover the distinctive Nextride experience.
        </div>
      </div>
      <p className="font-bold text-[2rem] text-center mt-10">Our Mission</p>
      <p className="my-4 text-center"> 
      To redefine the mobility experience by surpassing and setting new industry
      standards.
        </p> 

        <p className="font-bold text-[2rem] text-center mt-10">Our Vision </p>
      <p className="my-4 text-center"> 
      To become the gold standard in the world of mobility.
        </p> 
      
        <p className="font-bold text-[2rem] text-center mt-10"> CONTACT US</p>
        <div className="w-fit mx-auto">
            <address className="my-4 font-semibold"> 
            Email: <a href='hello.nextride@gmail.com'>
            hello.nextride@gmail.com 
                </a>
            <br />
            Phone number: +234
            809 574 3804
                </address> 

        </div>
    
    </div>
  );
}

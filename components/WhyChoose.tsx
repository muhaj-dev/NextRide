"use client";

import Image from "next/image";

import { ServiceCard } from "../components";
const WhyChoose = () => {
  

  return (
    <div className="bg-ash ">
      <div className="w-[95%] max-w-[1400px] mx-auto py-16">
        <div className="flex justify-center items-center flex-col gap-2 mb-8">
          <p className="text-[22px] text-black font-light mt-5">Why choose us</p>
          <h1 className="block md:hidden 2xl:text-[32px] sm:text-[24px] text-[20px] font-extrabold">
            We offer the best experience<br/> with our hire deals
          </h1>
          <h1 className="hidden md:block 2xl:text-[32px] sm:text-[24px] text-[20px] font-extrabold">
            We offer the best experience with our hire deals
          </h1>
        </div>
        <div className=" flex  flex-wrap flex-row justify-center md:justify-evenly items-center gap-4 mt-5">
                <ServiceCard
                  desc="Seamless commuting"
                  icon="fa-bus"
                  // number="01"
                  text="We guarantee the availability of our vehicles when you need them. Our luxurious vehicles are always ready to ensure your journey is effortless."
                />
                <ServiceCard
                  desc="Affordable Pricing"
                  icon="fa-dollar-sign"
                  // number="02"
                  text="Our commitment to affordability is unwavering, ensuring cost-effective solutions that exceed expectations while maintaining high standards of service and product excellence."
                />
                <ServiceCard
                  icon="fa-user-tie"
                  desc="Smart Drivers"
                  // number="03"
                  text="Our drivers are smart, proactive, and ready to take you to your destination."
                />
                <ServiceCard
                icon="fa-car"
                  desc="Choice of Vehicle"
                  // number="03"
                  text="At Nextride, we value your choices. You have the freedom to select any vehicle that suits your preferences."
                />
                <ServiceCard
                icon="fa-phone"
                  desc="24/7 Customer Service"
                  // number="03"
                  text="We are dedicated to improving our service for you, and we greatly value our clients. Our customer experience agents are always available for your assistance."
                />
                <ServiceCard
                  desc="Safety"
                  icon="fa-shield-alt"
                  // number="03"
                  text="At Nextride, one of our top priorities is your safety. To ensure your peace of mind during your ride, we provide a police escort to watch over you."
                />
              </div>

      </div>
    </div>
    
  


  );
};

export default WhyChoose;

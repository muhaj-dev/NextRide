"use client";

import Image from "next/image";


const WhyChoose = () => {
  

  return (
    <div className="max-width flex flex-col md:flex-row justify-between items-center mt-10 gap-5 md:gap-32">
    <div className="flex-1 mb-6 md:mb-0">
      <Image src="/Content (1).png" alt="hero" width={600} height={300} className="object-contain" />
    </div>
    <div className="mb-36">
      <p className="text-[16px] text-black font-light mt-5">Why choose us</p>
      <h1 className="2xl:text-[32px] sm:text-[24px] text-[20px] font-extrabold">
        We offer the best experience<br/> with our rental deals
      </h1>
      <div className="mt-2">
        <ul>
        <li>
        <div className="flex justify-start items-center gap-5">
            <div className=" bg-white shadow-2xl p-2 rounded-lg">
              <Image src="/wallet.png" width={24} height={24} alt="Icon 1" className="w-6 h-6" />
            </div>
            <div>
            <h3 className="text-[18px] font-semibold">Best price guaranteed</h3>
            <p className="text-gray-600 text-[14px]">Find a lower price? We’ll refund <br/> you 100%  of the difference</p>
            <p className="hidden md:block text-gray-600 text-[14px]">Find a lower price? We’ll refund you 100% of<br/> the difference</p>
            </div>
        </div>
        </li>
        <li>
        <div className="flex justify-start items-center gap-5">
            <div className=" bg-white shadow-2xl p-2 rounded-lg">
              <Image src="/profile.png" width={24} height={24} alt="Icon 1" className="w-6 h-6" />
            </div>
            <div>
            <h3 className="text-[18px] font-semibold">Experience driver</h3>
            <p className="text-gray-600 text-[14px]">Don’t have a driver? Don’t worry,<br/> we have many experienced driver for you.</p>
            <p className="hidden md:block text-gray-600 text-[14px]">Don’t have a driver? Don’t worry, we have many<br/> experienced driver for you.</p>
            </div>
        </div>
        </li>
        <li>
        <div className="flex justify-start items-center gap-5">
            <div className=" bg-white shadow-2xl p-2 rounded-lg">
              <Image src="/bitcoin-refresh.png" width={24} height={24} alt="Icon 1" className="w-6 h-6" />
            </div>
            <div>
            <h3 className="text-[18px] font-semibold">24-hour car delivery</h3>
            <p className="text-gray-600 text-[14px]">Book your car anytime and <br/> we will deliver it directly to you.</p>
            <p className="hidden md:block text-gray-600 text-[14px]">Book your car anytime and we will deliver it<br/> directly to you.</p>
            </div>
        </div>
        </li>
        <li>
        <div className="flex justify-start items-center gap-5">
            <div className="bg-white shadow-2xl p-2 rounded-lg">
              <Image src="/messages-2.png" width={24} height={24} alt="Icon 1" className="w-6 h-6" />
            </div>
            <div>
            <h3 className="text-[18px] font-semibold">24/7 technical support</h3>
            <p className="text-gray-600 text-[14px]">Have a question? Contact Carentall<br/> support anytime when you have problem.</p>
            <p className="hidden md:block text-gray-600 text-[14px]">Have a question? Contact Carentall support<br/> anytime when you have problem.</p>
            </div>
        </div>
        </li>
        </ul>
      </div>
    </div>
  </div>
  


  );
};

export default WhyChoose;

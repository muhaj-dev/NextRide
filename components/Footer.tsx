import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants";

const Footer = () => {
  const
 currentDate = 
new
 
Date
();
  return (
    <footer className='bg-[#1E242D] flex flex-col text-white  mt-5 border-t border-gray-100 relative'>
    <div className="bg-primary-blue w-[80%] md:w-[1160px]  h-[300px] mx-auto flex justify-between items-center rounded-2xl p-10 absolute left-0 right-0 -top-20 ">
                <div className="">
                 <h1 className='text-white 2xl:text-[40px] sm:text-[36px] text-[20px] font-extrabold'>Download Nextride<br/> App for free</h1>
                 <p className='text-[18px] text-gray-200 font-light mt-5'>TFor faster, easier booking and exclusive deals.</p>
                 <div className="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-5 mt-3">
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
                 </div>
                </div>
                <div className="hidden md:block">
                <Image
                      src="/Mockup.png"
                      alt="logo"
                      width={437}
                      height={64}
                      className="object-contain pb-60"
                    />
                </div>
             </div>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 mt-56'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-white'>
          Nextride {currentDate.getFullYear()} <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-white">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-center gap-3 items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 Nextride. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/privacy" className="text-white">
          Privacy & Policy
        </Link>
        <Link href="/terms" className="text-white">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
  )
};

export default Footer;

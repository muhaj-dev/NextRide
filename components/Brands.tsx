"use client"
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Brands = () => {
  return (
    <div className="w-full overflow-hidden mt-8">
      <Marquee speed={40}>
        <Image
          src="/logo (1).png"
          alt="logo"
          width={64}
          height={64}
          className="object-contain  my-5 mx-32"
        />
        <Image
          src="/logo (2).png"
          alt="logo"
          width={64}
          height={64}
          className="object-contain  my-5 mx-32"
        />
        <Image
          src="/logo (3).png"
          alt="logo"
          width={64}
          height={64}
          className="object-contain  my-5 mx-32"
        />
        <Image
          src="/logo (4).png"
          alt="logo"
          width={64}
          height={64}
          className="object-contain  my-5 mx-32"
        />
        <Image
          src="/Mazda.png"
          alt="logo"
          width={64}
          height={64}
          className="object-contain  my-5 mx-32"
        />
        <Image
          src="/Mercedes Benz.png"
          alt="logo"
          width={64}
          height={64}
          className="object-contain  my-5 mx-32"
        />
      </Marquee>
    </div>
  );
};

export default Brands;

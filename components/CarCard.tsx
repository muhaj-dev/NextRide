import Link from "next/link";
import Image from "next/image";
import { CarCardProps } from "../types";
import {BsArrowRight } from  "react-icons/bs"

const CarCard: React.FC<CarCardProps> = ({ imageUrl, title,year,  pricePerDay }: CarCardProps) => {
  return (
    <div className="sm:w-[45%] max-w-[550px] mb-2 bg-white hover:bg-gray-100 rounded-md mx-auto">
    <div className="flex justify-center items-center">
    <Image
          src={imageUrl}
          alt={title}
          width={628}
          height={528}
          objectFit="cover"
          objectPosition="center"
        />
        </div>
      <div className="mb-6 pt-3 pb-6">
        <h4 className="capitalize text-center text-primary-blue font-bold text-2xl tracking-wide mb-4">{title}</h4>
        <div className="flex justify-center mb-4">
          <div className="px-2 flex justify-between items-center">
            <i className="fa text-xl text-primary-blue fa-car mr-1"></i>
            <span className="text-xl text-gray-400 font-medium pl-1">{year}</span>
          </div>
          <div className="px-2 border-l border-r flex justify-between items-center">
            <i className="fa text-xl text-primary-blue fa-cogs mr-1"></i>
            <span className="text-xl text-gray-400 font-medium pl-1">AUTO</span>
          </div>
          {/* <div className="px-2 flex justify-between items-center">
            <i className="fa text-xl text-[#000080] fa-road mr-1"></i>
            <span className="text-xl text-gray-400 font-medium pl-1">25K</span>
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-primary-blue  text-white font-bold py-2 px-4 rounded">#{pricePerDay}/Day</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

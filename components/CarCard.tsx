import Link from "next/link";
import Image from "next/image";
import { CarCardProps } from "../types";
import {BsArrowRight } from  "react-icons/bs"

const CarCard: React.FC<CarCardProps> = ({ imageUrl, title, rating, pricePerDay }: CarCardProps) => {
  return (
    <div className="bg-white flex flex-col items-center shadow-lg rounded-lg overflow-hidden">
      <div className="pb-2/3">
        <Image
          src={imageUrl}
          alt={title}
          width={228}
          height={128}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center mt-2">
          <div className="text-yellow-500">
            {rating}
          </div>
          <span className="text-gray-500 ml-2">({rating} Reviews)</span>
        </div>
        <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600 text-sm">${pricePerDay}/day</p>
       <div className="flex justify-start items-center gap-1 text-primary-blue">  
       <Link href="/rent-now" className="block text-center  text-primary-blue font-medium">
          Rent Now
        </Link>
        <BsArrowRight />
       </div>
        </div>
        
      </div>
    </div>
  );
};

export default CarCard;

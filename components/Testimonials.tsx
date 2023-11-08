import Image from 'next/image';
import React from 'react';

interface TestimonialProps {
  name: string;
  image: string;
  description: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, image, description, rating }) => {
  return (
    <div className="flex justify-start items-center gap-7">
      <div className="w-1/3 pr-4">
        <Image src={image} alt={name} width={364} height={465} />
      </div>
      <div className="w-2/3">
        <p className="text-gray-700 w-[300px] h-[234px]">{description}</p>
        <div className="mt-2">
          <p className="text-gray-600">Rated: {rating}/5</p>
          <p className="text-gray-500">- {name}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
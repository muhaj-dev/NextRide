'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialProps {
  name: string;
  description: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Nura",
    description:
      "I Had a seamless ride with Nextride, even though I had to delay the driver a bit he patiently waited for me and he was very polite and friendly, the car was clean and comfortable which made my trip awesome.",
  },
  {
    name: "Doyin",
    description:
      "Nextride provided a smooth journey. Despite a slight delay on my end, the driver patiently waited, displaying politeness and friendliness. The clean and comfortable car added to the overall awesomeness of my trip.",
  },
  {
    name: "Halimah",
    description:
      "It went well. I did not have a reason to be concerned or worried even the journey was a long one. The driver was polite and careful with his driving.",
  },
  {
    name: "Jamiu",
    description:
      "I had a great time riding with Nextride, The driver arrived on time and he was thoroughly professional throughout the journey. Thank you. Looking forward to using Nextride again :)",
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-[95%] max-w-[1000px] mx-auto mt-20">
      <Slider {...settings}>
        {testimonials.map((comment, index) => (
          <div key={index} className="w-[45%] max-w-[400px] bg-white rounded-[20px] shadow-lg py-5 px-5">
            <p className="text-[1.1rem] ">{comment.description}</p>
            <p className="font-bold mt-2">- {comment.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;

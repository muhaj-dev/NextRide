"use client"
import React from "react";

import { CustomButton } from "../components";
const Card = () => {
  return (
    <div className="bg-white w-[80%] p-4 rounded-lg shadow-2xl -mt-20 mb-5">
      <div className="flex justify-between items-center gap-40">
        <div className="col-span-2  pl-4">
          <h2 className="text-lg font-semibold mt-2">LOCATION</h2>
          <p className="text-gray-600 mt-2">Search your location.</p>
        </div>
        <div className="col-span-2 border-l pl-14">
          <h2 className="text-lg font-semibold mt-2">PICKUP DATE</h2>
          <p className="text-gray-600 mt-2">Tue 15 Feb, 09:0</p>
        </div>
        <div className="col-span-2 border-l pl-14">
          <h2 className="text-lg font-semibold mt-2">RETURN DATE</h2>
          <p className="text-gray-600 mt-2">Thu 16 Feb, 11:00</p>
        </div>
        <div className="col-span-2 border-l pl-4">
          
        <CustomButton
          title="Search"
          containerStyles="bg-primary-blue text-white rounded-lg mt-2 p-5"
        />
        </div>
      </div>
    </div>
  );
};

export default Card;

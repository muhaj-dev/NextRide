"use client"
import { CustomButton } from "../components";

const Card = () => {
  return (
    <div className=" bg-white w-[250px] md:w-[90%] p-4 rounded-lg mt-10 shadow-2xl mb-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
        <div className="w-full border-b md:border-b-0 pb-5 md:w-1/4 pl-4">
          <h2 className="text-lg font-semibold mt-2">LOCATION</h2>
          <p className="text-gray-600 mt-2">Search your location.</p>
        </div>
        <div className="w-full md:w-1/4  border-b md:border-b-0  pb-5 md:border-l pl-4">
          <h2 className="text-lg font-semibold mt-2">PICKUP DATE</h2>
          <p className="text-gray-600 mt-2">Tue 15 Feb, 09:00</p>
        </div>
        <div className="w-full md:w-1/4 border-b md:border-b-0  pb-5 md:border-l pl-4">
          <h2 className="text-lg font-semibold mt-2">RETURN DATE</h2>
          <p className="text-gray-600 mt-2">Thu 16 Feb, 11:00</p>
        </div>
        <div className="w-full md:w-1/4 md:border-l pl-4">
          <CustomButton
            title="Search"
            containerStyles="bg-primary-blue text-white w-[200px] rounded-lg mt-2 p-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

"use client"

import React, { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/navigation'
import 'react-datepicker/dist/react-datepicker.css';
import { CustomButton } from '../components';

interface FormData {
  PickLocation: string;
  DropLocation: string;
  dropOffDate: Date | null;
  returnDate: Date | null;
}

const Card: React.FC = () => {
  const router = useRouter()
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    PickLocation: '',
    DropLocation: '',
    dropOffDate: null,
    returnDate: null,
  });

  // Function to handle input changes
  const handleInputChange = (field: keyof FormData, value: string | Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to handle form submission (simulating a POST request)
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData);
    router.push('/infotransfer')

    // Simulate a POST request to an endpoint
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response data as needed
    //     console.log('Response:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div className="bg-white w-[95%] max-w-[1300px] mx-auto  py-4 px-4 rounded-2xl mt-10 shadow-2xl mb-5">
      <form onSubmit={handleSubmit} className="w- flex flex-wrap justify-between  items-center gap-4">
        <div className=" px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Pick Location</h2>
          <input
            type="text"
            value={formData.PickLocation}
            onChange={(e) => handleInputChange('PickLocation', e.target.value)}
            placeholder="Search your location"
            className=" mt-2 w-full focus:outline-none"
            required
          />
        </div>
        <div className=" px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Drop off Location</h2>
          <input
            type="text"
            value={formData.DropLocation}
            onChange={(e) => handleInputChange('DropLocation', e.target.value)}
            placeholder="Search your location"
            className=" mt-2 w-full focus:outline-none"
            required
          />
        </div>
      
        <div className="px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Drop Off Date</h2>
          <DatePicker
            selected={formData.dropOffDate}
            onChange={(date: Date | null) => handleInputChange('dropOffDate', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="Tue 15 Feb, 09:00"
            className=" mt-2 w-full focus:outline-none"
            required
          />
        </div>
        <div className="px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Return Date</h2>
          <DatePicker
            selected={formData.returnDate}
            onChange={(date: Date | null) => handleInputChange('returnDate', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="Tue 16 Feb, 09:00"
            className=" mt-2 w-full focus:outline-none"
            required
          />
        </div>
        <div className="w-full lg:w-[17%] ">
          {/* <CustomButton
            title="Proceed"
            containerStyles="bg-primary-blue text-white w-[160px] rounded-lg mt-2 p-4"
            handleClick={handleSubmit}
          /> */}
          <button
            type='submit'
            className='w-full   bg-primary-blue text-white p-4 md:p-6 rounded-md hover:bg-opacity-80'
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;

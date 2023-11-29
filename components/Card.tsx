"use client"

import React, { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/navigation'
import 'react-datepicker/dist/react-datepicker.css';
import { CustomButton } from '../components';
import axios from 'axios';

interface FormData {
  PickLocation: string;
  DropOffLocation: string;
  DropOffDate: Date | null;
  PickUpDate: Date | null;
}

const Card: React.FC = () => {
  const router = useRouter()
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    PickLocation: '',
    DropOffLocation: '',
    DropOffDate: null,
    PickUpDate: null,
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
    const formattedFormData = {
      ...formData,
      DropOffDate: formData.DropOffDate?.toLocaleString('en-US'),
      PickUpDate: formData.PickUpDate?.toLocaleString('en-US'),
    };
  
    // Log the formatted data to the console
    console.log(formattedFormData);
  
    // Post data to the endpoint
    axios.post('https://sheet.best/api/sheets/0a9f452e-3857-4025-95f6-611386ff541c', formattedFormData)
      .then(response => {
        console.log("Success:", response);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  
    // Simulate a POST request to an endpoint
//     fetch('https://script.google.com/macros/s/AKfycbypl8_dnWNp_RYlPLBFjsMWiVig6oCLU8fU3cW6cqXyNvgVE8mI2EeQ7yvxHQE4ei7w/exec', {
//       method: 'POST',
//       // headers: {
//       //   'Content-Type': 'application/json',
//       // },
//       body: JSON.stringify(formData),
//     // })
//     headers: {
//       'Content-Type': 'text/plain;charset=utf-8',
//   }
// }).then(response => {
//   console.log("success:", response);
// }).catch(err => {
//   console.log("Error:" + err);
// });
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
            placeholder="PickLocation"
            className=" mt-2 w-full focus:outline-none"
            required
          />
        </div>
        <div className=" px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Drop off Location</h2>
          <input
            type="text"
            value={formData.DropOffLocation}
            onChange={(e) => handleInputChange('DropOffLocation', e.target.value)}
            placeholder="DropOffLocation"
            className=" mt-2 w-full focus:outline-none"
            required
          />
        </div>
      
        <div className="px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Pick up Date</h2>
          <DatePicker
            selected={formData.PickUpDate}
            onChange={(date: Date | null) => handleInputChange('PickUpDate', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="PickUpDate"
            className=" mt-2 w-full bg-red-500  border-2 focus:outline-none"
            required
          />
        </div>
        <div className="px-3 py-2 w-full sm:w-[45%] lg:w-[17%] border-2 rounded-2xl">
          <h2 className="text-md font-semibold mt-2">Drop Off Date</h2>
          <DatePicker
            selected={formData.DropOffDate}
            onChange={(date: Date | null) => handleInputChange('DropOffDate', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="DropOffDate"
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

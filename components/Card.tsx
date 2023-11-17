"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomButton } from '../components';

interface FormData {
  location: string;
  dropOffDate: Date | null;
  returnDate: Date | null;
}

const Card: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    location: '',
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
  const handleSubmit = () => {
    console.log(formData);

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
    <div className="bg-white w-[100%] md:w-[95%] py-2 px-4 rounded-3xl mt-10 shadow-2xl mb-5">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-6">
        <div className="w-full pb-5 w[45%] md:w-[160px] max-w-[170px] pl-0">
          <h2 className="text-md font-semibold mt-2">Pick Location</h2>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="Search your location"
            className="border p-2 mt-2 w-full"
          />
        </div>
        <div className="w-full pb-5 w[45%] md:w-[160px] max-w-[170px] pl-0">
          <h2 className="text-md font-semibold mt-2">Drop off Location</h2>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="Search your location"
            className="border p-2 mt-2 w-full"
          />
        </div>
      
        <div className="w-full w[45%] md:w-[160px] max-w-[170px] pb-5  pl-0">
          <h2 className="text-md font-semibold mt-2">Drop Off Date</h2>
          <DatePicker
            selected={formData.dropOffDate}
            onChange={(date: Date | null) => handleInputChange('dropOffDate', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="Tue 15 Feb, 09:00"
            className="border p-2 mt-2 w-full"
          />
        </div>
        <div className="w-full w[45%] md:w-[160px] max-w-[170px]  pb-5 pl-0">
          <h2 className="text-md font-semibold mt-2">Return Date</h2>
          <DatePicker
            selected={formData.returnDate}
            onChange={(date: Date | null) => handleInputChange('returnDate', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="Tue 16 Feb, 09:00"
            className="border p-2 mt-2 w-full"
          />
        </div>
        <div className="w-full w[45%] md:w-[160px] max-w-[170px] md:border-l pl-0">
          <CustomButton
            title="Proceed"
            containerStyles="bg-primary-blue text-white w-[160px] rounded-lg mt-2 p-4"
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

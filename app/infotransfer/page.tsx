'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  agreeToTerms: boolean;
}

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    agreeToTerms: false,
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ): void => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (): void => {
    setFormData((prevData) => ({
      ...prevData,
      agreeToTerms: !prevData.agreeToTerms,
    }));
  };

 const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();

  // Check if all required fields have a value
  const isFormValid = Object.values(formData).every((value) => Boolean(value));

  if (isFormValid) {
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  } else {
    console.log('Please fill in all required fields.');
  }
};

  return (
    <div className='py-32'>
      <div className='mb-52 w-[95%] max-w-[700px] mx-auto py-4 px-5 border-2 rounded-3xl'>
        <p className='text-center font-semibold text-4xl mb-4'>Contact Information</p>
        <p className='text-center text-gray-600'>
          Please provide your contact information to enable us to complete your request
        </p>

        <form onSubmit={handleSubmit} className='mt-5'>
          <div className='mb-4'>
            {/* <label htmlFor='firstName' className='block  font-medium text-gray-700'>
              First Name
            </label> */}
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className='mt-1 p-2 border rounded-md w-full'
              required
            />
          </div>

          <div className='mb-4'>
            {/* <label htmlFor='lastName' className='block  font-medium text-gray-700'>
              Last Name
            </label> */}
            <input
              type='text'
              placeholder='Last Name'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className='mt-1 p-2 border rounded-md w-full'
              required
            />
          </div>

          <div className='mb-4'>
            {/* <label htmlFor='phoneNumber' className='block  font-medium text-gray-700'>
              Phone Number
            </label> */}
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Phone Number'
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className='mt-1 p-2 border rounded-md w-full'
              required
            />
          </div>

          <div className='mb-4'>
            {/* <label htmlFor='email' className='block  font-medium text-gray-700'>
              Email Address
            </label> */}
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className='mt-1 p-2 border rounded-md w-full'
              required
            />
          </div>

          <div className='mb-4'>
            <input
              type='checkbox'
              id='agreeToTerms'
              name='agreeToTerms'
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              className='mr-2'
              required
            />
            <label htmlFor='agreeToTerms' className=' text-gray-700 text-sm'>
              I agree to Terms of use & Privacy Policy
            </label>
          </div>

          <button
            type='submit'
            className='w-full my-3 bg-primary-blue text-white p-3 rounded-md hover:bg-opacity-80'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

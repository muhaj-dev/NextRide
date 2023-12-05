'use client'

import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import { useToast } from '@chakra-ui/react'
import { redirect } from 'next/navigation';

interface InfoContactProps {
  formattedFormData: {
    PickLocation: string;
    DropOffLocation: string;
    DropOffDate: Date | null;
    PickUpDate: Date | null;
  };
}

const InfoContact: React.FC<InfoContactProps> = ({ formattedFormData }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast()
  // const router = useRouter();

  useEffect(() => {
    // Update the content of the hidden div with sanitized HTML
    const location = `Pickup Location: "${formattedFormData.PickLocation}", Drop Off Location: "${formattedFormData.DropOffLocation}", Pick Up Date: "${formattedFormData.PickUpDate}", Drop Off Date: "${formattedFormData.DropOffDate}"`;
    const sanitizedLocation = DOMPurify.sanitize(location);

    if (formRef.current) {
      formRef.current['message'].value = sanitizedLocation;
    }
  }, [formattedFormData]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_78cuh12',
          'template_614z8pv', // Replace with your template ID
          formRef.current,
          '0WadDAr_uJOc7X1_I' // Replace with your public key
        )
        .then((result) => {
          console.log(result.text);
          console.log('message sent')
          
          toast({
            position: 'top-right',
            title: 'Ride Booked.',
            description: "Your ride has been booked.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
    // redirect('/');

  };

  return (
    <div className="pt-12">
      <div className="mb-52 w-[95%] max-w-[700px] mx-auto py-4 px-5 border-2 rounded-3xl">
        <p className="text-center font-semibold text-4xl mb-4">
          Contact Information
        </p>
        <p className="text-center text-gray-600">
          Please provide your contact information to enable us to complete your
          request
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="mt-5">
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          {/* Hidden field for the message */}
          <input type="hidden" name="message" />

          <button
            type="submit"
            className="w-full my-3 bg-primary-blue text-white p-3 rounded-md hover:bg-opacity-80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoContact;

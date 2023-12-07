"use client";

import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CarType({ params }: { params: { cartype: string } }) {
  const id = params.cartype;
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast();

  const redirect = () => {
    onClose();
    router.push("/");
  };

  useEffect(() => {
    // Update the content of the hidden div with sanitized HTML
    const location = `Bus Type: ${id}`;
    const sanitizedLocation = DOMPurify.sanitize(location);

    if (formRef.current) {
      formRef.current["message"].value = sanitizedLocation;
    }
  }, [id]);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_78cuh12",
          "template_614z8pv", // Replace with your template ID
          formRef.current,
          "0WadDAr_uJOc7X1_I" // Replace with your public key
        )
        .then((result) => {
          // console.log(result.text);
          // console.log('message sent')
          onOpen();
        })
        .catch((error) => {
          toast({
            position: "top-right",
            title: "Unable to book Vehicle.",
            description: "Your vehicle has failed to booked.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          console.log(error.text);
        });
    }
  };

  return (
    <div className="pt-32">
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

        <Modal
          closeOnOverlayClick={false}
          isCentered
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody pb={6} mt={"4rem"} textAlign={"center"}>
              <FaRegCheckCircle
                size={120}
                className="text-primary-blue mx-auto"
              />
              <p className="mt-12 mb-3 font-bold text-xl ">Request recieved</p>
              <p className="w-[90%] max-w-[320px] mx-auto">
                Your request has been recieved. We will reach out to you shortly
                to process your request.
              </p>

              <Link href="/" className="text-blue-500">
                Redirect to home page
              </Link>
            </ModalBody>

            <ModalFooter className=" w-[100%] mx-auto mb-5">
              <button
                className="bg-primary-blue w-full text-white font-bold text-xl py-4 rounded-2xl"
                onClick={redirect}
              >
                Done
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

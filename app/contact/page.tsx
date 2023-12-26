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
import { FaRegCheckCircle, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Link from "next/link";
import { useRouter } from "next/navigation";


const ContactUs = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formRef = useRef<HTMLFormElement | null>(null);
  const toast = useToast();

  const redirect = () => {
    onClose();
    // window.location.reload();
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log("Form Data:", formData);
  
      emailjs
        .sendForm(
          "service_78cuh12",
          "template_x4amgic",
          formRef.current,
          "0WadDAr_uJOc7X1_I"
        )
        .then((result) => {
          console.log(result.text);
          onOpen();
        })
        .catch((error) => {
          toast({
            position: "top-right",
            title: "Unable to send your message",
            description: "Failed to send your message",
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
      <div className="flex justify-between items-start mb-52 w-[95%] mx-auto">
        <div className="basis-[48%]">
          <p className="font-semibold text-4xl mb-5">Contact Us</p>
          <p className=" mb-4 ">
            Fill up the form and get a response fro, our tean within 24 hours
          </p>
          <p className="flex gap-3 items-center "><FaPhoneAlt /> +234 809 574 3804</p>
          <p className="flex gap-3 items-center my-4 "><MdEmail /> hello.nextride@gmail.com</p>
          <p className="flex gap-3 items-center  "><FaLocationDot /> Lagos, Nigeria</p>
          <div className="mt-5">
            <Link href='https://www.instagram.com/nextride.ng?igsh=OGQ5ZDc2ODk2ZA=='>
                <FaInstagram size={25}/>
            </Link>

          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="basis-[48%] py-7 px-5 border-2 rounded-3xl"
        >
          <div className="mb-4">
            <input
              type="text"
              name="Name"
              placeholder="Name"
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
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Enter your message"
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <button
            type="submit"
            value="Send"
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

              <button onClick={redirect} className="text-blue-500">
                Redirect to home page
              </button>
            </ModalBody>

            <ModalFooter className=" w-[100%] mx-auto mb-5">
              <button
                className="bg-primary-blue w-full text-white font-bold text-xl py-4 rounded-2xl"
                // onClick={redirect}
              >
                Done
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ContactUs;

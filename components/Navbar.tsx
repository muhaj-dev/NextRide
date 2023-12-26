"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full  z-10 fixed bg-white">
      <nav className="max-width flex justify-between items-center  py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo1.svg"
            alt="logo"
            width={118}
            height={118}
            className="w-[150px] h-[50px] "
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden flex justify-start mt-14 items-center flex-col space-y-7 text-2xl bg-white p-4 absolute top-16 left-0 w-full h-screen`}
        >
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              router.push("/");
            }}
            className="text-black text-left hover:text-primary-blue w-full transition-all font-bold"
          >
            Become a Host
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              router.push("/about");
            }}
            className="text-black text-left hover:text-primary-blue w-full transition-all font-bold"
          >
            About Us
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              router.push("/#service");
            }}
            className="text-black text-left hover:text-primary-blue w-full transition-all font-bold"
          >
            Our Services
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              router.push("/#faq");
            }}
            className="text-black text-left hover:text-primary-blue w-full transition-all font-bold"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              router.push("/contact");
            }}
            className="text-black text-left hover:text-primary-blue w-full transition-all font-bold"
          >
            Contact Us
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-5">
          <Link
            href="/"
            className="text-black hover:text-primary-blue font-bold"
          >
            Become a Host
          </Link>
          <Link
            href="/about"
            className="text-black hover:text-primary-blue font-bold"
          >
            About us
          </Link>
          <Link
            href="#service"
            className="text-black hover:text-primary-blue font-bold"
          >
            Our Services
          </Link>
          <Link
            href="#faq"
            className="text-black hover:text-primary-blue font-bold"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-primary-blue font-bold"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

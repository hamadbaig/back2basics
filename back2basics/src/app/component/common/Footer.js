"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  const whatsappNumber = "8527862446";
  return (
    <footer className="bg-[#63BF6D] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Logo and Trademark Section */}
        <div className="footer-section mb-6 md:mb-0 flex-grow md:border-r border-white-600 pr-4">
          <Image
            src="/footerrm.png"
            alt="Back 2 Basics Elements Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Navigation Links */}
        <div className="footer-section flex flex-col items-center space-y-2 mb-6 md:mb-0 flex-grow md:border-r border-white-600 px-4">
          <Link href="/Innovation">Innovation</Link>
          <Link href="/Product">Products</Link>
          <Link href="/Blog">Blogs</Link>
          <Link href="/Contact">Contact</Link>
        </div>

        <div className="footer-section flex flex-col items-center space-y-2 mb-6 md:mb-0 flex-grow md:border-r border-white-600 px-4">
          <Link href="/AboutUs">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Become a Supplier</Link>
          <Link href="#">Corporate Policies</Link>
        </div>

        {/* Contact Information */}
        <div className="footer-section flex flex-col items-center space-y-2 mb-6 md:mb-0 flex-grow md:border-r border-white-600 px-4">
          <h2 className="text-xl mb-4">Connect Us</h2>
          <div className="flex items-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-[3rem] text-blue-600" />
            </a>
          </div>
          <p>info@b2b-recycle.com</p>
          <p>+918527862446</p>
        </div>
      </div>
    </footer>
  );
}

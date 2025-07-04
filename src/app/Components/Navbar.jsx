"use client";
import React, { useState } from "react";
import Image from "next/image";
import Share from "../../Assets/export.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#EBE7FF] shadow px-6 py-4 section">
      <div className=" mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-[#8873EF] font-[lato] font-bold text-[20px]"
        >
          Dr. Serena Blake
        </a>

        <ul className="hidden md:flex font-[lato] gap-[20px] text-[14px] text-[#757575] font-bold">
          <li className="hover:text-[#8873EF] cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-[#8873EF] cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#8873EF] cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
          <li className="hover:text-[#8873EF] cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#8873EF] cursor-pointer">
            <a href="#faq">Faq</a>
          </li>
        </ul>

        <a
          href="/contact"
          className="hidden md:flex gap-[5px] font-[lato] text-[#8873EF] underline text-[14px] font-bold items-center"
        >
          Let's Talk{" "}
          <Image src={Share} alt="share icon" width={16} height={16} />
        </a>
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#8873EF]" />
          ) : (
            <Menu className="h-6 w-6 text-[#8873EF]" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-[#EBE7FF] rounded-md px-4 py-3 shadow-inner">
          <ul className="flex flex-col gap-4 font-[lato] text-[14px] text-[#757575] font-bold">
            <li className="hover:text-[#8873EF]">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-[#8873EF]">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-[#8873EF]">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-[#8873EF]">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#8873EF]">
              <a href="#faq">Faq</a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex gap-[5px] text-[#8873EF] underline items-center"
              >
                Let's Talk{" "}
                <Image src={Share} alt="share icon" width={16} height={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

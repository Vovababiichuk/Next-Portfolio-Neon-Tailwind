import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[1200] px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] max-xl:flex-wrap">
        <Link href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/nick.svg"
            alt="logo"
            width={300}
            height={300}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 uppercase"></span>
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-[18px]">
            <Link
              href="#about"
              className="cursor-pointer uppercase hover:text-primary transition duration-300 ease-in-out">
              About
            </Link>
            <Link
              href="#skills"
              className="cursor-pointer uppercase hover:text-primary transition duration-300 ease-in-out">
              Skills
            </Link>
            <Link
              href="#projects"
              className="cursor-pointer uppercase hover:text-primary transition duration-300 ease-in-out">
              Projects
            </Link>
          </div>
        </div>
        <div>
          <span className="text-white text-[20px]">
            <Phone size={20} className="inline-block mr-2" />
            +38 (068) 025 3147
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

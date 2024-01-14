'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import MobileNav from '../sub/MobileNav';

const links = [
  {
    path: 'about',
    name: 'About',
    offset: -10,
  },
  {
    path: 'skills',
    name: 'Skills',
    offset: -10,
  },
  {
    path: 'projects',
    name: 'Projects',
    offset: 0,
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-[68px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[1200] px-4">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] max-xl:flex-wrap">
        {/* Logo */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo-logo.svg"
            alt="logo"
            width={55}
            height={55}
            className="cursor-pointer hover:animate-slowspin mr-4"
          />
          <Image
            src="/nick.svg"
            alt="nick"
            width={280}
            height={280}
            className="cursor-pointer hover:animate-slowspin max-sm:hidden"
          />
        </Link>
        {/* Links */}
        <nav className="w-[490px] h-full flex flex-row items-center justify-between md:mr-20 max-lg:hidden">
          <ul className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-[18px]">
            {links.map((link) => {
              return (
                <li key={link.path}>
                  <ScrollLink
                    activeClass="active"
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    className="cursor-pointer uppercase hover:text-primary transition duration-300 ease-in-out">
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Phone */}
        <div className="max-xl:hidden">
          <span className="text-white text-[20px]">
            <Phone size={20} className="inline-block mr-2" />
            +38 (068) 025 3147
          </span>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden text-white mt-[-14px]">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

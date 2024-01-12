'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { GithubIcon, Linkedin } from 'lucide-react';
import { PiTelegramLogo } from 'react-icons/pi';
import { useState } from 'react';
const links = [
  {
    path: 'home',
    name: 'Home',
    offset: 0,
  },
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

const MobileNav = () => {
  const [close, setClose] = useState(false);

  const handleCloseMenu = () => {
    setClose(!close);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="group flex flex-col gap-y-2 cursor-pointer xl:hidden group items-end">
          <div className="w-7 h-[2px] bg-white transition-all"></div>
          <div className="w-5 group-hover:w-7 h-[2px] bg-white transition-all"></div>
          <div className="w-7 h-[2px] bg-white transition-all"></div>
        </div>
      </SheetTrigger>
      <SheetContent className="z-[3000] bg-[#0c081e] ">
        <SheetHeader>
          <SheetTitle>
            <Link href="#home" className="h-auto w-auto flex flex-row items-center justify-center">
              <Image
                // src="/nick.svg"
                src="/logo6.svg"
                alt="logo"
                // width={254}
                // height={254}
                width={80}
                height={80}
                className="cursor-pointer hover:animate-slowspin"
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="text-[#b49bff] ">
            <nav className="pt-16">
              <ul className="flex flex-col items-center justify-center gap-y-6 text-[22px]">
                {links.map((link) => {
                  return (
                    <>
                      <ScrollLink
                        activeClass="active"
                        to={link.path}
                        spy={true}
                        smooth={true}
                        offset={link.offset}
                        duration={500}
                        className="cursor-pointer uppercase hover:text-primary transition duration-100 ease-in-out w-full">
                        <li
                          onClick={handleCloseMenu}
                          key={link.path}
                          className="border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[20px] rounded-full w-full text-center hover:bg-[#18054e61] hover:cursor-pointer transition duration-300 ease-in-out">
                          {link.name}
                        </li>
                      </ScrollLink>
                    </>
                  );
                })}
              </ul>
            </nav>
            {/* social */}
            <div className="flex items-center gap-3 justify-center pt-16">
              <Link
                href="https://github.com/Vovababiichuk"
                target="_blank"
                className="bg-[#27233a] bg-opacity-50 p-[6px] rounded-lg border border-[1px] border-gray-400/20 hover:bg-[#27233a] duration-300 ease-in-out">
                <GithubIcon className="text-white w-10 h-10 cursor-pointer" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/frontend-pro-volodymyr-059377298"
                target="_blank"
                className="bg-[#27233a] bg-opacity-50 p-[6px] rounded-lg border border-[1px] border-gray-400/20 hover:bg-[#27233a] duration-300 ease-in-out">
                <Linkedin className="text-white w-10 h-10 cursor-pointer" />
              </Link>
              <Link
                href="https://t.me/volodymyrbabiichuk"
                target="_blank"
                className="bg-[#27233a] bg-opacity-50 p-[6px] rounded-lg border border-[1px] border-gray-400/20 hover:bg-[#27233a] duration-300 ease-in-out">
                <PiTelegramLogo className="text-white w-10 h-10 cursor-pointer" />
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

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

const MobileNav = () => {
  return (
    <Sheet >
      <SheetTrigger>
        <div className="group flex flex-col gap-y-2 cursor-pointer xl:hidden group items-end">
          <div className="w-7 h-[2px] bg-white transition-all"></div>
          <div className="w-5 group-hover:w-7 h-[2px] bg-white transition-all"></div>
          <div className="w-7 h-[2px] bg-white transition-all"></div>
        </div>
      </SheetTrigger>
      <SheetContent className="z-[3000] bg-[#0a071b] ">
        <SheetHeader>
          <SheetTitle>
            <Link href="#home" className="h-auto w-auto flex flex-row items-center">
              <Image
                src="/nick.svg"
                alt="logo"
                width={240}
                height={240}
                className="cursor-pointer hover:animate-slowspin"
              />
            </Link>
          </SheetTitle>
          <SheetDescription className="text-[#b49bff] ">
            <nav className='pt-16'>
              <ul className="flex flex-col items-center justify-center gap-y-6 text-[20px]">
                {links.map((link) => {
                  return (
                    <li key={link.path} className='border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[12px] rounded-full w-full text-center'>
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

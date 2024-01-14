import React from 'react';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, Linkedin } from 'lucide-react';
import { PiTelegramLogo } from 'react-icons/pi';

const FooterSection = () => {
  return (
    <div className="container">
      <div className="relative w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50 max-sm:mt-[-80px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-between flex-wrap mb-16">

            <div className="min-w-[200px] h-auto flex flex-col items-center justify-center max-sm:mb-8">
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
            </div>

            <div className="flex items-center gap-4 max-sm:m-auto">
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

            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start max-sm:hidden">
              <div className="flex items-center justify-between text-[18px] gap-6">
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
          </div>

          <div className="mb-[20px] text-[15px] text-center text-gray-400 max-sm:mt-[-30px]">
            &copy; Volodymyr | Code_Pro 2024 Inc. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

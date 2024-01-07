'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { ExternalLink, GithubIcon, Linkedin } from 'lucide-react';
import { PiTelegramLogo } from 'react-icons/pi';
import Link from 'next/link';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center pl-20 mt-32 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[80px] mb-6">
              Hello, I&apos;m{' '}
            </p>
            <p className="text-8xl h-[180px]">
              <TypeAnimation
                sequence={['Frontend Developer', 1000, 'Mobile Developer', 1000, 'Graphic Designer', 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
          </div>

          {/* <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              the best{' '}
            </span>
            project exprience
          </span> */}
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-3xl text-gray-400 my-5 max-w-[600px]">
          Providing the best project exprience
        </motion.p>
        <motion.div variants={slideInFromLeft(1)}>
          <div className="flex items-center gap-10">
            <a
              href="https://drive.google.com/file/d/1nYn6N9FcxaJZHT8dgfAJ94hA2gVoasjr/view?usp=drive_link"
              target="_blank"
              className="py-3 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-2xl transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-2">
                <span>Resume</span>
                <span>
                  <ExternalLink />
                </span>
              </div>
            </a>
            <div className="flex items-center gap-2">
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
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center">
        <Image src="/mainIconsdark.svg" alt="work icons" height={600} width={600} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft } from '@/utils/motion';
import Image from 'next/image';
import { SparklesIcon } from '@heroicons/react/24/solid';

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import { ChevronsDown } from 'lucide-react';

const Skillssection = () => {
  return (
    <section>
      <div
        id="skills"
        className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
        <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
          <div className="w-full h-auto flex flex-col items-center justify-center mt-10">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box-title opacity-[0.9] mb-10 px-[100px]">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
              <h1 className="Welcome-text text-[66px] mb-2">My Skills</h1>
            </motion.div>
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="mt-10 text-[46px] text-white font-medium mt-[10px] text-center mb-[15px] relative">
              Making{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">
                apps
              </span>{' '}
              with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">
                modern
              </span>{' '}
              technologies


              <div className='absolute top-28 left-[45%]  animate-pulse'>
                <ChevronsDown size={50} className="text-[#b49bff] w-20 h-20" />
              </div>

            </motion.div>
          </div>
        </div>

        <div className="w-full flex items-start justify-center absolute">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-auto"
            src="/encryption.webm"
          />
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mt-[-100px]"
        style={{ transform: 'scale(0.9' }}>
        {/* <SkillText /> */}

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skillssection;

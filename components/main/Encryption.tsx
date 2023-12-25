'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft } from '@/utils/motion';
import Image from 'next/image';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Encryption = () => {
  return (
    <section>
      <div
        id="skills"
        className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
        {/* <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '}
            &{' '}
          </span>
          Security
        </motion.div>
      </div> */}

        <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
          {/* <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div> */}

          <div className="w-full h-auto flex flex-col items-center justify-center mt-10">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box-title opacity-[0.9] mb-10 px-[100px]">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
              <h1 className="Welcome-text text-[66px] mb-2">Skills</h1>
            </motion.div>
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="mt-10 text-[46px] text-white font-medium mt-[10px] text-center mb-[15px] ">
              Making{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">
                apps
              </span>{' '}
              with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">
                modern
              </span>{' '}
              technologies
            </motion.div>

            {/* <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
        Never miss a task, deadline or idea
      </motion.div> */}
          </div>
        </div>
        {/* <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div> */}

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
    </section>
  );
};

export default Encryption;

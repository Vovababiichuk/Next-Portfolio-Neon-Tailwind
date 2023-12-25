'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-10">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box-title h-[58px] opacity-[0.9] mb-10 py-4 px-24">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
        <h1 className="Welcome-text text-[66px] mb-2">Skills</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-10 text-[46px] text-white font-medium mt-[10px] text-center mb-[15px] ">
        Making <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">apps</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">modern</span> technologies
      </motion.div>
      {/* <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
        Never miss a task, deadline or idea
      </motion.div> */}
    </div>
  );
};

export default SkillText;

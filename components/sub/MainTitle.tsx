import React from 'react';
import { ChevronsDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideInFromTop, slideInFromLeft } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

type IMainTitle = {
  title: string;
  subTitleType: 'about' | 'skills' | 'projects';
};

const AboutTitle = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="mt-10 text-[40px] max-sm:text-[26px] text-white font-medium mt-[10px] max-sm:mt-[-10px] text-center mb-[15px] max-sm:mb-[44px] relative max-sm:w-[320px]">
      <div className="text-gray-400">
        Building{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] max-sm:text-[26px] mb-6 max-sm:text-gray-400">
          apps
        </span>{' '}
        with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] max-sm:text-[26px] mb-6 max-sm:text-gray-400">
          creative
        </span>{' '}
        solutions
      </div>
      <div className="absolute top-28 max-sm:top-32 left-[45%] max-sm:left-[40%] animate-bounce">
        <ChevronsDown size={50} className="text-[#b49bff] w-20 max-sm:w-16 h-20 max-sm:h-16 " />
      </div>
    </motion.div>
  );
};

const SkillsTitle = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="mt-10 text-[40px] max-sm:text-[26px] text-white font-medium mt-[10px] max-sm:mt-[-10px] text-center mb-[15px] max-sm:mb-[44px] relative">
      <div className="text-gray-400">
        Making{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] max-sm:text-[26px] mb-6 max-sm:text-gray-400">
          apps
        </span>{' '}
        with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] max-sm:text-[26px] mb-6 max-sm:text-gray-400">
          modern
        </span>{' '}
        technologies
      </div>
      <div className="absolute top-28 max-sm:top-32 left-[45%] max-sm:left-[40%] animate-bounce">
        <ChevronsDown size={50} className="text-[#b49bff] w-20 max-sm:w-16 h-20 max-sm:h-16" />
      </div>
    </motion.div>
  );
};

const ProjectsTitle = () => {
  return (
    <motion.div
      variants={slideInFromLeft(0.5)}
      className="mt-10 text-[40px] text-white font-medium mt-[10px] text-center relative z-40">
      Developing{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">
        apps
      </span>{' '}
      with{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[46px] mb-6">
        Cross-Platform
      </span>{' '}
      <span className="block">Compatibility</span>
      <div className="absolute top-[150px] left-[45%] animate-bounce">
        <ChevronsDown size={50} className="text-[#b49bff] w-20 h-20" />
      </div>
    </motion.div>
  );
};

const MainTitle = ({ title, subTitleType }: IMainTitle) => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="w-full h-auto flex flex-col items-center justify-center mt-10">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box-title opacity-[0.9] mb-10 px-[100px] max-sm:px-[24px]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] max-sm:mr-[4px] h-12 max-sm:h-8 w-12 max-sm:w-8 max-sm:mt-[-8px]" />
            <h1 className="Welcome-text text-[60px] max-sm:text-[36px] mb-2">{title}</h1>
          </motion.div>
          {subTitleType === 'about' && <AboutTitle />}
          {subTitleType === 'skills' && <SkillsTitle />}
          {subTitleType === 'projects' && <ProjectsTitle />}
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute max-sm:mt-[200px] max-sm:w-[320px]">
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
  );
};

export default MainTitle;

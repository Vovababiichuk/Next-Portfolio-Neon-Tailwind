'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import AboutTabs from '../main/AboutTabsSection';

const AboutContent = () => {
  return (
    <div className="relative h-full overflow-hidden mt-[-78px]">
      <p className="text-white text-center w-full max-w-[930px] m-auto text-2xl leading-9">
        Hello, I&apos;m a{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          creative Frontend & Mobile Developer
        </span>{' '}
        with proficiency in{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Node.js, React.js, Next.js, React Native, Java Script, Type Script,
        </span>{' '}
        and UI technologies such as{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Styled Components, Tailwind CSS, SASS,
        </span>{' '}
        and others.
        <svg className="mt-[-110px] mb-6 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1e1741" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
        </svg>
        In addition, thanks to my <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">design skills,</span> I can create visually appealing projects.
        <svg
          className="transform scale-x-[-1] mt-[-110px] mb-6 opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path fill="#1e1741" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
        </svg>
        I like to take on challenges and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">constantly develop</span> my skills to stay up-to-date with the  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">latest technologies, </span> offering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">best solutions</span>, for projects.
      </p>
    </div>
  );
};

export default AboutContent;

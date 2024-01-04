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
          creative Frontend & Mobile developer
        </span>{' '}
        with expertise in{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          React, JavaScript, TypeScript, Node.js, Next.js, React Native
        </span>{' '}
        and proficient with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Styled Components, Tailwind CSS, Sass, and Css-in-Js
        </span>{' '}
        for crafting elegant user interfaces.
        <svg className="mt-[-110px] mb-6 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1e1741" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
        </svg>
        I am also actively involved in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Graphic Design</span>. I strive to create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">visually appealing</span> layouts
        and user interfaces, making your projects not only <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">functional</span> but also <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          aesthetically
          pleasing
        </span>.
        <svg
          className="transform scale-x-[-1] mt-[-110px] mb-6 opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path fill="#1e1741" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
        </svg>
        I like to take on new challenges and I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">constantly developing</span> my skills to keep abreast of
        the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">latest technology</span>, ensuring that I can offer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">best solutions</span> for your projects.
      </p>
    </div>
  );
};

export default AboutContent;

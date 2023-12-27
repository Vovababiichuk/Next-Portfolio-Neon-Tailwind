'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import AboutTabs from '../main/AboutTabsSection';

const AboutContent = () => {
  return (
    <div className="relative h-full overflow-hidden mt-[-100px]">
      <p className="text-white text-center w-full max-w-[800px] m-auto text-2xl leading-9">
        I am a{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          creative Frontend & Mobile
        </span>{' '}
        developer. My skills include web development using{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Java Script, React, Node js, Next js
        </span>{' '}
        𝗮𝗻𝗱{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Styled Components, Tailwind Css, Sass
        </span>{' '}
        for styling. I am also actively learning{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          mobile development
        </span>{' '}
        using{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          React Native
        </span>{' '}
        and{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Ionic+React
        </span>
        . I also have experience with the{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Express
        </span>{' '}
        database. I am ready to take on new challenges and bring my creativity to your project.
      </p>
    </div>
  );
};

export default AboutContent;

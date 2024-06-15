'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import AboutTabs from '../main/AboutTabsSection';

const AboutContent = () => {
  return (
    <div className="relative h-full overflow-hidden mt-[-78px] max-sm:mt-[-190px]">
      <p className="text-white text-center w-full max-w-[930px] m-auto text-[28px] max-sm:text-[24px] leading-9">
        Hello, I&apos;m a{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          creative Frontend Developer
        </span>{' '}
        with proficiency in{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        JavaScript, React.js, TypeScript, Next.js, Node.js
        </span>{' '}
        and UI technologies such as{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Tailwind, CSS, SASS, Styled Components
        </span>{' '}
        and others.
        <svg className="mt-[-100px] mb-6 opacity-80 max-sm:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1e1741" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
        </svg>
        <span className='max-sm:hidden'>
        I&rsquo;m passionate about building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">efficient, scalable,</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">visually appealing</span> web applications.
          <svg
            className="transform scale-x-[-1] mt-[-130px] mb-6 opacity-80 max-sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320">
            <path fill="#1e1741" fill-opacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path>
          </svg>
          With a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">strong foundation</span> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">front-end development</span> and a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">keen eye for detail</span>, I offer  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">innovative solutions </span> to complex problems. My goal is to create<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> high-quality code</span>, that not only meets but <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> exceeds</span> client expectations.
        </span>
      </p>
    </div>
  );
};

export default AboutContent;

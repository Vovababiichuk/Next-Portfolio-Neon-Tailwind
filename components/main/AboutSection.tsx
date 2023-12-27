'use client';

import React from 'react';
import MainTitle from '../sub/MainTitle';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about">
      <MainTitle title="About Me" subTitleType="about" />

      <motion.div variants={slideInFromLeft(0.5)} className="m-auto">
        <p className="text-white">
          I am a creative Frontend developer. My skills include web development using 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁,
          𝗥𝗲𝗮𝗰𝘁, 𝗡𝗼𝗱𝗲.𝗷𝘀, 𝗡𝗲𝘅𝘁.𝗷𝘀 𝗮𝗻𝗱 𝗦𝘁𝘆𝗹𝗲𝗱 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀, 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱, 𝗦𝗮𝘀𝘀 for styling. I am also
          actively learning mobile development using React Native and Ionic+React. I also have
          experience with the Express database. I am ready to take on new challenges and bring my
          creativity to your project.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

const SkillDataProvider = ({ src, width, height, index, skill_name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="hover:scale-110 hover:opacity-40 duration-300 transition ease-in-out cursor-pointer"
              src={src}
              width={width}
              height={height}
              alt="skill image"
            />
          </TooltipTrigger>
          <TooltipContent className="bg-transparent bg-[#1e1741] bg-opacity-50 border border-[1px] border-[#2f2158]">
            <p className='text-[#b49bff]'>{skill_name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default SkillDataProvider;

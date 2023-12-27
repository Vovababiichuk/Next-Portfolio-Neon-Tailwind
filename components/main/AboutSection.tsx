'use client';

import React from 'react';
import MainTitle from '../sub/MainTitle';
import AboutContent from '../sub/AboutContent';
// import AboutTabs from '../sub/AboutTabs';

const AboutSection = () => {
  return (
    <section id="about">
      <MainTitle title="About Me" subTitleType="about" />

      <div className='relative'>
        <div className='mb-14'>
          <AboutContent />
        </div>
        <div className='absolute top-[300px] left-[37%] m-auto text-center z-50'>
          {/* <AboutTabs /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

'use client';

import React from 'react';
import MainTitle from '../sub/MainTitle';
import AboutContent from '../sub/AboutContent';
// import AboutTabs from '../sub/AboutTabs';

const AboutSection = () => {
  return (
    <section id="about" className="mt-[-60px] max-sm:mt-[-200px]">
      <MainTitle title="About Me" subTitleType="about" />
      <div className="container">
        <div className="relative">
          <div>
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

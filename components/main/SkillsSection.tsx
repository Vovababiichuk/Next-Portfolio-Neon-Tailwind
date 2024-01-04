'use client';

import React from 'react';
import { Skill_frontend, Skill_backend, Skill_ui, Skill_fullstack, Skill_other } from '@/constants';
import SkillDataProvider from '../sub/SkillDataProvider';
import MainTitle from '../sub/MainTitle';

const SkillsSection = () => {
  return (
    <section id="skills" className='mt-[-60px]'>
      <MainTitle title="My Skills" subTitleType="skills" />

      <div
        className="m-auto flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mt-[-140px] z-[140] py-6"
        style={{ transform: 'scale(0.9)' }}>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[150]">
          {Skill_frontend.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skill_name={image.skill_name}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[150]">
          {Skill_backend.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skill_name={image.skill_name}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[150]">
          {Skill_ui.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skill_name={image.skill_name}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-[150]">
          {Skill_fullstack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skill_name={image.skill_name}
            />
          ))}
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-8 gap-6 items-center z-[150]">
          {Skill_other.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              skill_name={image.skill_name}
            />
          ))}
        </div>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

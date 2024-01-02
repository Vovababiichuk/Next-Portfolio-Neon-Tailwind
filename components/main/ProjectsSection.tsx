'use client';

import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import MainTitle from '../sub/MainTitle';

const ProjectsSection = () => {
  return (
    <section id="projects" className='mt-[-80px]'>
      <MainTitle title='My Projects' subTitleType='projects' />

      <div className="flex flex-col items-center justify-center">
        <div className="h-full w-full flex flex-wrap justify-center gap-6 px-10">
          <ProjectCard
            src="/projects/music.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/projects/marketing.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/projects/password.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/projects/bmi.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

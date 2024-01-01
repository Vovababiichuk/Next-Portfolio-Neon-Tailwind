'use client';

import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import MainTitle from '../sub/MainTitle';

const Projects = () => {
  return (
    <section id="projects" className='mt-[-80px]'>
      <MainTitle title='My Projects' subTitleType='projects' />

      {/* <div className="flex flex-col items-center justify-center py-20">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div> */}
    </section>
  );
};

export default Projects;

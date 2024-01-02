'use client';

import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import MainTitle from '../sub/MainTitle';

const techData = {
  next: '/next.svg',
  tailwind: '/tailwind.png',
  framer: '/framer.png',
};

const projectsData = [
  {
    id: 1,
    src: '/projects/music.png',
    title: 'Landing Page',
    description: 'Animation landing page for a music streaming service.',
    tag: ['All', 'Web'],
    tech: [techData.next, techData.tailwind, techData.framer],
  },
  {
    id: 2,
    src: '/projects/marketing.png',
    title: 'Landing Page',
    description: 'Landing page for a marketing agency.',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    src: '/projects/password.png',
    title: 'Password Generator',
    description: 'Generate a random password with different options.',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    src: '/projects/bmi.png',
    title: 'BMI Calculator',
    description: 'Simple app that calculates your body mass index (BMI).',
    tag: ['All', 'Mobile'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-[-80px]">
      <MainTitle title="My Projects" subTitleType="projects" />

      <div className="flex flex-col items-center justify-center">
        <div className="h-full w-full flex flex-wrap justify-center gap-6 px-[10px]">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              src={project.src}
              title={project.title}
              description={project.description}
              tag={project.tag}
              tech={project.tech || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

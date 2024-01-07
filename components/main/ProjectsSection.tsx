'use client';

import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import MainTitle from '../sub/MainTitle';

const techData = {
  next: '/next.svg',
  tailwind: '/tailwind.png',
  framer: '/framer.png',
  javaScript: '/js.png',
  html: '/html.png',
  css: '/css.png',
  jquery: '/jquery.png',
  react: '/react.png',
  sass: '/sass.png',
  ionic: '/ionic.png',
  typeScript: '/ts.png',
  styledComponents: '/styled-components.png',
  chakraUi: '/chakra.png',
};

const projectsData = [
  {
    id: 1,
    src: '/projects/sollers.png',
    title: 'Security Services',
    description:
      'Security services to protect data and privacy. Developed design and code for the product presentation for Sollers Group.',
    tag: ['All', 'Web'],
    tech: [
      techData.react,
      techData.tailwind,
      techData.framer,
      techData.sass,
      techData.typeScript,
      techData.chakraUi,
    ],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    src: '/projects/music.png',
    title: 'Music Streaming',
    description: 'Animation landing page for a music streaming service.',
    tag: ['All', 'Web'],
    tech: [techData.next, techData.tailwind, techData.framer],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    src: '/projects/password.png',
    title: 'Password Generator',
    description: 'Generate a random password with different options.',
    tag: ['All', 'Web'],
    tech: [techData.react, techData.sass, techData.javaScript],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    src: '/projects/marketing.png',
    title: 'Matrketing Agency',
    description: 'Landing page for a marketing agency.',
    tag: ['All', 'Web'],
    tech: [techData.javaScript, techData.html, techData.css, techData.jquery],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    src: '/projects/menu.png',
    title: 'Menu Ordering',
    description: 'Ordering system for a restaurant.',
    tag: ['All', 'Web'],
    tech: [techData.react, techData.typeScript, techData.styledComponents, techData.chakraUi],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    src: '/projects/bmi.png',
    title: 'BMI Calculator',
    description: 'Simple app that calculates your body mass index (BMI).',
    tag: ['All', 'Mobile'],
    tech: [techData.react, techData.ionic],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-[-90px] pb-24">
      <MainTitle title="My Projects" subTitleType="projects" />

      <div className="text-[#b49bff] flex flex-row items-center justify-center gap-2 py-6 z-50 relative mt-[-90px] mb-10">
        {/* <button className="rounded-full border-2 border-[#2A0E61] px-10 py-3 text-xl cursor-pointer">
          All
        </button> */}
        {/* <button className="rounded-full border-2 border-slate-600 hover:border-white px-10 py-3 text-xl cursor-pointer">
          Web
        </button> */}
        {/* <button className="rounded-full border-2 border-slate-600 hover:border-white px-10 py-3 text-xl cursor-pointer">
          Mobile
        </button> */}
        <button className="border-2 border-[#b49bff] py-3 button-primary text-center cursor-pointer rounded-full w-full max-w-[160px] text-[20px] transition-all duration-300 ease-in-out">
          All
        </button>
        <button className="py-3 button-primary text-center cursor-pointer rounded-full w-full max-w-[160px] text-[20px] transition-all duration-300 ease-in-out">
          Web
        </button>
        <button className="py-3 button-primary text-center cursor-pointer rounded-full w-full max-w-[160px] text-[20px] transition-all duration-300 ease-in-out">
          Mobile
        </button>
      </div>

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
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

'use client';

import React, { useState } from 'react';
import ProjectCard from '../sub/ProjectCard';
import MainTitle from '../sub/MainTitle';
import ProjectTag from '../main/ProjectTag';

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
    gitUrl: 'https://github.com/Vovababiichuk',
    previewUrl: 'https://sollers-group.netlify.app/',
  },
  {
    id: 2,
    src: '/projects/music.png',
    title: 'Music Streaming',
    description: 'Animation landing page for a music streaming service.',
    tag: ['All', 'Web'],
    tech: [techData.next, techData.tailwind, techData.framer],
    gitUrl: 'https://github.com/Vovababiichuk',
    previewUrl: 'https://music-website-next-js-tailwind-css-and-framer-motion-9gh4.vercel.app/',
  },
  {
    id: 3,
    src: '/projects/password.png',
    title: 'Password Generator',
    description: 'Generate a random password with different options.',
    tag: ['All', 'Web'],
    tech: [techData.react, techData.sass, techData.javaScript],
    gitUrl: 'https://github.com/Vovababiichuk',
    previewUrl: 'https://react-password-generator-done.vercel.app/',
  },
  {
    id: 4,
    src: '/projects/marketing.png',
    title: 'Matrketing Agency',
    description: 'Landing page for a marketing agency.',
    tag: ['All', 'Web'],
    tech: [techData.javaScript, techData.html, techData.css, techData.jquery],
    gitUrl: 'https://github.com/Vovababiichuk',
    previewUrl: 'https://vovababiichuk.github.io/Marketing-project/',
  },
  {
    id: 5,
    src: '/projects/menu.png',
    title: 'Menu Ordering',
    description: 'Ordering system for a restaurant.',
    tag: ['All', 'Web'],
    tech: [techData.react, techData.typeScript, techData.styledComponents, techData.chakraUi],
    gitUrl: 'https://github.com/Vovababiichuk',
    previewUrl: 'https://dazzling-gnome-e98345.netlify.app/',
  },
  {
    id: 6,
    src: '/projects/bmi.png',
    title: 'BMI Calculator',
    description: 'Simple app that calculates your body mass index (BMI).',
    tag: ['All', 'Mobile'],
    tech: [techData.react, techData.ionic],
    gitUrl: 'https://github.com/Vovababiichuk',
    previewUrl: 'https://remarkable-piroshki-d40a60.netlify.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <section id="projects" className="mt-[-90px] max-sm:mt-[-310px] pb-36 ">
      <MainTitle title="My Projects" subTitleType="projects" />
      <div className="container">
        <div className="text-[#b49bff] flex flex-row items-center justify-center gap-2 py-6 z-50 relative mt-[-90px] max-sm:mt-[-170px] mb-10">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === 'Web'} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === 'Mobile'} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-full w-full flex flex-wrap justify-center gap-6 px-[10px]">
            {filteredProjects.map((project) => (
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
      </div>
    </section>
  );
};

export default ProjectsSection;

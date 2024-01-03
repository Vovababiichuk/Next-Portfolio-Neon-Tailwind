import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

interface IProps {
  src: string;
  title: string;
  description: string;
  tag: string[];
  tech: string[];
}

const getTechImageClass = (techItem: string): string => {
  return clsx({
    'next-tech': techItem === '/next.svg',
    'tailwind-tech': techItem === '/tailwind.png',
    'framer-tech': techItem === '/framer.png',
    'sass-tech': techItem === '/sass.png',
    'javaScript-tech': techItem === '/js.png',
  });
};

const ProjectCard = ({ src, title, description, tag, tech }: IProps) => {
  return (
    <div className="relative w-[400px] h-[500px] overflow-hidden rounded-lg shadow-2xl shadow-[#2A0E61] border border-[#2f2158]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="h-[280px] bg-cover bg-blend-multiply"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-[#b49bff]">{title}</h1>
        <p className="mt-2 text-gray-300 h-[106px]">{description}</p>
        <div className="flex gap-2 items-center">
          {tech.map((techItem, index) => (
            <div key={index} className={clsx('', getTechImageClass(techItem))}>
              <Image src={techItem} alt="skill tag" width={40} height={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

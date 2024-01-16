import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Eye, GithubIcon, } from 'lucide-react';

interface IProps {
  src: string;
  title: string;
  description: string;
  tag: string[];
  tech: string[];
  previewUrl: string;
  gitUrl: string | null;
}

const getTechImageClass = (techItem: string): string => {
  return clsx({
    'next-tech': techItem === '/next.svg',
    'tailwind-tech': techItem === '/tailwind.png',
    'framer-tech': techItem === '/framer.png',
    'sass-tech': techItem === '/sass.png',
    'javaScript-tech': techItem === '/js.png',
    'chakraUi-tech': techItem === '/chakra.png',
  });
};

const ProjectCard = ({ src, title, description, tag, tech, previewUrl, gitUrl }: IProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative w-[392px] h-[500px] max-sm:h-[460px] overflow-hidden rounded-lg shadow-2xl shadow-[#2A0E61] border border-[#2f2158] card-shadow-project z-[999]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Link href={previewUrl} target="_blank">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="h-[280px] max-sm:h-[200px] bg-cover bg-blend-multiply"
        />

        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full text-white items-center flex flex-col gap-10 justify-center card-icons   bg-gradient-to-br from-blue-950/40 transition-all duration-300">
            <div className="flex gap-5">
              <Link
                href={previewUrl}
                target="_blank"
                className="bg-[#27233a] bg-opacity-50 p-[6px] rounded-lg border border-[1px] border-gray-400/20 hover:bg-[#27233a] duration-300 ease-in-out">
                <Eye className="text-white w-16 h-16 cursor-pointer" />
              </Link>
              {gitUrl ? (
                <Link
                  href={gitUrl}
                  target="_blank"
                  className="bg-[#27233a] bg-opacity-50 p-[6px] rounded-lg border border-[1px] border-gray-400/20 hover:bg-[#27233a] duration-300 ease-in-out">
                  <GithubIcon className="text-white w-16 h-16 cursor-pointer" />
                </Link>
              ): null}
            </div>
            <Image src="/nick.svg" alt="logo" width={290} height={290} className="block" />
          </div>
        )}

        <div className="relative p-4 flex flex-col justify-between max-sm:h-[264px]">
          <div>
            <h1 className="text-2xl font-semibold text-[#b49bff]">{title}</h1>
            <p className="mt-2 text-gray-300 h-[106px]">{description}</p>
          </div>
          <div className="flex gap-2 items-center">
            {tech.map((techItem, index) => (
              <div key={index} className={clsx('', getTechImageClass(techItem))}>
                <Image src={techItem} alt="skill tag" width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

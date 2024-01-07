import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Eye, Github, LinkIcon } from 'lucide-react';

interface IProps {
  src: string;
  title: string;
  description: string;
  tag: string[];
  tech: string[];
  previewUrl: string;
  gitUrl: string;
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
      className="relative w-[400px] h-[500px] overflow-hidden rounded-lg shadow-2xl shadow-[#2A0E61] border border-[#2f2158] card-shadow-project z-[999]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      {/* <Link href={previewUrl}> */}
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="h-[280px] bg-cover bg-blend-multiply"
        />

        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full text-white flex gap-4 items-center justify-center card-icons">
            <Link href={previewUrl}>
              <Eye size={100} color="#b49bff" className='hover:scale-110 transition duration-300 ease-in-out' />
              {/* <LinkIcon size={100} color="white" /> */}
            </Link>
            <Link href={gitUrl}>
              <Github size={80} color="#b49bff" className='hover:scale-110 transition duration-300 ease-in-out' />
            </Link>
          </div>
        )}

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
      {/* </Link> */}
    </div>
  );
};

export default ProjectCard;

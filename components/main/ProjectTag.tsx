'use client';

import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
import React from 'react';

interface IPropsProjectTag {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: IPropsProjectTag) => {
  const buttonStyles = isSelected
    ? 'active-filter'
    : 'py-3 button-primary text-center cursor-pointer rounded-full w-full max-w-[160px] text-[20px] transition-all duration-300 ease-in-out';

  return (
    <button className={`${buttonStyles} py-3 button-primary text-center cursor-pointer rounded-full w-full max-w-[160px] text-[20px] transition-all duration-300 ease-in-out`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;

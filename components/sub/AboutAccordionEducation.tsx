import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import React from 'react';

const AboutAccordionEducation = () => {
  return (
    <div className="z-[100] w-full max-w-[580px] m-auto">
      <Accordion className="w-[580px]" type="single" collapsible>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-1">
          <AccordionTrigger className="text-[21px] uppercase">
            (2023-2024) - IT School
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4">
              Profession <span className="text-yellow-200">Fullstack Developer</span> from scratch
              to employment
            </p>
            <a
              className="py-1 px-4 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-[20px] transition-all duration-300 ease-in-out font-mono"
              href="https://it-brains.com.ua/study/"
              target="_blank">
              Link
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158] button-" value="item-2">
          <AccordionTrigger className="text-[21px] uppercase">
            (2022-2023) - IT Course{' '}
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4">
              Course <span className="text-yellow-200">Website Layout</span> from 0 to 1
            </p>
            <a
              className="py-1 px-4 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-[20px] transition-all duration-300 ease-in-out font-mono"
              href="https://from0to1.com.ua/"
              target="_blank">
              Link
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158] button-" value="item-3">
          <AccordionTrigger className="text-[21px] uppercase">
            (2005-2010) - University{' '}
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4">
              Vinnitsa National Agrarian University (Specialist; Management of organizations) -{' '}
              <span className="text-yellow-200">Diploma with honors.{' '}</span>
              Received high grades in computer technology and higher mathematics.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordionEducation;

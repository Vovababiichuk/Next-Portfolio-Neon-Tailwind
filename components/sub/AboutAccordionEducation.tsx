import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import React from 'react';
import Image from 'next/image';

const AboutAccordionEducation = () => {
  return (
    <div className="z-[100] w-full max-w-[580px] m-auto">
      <Accordion className="w-[580px]" type="single" collapsible>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-1">
          <AccordionTrigger className="text-[21px] uppercase">
            (2023-2024) - IT School
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              Profession <span className="text-[#00ffffff]">Fullstack Developer</span> from scratch
              to employment
            </p>
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              Developer who combines knowledge of{' '}
              <span className="text-[#00ffffff]">Front-end and Back-end</span> developers. Such
              specialists can create any{' '}
              <span className="text-[#00ffffff]">website, mobile or PC application</span> from
              scratch. And they occupy the first place in demand in the market.
            </p>
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              I studied such technologies at school: <span className="text-[#00ffffff]">
                Html, Css, Java Script, Type Script, React.js,
                Redux, Styled Components, Formic, Next.js, i18n, Axios, Moment.js, Express.js,
                Nest,js, SQL
              </span> and more.
            </p>
            <a
              className="py-1 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-[20px] transition-all duration-300 ease-in-out font-mono"
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
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              Course <span className="text-[#00ffffff]">Website Layout</span> from 0 to 1
            </p>
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              During the course, I studied{' '}
              <span className="text-[#00ffffff]">Html, Css, Gulp, Git, SASS, BEM, JQuery</span>.{' '}
              <span className="text-[#00ffffff]">Landing page</span> layout and{' '}
              <span className="text-[#00ffffff]">Online Store</span> development.
            </p>
            <a
              className="py-1 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-[20px] transition-all duration-300 ease-in-out font-mono"
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
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              Vinnitsa National Agrarian University (Specialist; Management of organizations) -{' '}
              <span className="text-[#00ffffff]">Diploma with honors. </span>
              Received{' '}
              <span className="text-[#00ffffff]">
                high grades in computer technology and higher mathematics
              </span>
              .
            </p>
            <div className="flex items-center gap-4">
              <span>
                <Image src="/diplom1.jpg" width={200} height={200} alt="diploma" />
              </span>
              <span>
                <Image src="/diplom2.jpg" width={210} height={210} alt="diploma" />
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordionEducation;

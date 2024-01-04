import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import React from 'react';

const AboutAccordionExperience = () => {
  return (
    <div className="z-[100] w-full max-w-[580px] m-auto">
      <Accordion className="w-[580px]" type="single" collapsible>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-1">
          <AccordionTrigger className="text-[21px] uppercase">
            (2022-2024) - Freelancing
          </AccordionTrigger>
          <AccordionContent className="text-left flex flex-col gap-4 ">
            <p className="leading-7 font-sans text-[19px]">Freelancing Across Various Platforms</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-2">
          <AccordionTrigger className="text-[21px] uppercase">
            (2023) - Practice in UANODES COMPANY
          </AccordionTrigger>
          <AccordionContent className="text-left flex flex-col gap-4">
            <p className="leading-7 font-sans text-[19px]">
              I conducted a comprehensive analysis of the Frontend section of the project,
              collaborated with Backend developers to evaluate the code logic, and addressed
              significant issues, including outdated libraries and suboptimal code.
            </p>
            <p className="leading-7 font-sans text-[19px]">
              This process resulted in the decision to rebuild the project, aiming for enhanced
              security, performance, and alignment with modern development standards.{' '}
              <span className="text-[#00ffffff]">
                The project utilized React for the Frontend and Django for the Backend.
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-3">
          <AccordionTrigger className="text-[21px] uppercase ">
            (2022) - WORK AT STOCK EXCHANGES
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4">
              Сreating diverse <span className="text-[#00ffffff]">Vector Graphics</span>
            </p>
            <a
              className="py-1 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full max-w-[200px] text-[20px] transition-all duration-300 ease-in-out font-mono"
              href="https://stock.adobe.com/ua/contributor/210974889/Volodymyr"
              target="_blank">
              Link
            </a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-4">
          <AccordionTrigger className="text-[21px] uppercase ">
            (2013-2021) - Sales Industry
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              Self-Employment in the Sales Industry.{' '}
              <span className="text-[#00ffffff]">Communicating</span> and building{' '}
              <span className="text-[#00ffffff]">relationships</span> with{' '}
              <span className="text-[#00ffffff]">customers</span>.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-5">
          <AccordionTrigger className="text-[21px] uppercase text-left">
            (2012-2013) - AGROFIRM (manager-economist)
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 font-sans text-[19px] mb-4 text-left">
              <span className="text-[#00ffffff]">Сommunication</span> and management of people.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordionExperience;

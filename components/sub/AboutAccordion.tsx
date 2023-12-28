import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import React from 'react';

const AboutAccordion = () => {
  return (
    <div className="z-[100] w-full max-w-[560px]">
      <Accordion className="w-[560px]" type="single" collapsible>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-1">
          <AccordionTrigger className="text-[21px] uppercase">
            (2023) - Practice in UANODES COMPANY
          </AccordionTrigger>
          <AccordionContent className="text-left flex flex-col gap-4 ">
            <p className="leading-7 font-sans text-[19px]">
              I conducted a comprehensive analysis of the Frontend section of the project,
              collaborated with Backend developers to evaluate the code logic, and addressed
              significant issues, including outdated libraries and suboptimal code. This process
              resulted in the decision to rebuild the project, aiming for enhanced security,
              performance, and alignment with modern development standards.{' '}
              <span className="text-yellow-200">
                The project utilized React for the Frontend and Django for the Backend
              </span>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-2">
          <AccordionTrigger className="text-[21px] uppercase">
            (2023-2024) - IT School
          </AccordionTrigger>
          <AccordionContent className='text-left'>
            <p className="leading-7 font-sans text-[19px]">Profession <span className="text-yellow-200">Fullstack developer</span> from scratch to employment</p>
            <a href="https://it-brains.com.ua/study/" target="_blank">Link</a>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-3">
          <AccordionTrigger className="text-[21px] uppercase">
            (2022-2023) - IT Course{' '}
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-4">
          <AccordionTrigger className="text-[21px] uppercase ">
            (2022) - WORK AT STOCK EXCHANGES
          </AccordionTrigger>
          <AccordionContent>Сreating diverse vector graphics.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordion;

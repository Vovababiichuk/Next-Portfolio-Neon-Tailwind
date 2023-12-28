import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import React from 'react';

const AboutAccordion = () => {
  return (
    <div className='z-[100] w-full max-w-[500px]'>
      <Accordion className='w-[500px]' type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-[20px] uppercase'>2023-2024 - IT School</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-[20px] uppercase'>2022-2023 - IT Course </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-[20px] uppercase'>2023 - Practice in UANODES COMPANY</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordion;

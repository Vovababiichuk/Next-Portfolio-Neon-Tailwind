import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import React from 'react';
import Image from 'next/image';

const AboutAccordionCertificates = () => {
  return (
    <div className="z-[100] w-full max-w-[580px] m-auto">
      <Accordion className="w-[580px]" type="single" collapsible>
        <AccordionItem className="border-b-[3px] border-[#2f2158]" value="item-1">
          <AccordionTrigger className="text-[21px] uppercase text-left">
            IT Course - Certificate (Markup Developer)
          </AccordionTrigger>
          <AccordionContent>
            <Image src="/certificates/markup-developer.png" alt="certificate" width={550} height={550} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-b-[3px] border-[#2f2158] button-" value="item-2">
          <AccordionTrigger className="text-[21px] uppercase">
            Java Script Course - Certificates
          </AccordionTrigger>
          <AccordionContent>
            <Image src="/certificates/solo-certificate.jpg" alt="certificate" width={550} height={550} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordionCertificates;

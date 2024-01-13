import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';
import AboutAccordion from '../sub/AboutAccordionExperience';
import { ArrowBigDown, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import AboutAccordionExperience from '../sub/AboutAccordionExperience';
import AboutAccordionEducation from '../sub/AboutAccordionEducation';
import AboutAccordionCertificates from '../sub/AboutAccordionCertificates';
import AboutCarusel from '../sub/AboutCarusel';

const AboutTabsSection = () => {
  return (
    <div className="z-[100] text-center">
      <div className="container">
        <Tabs defaultValue="account" className="w-[800px] max-sm:w-[240px] m-auto">
          <TabsList className="bg-transparent bg-[#1e1741] bg-opacity-50 border border-[1px] border-[#2f2158] mb-6 max-sm:mb-[-20px] py-[33px] max-sm:mt-[-50px] px-[8px] max-sm:flex max-sm:flex-col max-sm:h-[250px]">
            <TabsTrigger className="uppercase text-2xl" value="account">
              <ArrowBigRight className='max-sm:hidden' size={40} />
              <ArrowBigDown className='hidden max-sm:block' size={40} />
            </TabsTrigger>
            <TabsTrigger className="text-[28px]" value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger className="text-[28px]" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="text-[28px]" value="password">
              Certificates
            </TabsTrigger>
          </TabsList>
          <TabsContent className="text-white w-[500px] max-sm:w-[230px] m-auto mt-[60px]" value="account">
            {/* <Image className='rounded-lg opacity-70' src="/developer.gif" alt="about me" width={600} height={600} /> */}
            <Image
              className="img-shadow rounded-lg opacity-90"
              // src="/about-gif.gif"
              src="/my-photo/my-photo.jpg"
              alt="my photo"
              width={500}
              height={500}
            />
          </TabsContent>
          <TabsContent className="text-white" value="experience">
            <AboutAccordionExperience />
          </TabsContent>
          <TabsContent className="text-white" value="education">
            <AboutAccordionEducation />
          </TabsContent>
          <TabsContent className="text-white" value="password">
            {/* <AboutCarusel /> */}
            <AboutAccordionCertificates />
          </TabsContent>
        </Tabs>
        ;
      </div>
    </div>
  );
};

export default AboutTabsSection;

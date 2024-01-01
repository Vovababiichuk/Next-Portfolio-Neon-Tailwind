import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';
import AboutAccordion from '../sub/AboutAccordion';
import { ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
// import AboutCarusel from '../sub/AboutCarusel';

const AboutTabsSection = () => {
  return (
    <div className="z-[100] text-center">
      <Tabs defaultValue="account" className="w-[800px] m-auto">
        <TabsList className="bg-transparent bg-[#1e1741] bg-opacity-50 border border-[1px] border-[#2f2158] mb-6 py-[33px] px-[8px] ">
          <TabsTrigger className="uppercase text-2xl" value="account">
            <ArrowBigRight size={40} />
          </TabsTrigger>
          <TabsTrigger className="text-[28px]" value="experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className="text-[28px]" value="password">
            Certificates
          </TabsTrigger>
        </TabsList>
        <TabsContent className="text-white w-[560px] m-auto mt-[10px]" value="account">
          {/* <Image className='rounded-lg opacity-70' src="/developer.gif" alt="about me" width={600} height={600} /> */}
          <Image
            className="rounded-lg opacity-90"
            // src="/about-gif.gif"
            src="/my-photo/my-photo.jpg"
            alt="my photo"
            width={560}
            height={560}
          />
        </TabsContent>
        <TabsContent className="text-white" value="experience">
          <AboutAccordion />
        </TabsContent>
        <TabsContent className="text-white" value="password">
          {/* <AboutCarusel /> */}
        </TabsContent>
      </Tabs>
      ;
    </div>
  );
};

export default AboutTabsSection;

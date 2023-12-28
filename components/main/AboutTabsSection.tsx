import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';
import AboutAccordion from '../sub/AboutAccordion';
import { ArrowBigRight } from 'lucide-react';
import Image from 'next/image';

const AboutTabsSection = () => {
  return (
    <div className="z-[100] text-center">
      <Tabs defaultValue="account" className="w-[800px] m-auto">
        <TabsList className="bg-transparent bg-[#1e1741] bg-opacity-50 border border-[1px] border-[#2f2158] mb-6 py-[30px] px-2 ">
          <TabsTrigger className="uppercase text-2xl" value="account">
            <ArrowBigRight size={36}/>
          </TabsTrigger>
          <TabsTrigger className="text-3xl" value="experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className="text-[28px]" value="password">
            Certificates
          </TabsTrigger>
        </TabsList>
        <TabsContent className="text-white w-[500px] m-auto" value="account">
          <Image className='rounded-lg' src="/developer.gif" alt="about me" width={500} height={500} />
        </TabsContent>
        <TabsContent className="text-white w-[400px] m-auto" value="experience">
          <AboutAccordion />
        </TabsContent>
        <TabsContent className="text-white" value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
      ;
    </div>
  );
};

export default AboutTabsSection;

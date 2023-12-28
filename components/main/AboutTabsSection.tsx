import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';
import AboutAccordion from '../sub/AboutAccordion';
import { ArrowBigRight } from 'lucide-react';
import Image from 'next/image';

const AboutTabsSection = () => {
  return (
    <div className="z-[100] text-center">
      <Tabs defaultValue="account" className="w-[800px] m-auto">
        <TabsList className="bg-transparent border border-[#7042f861] border-2 mb-6 py-[30px] px-2">
          <TabsTrigger className="uppercase text-2xl" value="account">
            <ArrowBigRight size={32}/>
          </TabsTrigger>
          <TabsTrigger className="uppercase text-2xl" value="experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className="uppercase text-2xl" value="password">
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

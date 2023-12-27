import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';

const AboutTabs = () => {
  return (
    <div className='z-[100] text-center'>
      <Tabs defaultValue="account" className="w-[800px] m-auto">
        <TabsList className='bg-transparent border'>
          <TabsTrigger className='uppercase' value="account">Experience</TabsTrigger>
          <TabsTrigger className='uppercase' value="password">Certificates</TabsTrigger>
        </TabsList>
        <TabsContent className="text-white w-[400px]" value="account">
          Make changes to your account here.ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgggggggggggggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </TabsContent>
        <TabsContent className="text-white" value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
      ;
    </div>
  );
};

export default AboutTabs;

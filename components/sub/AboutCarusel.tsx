import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const AboutCarusel = () => {
  return (
    <Carousel className="w-full max-w-[550px] m-auto">
      <CarouselContent>
        <CarouselItem>
          <Image
            className="rounded-sm"
            src="/certificates/markup-developer.png"
            alt="certificate"
            width={550}
            height={550}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            className="rounded-sm"
            src="/certificates/solo-certificate.jpg"
            alt="certificate"
            width={550}
            height={550}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-transparent bg-[#1e1741] bg-opacity-50 border-[#2f2158] text-[#a992f1] w-10 h-10" />
      <CarouselNext className="bg-transparent bg-[#1e1741] bg-opacity-50 border-[#2f2158] text-[#a992f1] w-10 h-10" />
    </Carousel>
  );
};

export default AboutCarusel;

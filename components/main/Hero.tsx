import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div id='home' className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        // loop
        className=" absolute top-[-695px] h-full w-full left-0 right-0 z-[1] object-cover"
      >
        <source src="/video-header.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

import React, { useState, useEffect, useRef } from 'react';
import ParallaxItem from './ParallaxItem';

interface HeroProps {
  studentName: string;
  title: string[];
  videoUrl: string;
}

const Hero = ({ studentName, title, videoUrl }: HeroProps) => {
  const [titleIndices, setTitleIndices] = useState({ current: 0, previous: -1 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const slotDuration = 4000; 
  const entranceAnimationFinishTime = 2200; 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, [videoUrl]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setTitleIndices(prev => ({
          previous: prev.current,
          current: (prev.current + 1) % title.length
        }));
      }, slotDuration);
    }, entranceAnimationFinishTime);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [title.length]);

  return (
    <section id="home" className="h-screen w-full relative flex items-center justify-center text-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      <ParallaxItem className="relative z-20 px-4 animate-fade-in-up mix-blend-screen" speed={0.35} triggerPoint={0.5}>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-white font-frank-ruhl">
          {studentName}
        </h1>
        <div className="mt-4 text-xl md:text-2xl text-gray-300 min-h-[1.75rem] relative">
          {title.map((text, index) => {
            let animationClass = "opacity-0"; 

            if (index === titleIndices.current) {
              animationClass = "animate-blur-in z-10";
            } else if (index === titleIndices.previous) {
              animationClass = "animate-blur-out z-0";
            }

            return (
              <p 
                key={index} 
                className={`absolute inset-0 w-full flex justify-center items-center whitespace-nowrap ${animationClass}`}
                aria-hidden={index !== titleIndices.current}
              >
                {text}
              </p>
            );
          })}
        </div>
      </ParallaxItem>
    </section>
  );
};

export default Hero;

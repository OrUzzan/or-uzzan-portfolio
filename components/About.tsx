
import React from 'react';
import type { About as AboutType } from '../types';
import ParallaxItem from './ParallaxItem';

interface AboutProps {
  about: AboutType;
  bgColor: string;
}

const About = ({ about, bgColor }: AboutProps) => {
  return (
    <section 
      id="about"
      className="container mx-auto px-4 md:px-8 py-20 md:py-32"
      data-observe-bg="true"
      data-bgcolor={bgColor}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <ParallaxItem className="max-w-md mx-auto" speed={0.2}>
            <img
                src={about.imageUrl}
                alt="A portrait of the designer"
                className="w-full h-auto object-cover bg-gray-800 aspect-square"
                loading="lazy"
            />
        </ParallaxItem>
        <ParallaxItem speed={0.3}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-frank-ruhl mb-6">
                {about.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {about.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                {about.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </ParallaxItem>
      </div>
    </section>
  );
};

export default About;

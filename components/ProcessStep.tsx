
import React from 'react';
import type { ProcessStep as ProcessStepType } from '../types';
import ParallaxItem from './ParallaxItem';

interface ProcessStepProps {
  step: ProcessStepType;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-20 md:mb-32">
      <div className="md:sticky top-20 h-auto md:h-[calc(100vh-5rem)] flex flex-col justify-center py-8">
        <ParallaxItem className="max-w-md" speed={0.1} triggerPoint={0.2}>
          <h3 className="text-3xl font-bold text-white mb-4 font-frank-ruhl">{step.title}</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </ParallaxItem>
      </div>
      <div className="flex flex-col gap-8">
        {step.images.map((image, index) => (
          <ParallaxItem key={index} speed={0.25} triggerPoint={0.2}>
            <img
              src={image}
              alt={`${step.title} - image ${index + 1}`}
              className="w-full h-auto object-cover bg-gray-800"
              loading="lazy"
            />
          </ParallaxItem>
        ))}
      </div>
    </div>
  );
};

export default ProcessStep;

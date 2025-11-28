
import React, { useState } from 'react';
import type { Project } from '../types';
import ProcessStep from './ProcessStep';
import ParallaxItem from './ParallaxItem';

interface ProjectSectionProps {
  project: Project;
  bgColor: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, bgColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id={project.id} 
      className={`w-full border-b border-white/10 transition-all duration-700 ease-in-out ${isExpanded ? 'py-20' : 'py-0'}`}
      data-observe-bg="true"
      data-bgcolor={bgColor}
    >
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header / Trigger Area */}
        <div className={`group cursor-pointer ${isExpanded ? 'mb-20' : 'py-20'}`}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
                
                {/* Project Main Image (Hero) */}
                <ParallaxItem 
                  className="w-full md:w-1/2 aspect-video overflow-hidden cursor-pointer" 
                  speed={0.2}
                >
                    <div onClick={() => setIsExpanded(!isExpanded)} className="w-full h-full">
                      <img 
                          src={project.mainImage} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                </ParallaxItem>

                {/* Project Info & Button */}
                <ParallaxItem className="w-full md:w-1/2 flex flex-col items-start justify-center h-full pt-4" speed={0.35}>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-frank-ruhl mb-4">
                        {project.title}
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        {project.subtitle}
                    </p>
                    
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="relative inline-block px-8 py-3 text-sm font-medium tracking-widest text-white uppercase border border-white/30 hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        {isExpanded ? "Close Information" : "More Information"}
                    </button>
                </ParallaxItem>
            </div>
        </div>

        {/* Expandable Content Area */}
        <div 
            className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${
                isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="pt-8"> 
                {project.steps.map(step => (
                    <ProcessStep key={step.id} step={step} />
                ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;

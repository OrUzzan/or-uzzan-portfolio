
import React from 'react';
import ParallaxItem from './ParallaxItem';

interface FooterProps {
  contact: {
    email: string;
    linkedin: string;
    linkedinUrl: string;
  };
}

const Footer = ({ contact }: FooterProps) => {
  return (
    <footer id="contact" className="bg-black py-16 md:py-24 text-center overflow-hidden">
      <ParallaxItem className="container mx-auto px-4" speed={0.3} triggerPoint={0.1}>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8 font-frank-ruhl">
          Let's Create Together
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg text-gray-300">
          <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors duration-300">
            {contact.email}
          </a>
          <span className="hidden md:block">/</span>
          <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            {contact.linkedin}
          </a>
        </div>
      </ParallaxItem>
    </footer>
  );
};

export default Footer;

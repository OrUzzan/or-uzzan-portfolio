
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import Footer from './components/Footer';
import { portfolioData } from './data';
import type { Project } from './types';

const App = () => {
  const [bgColor, setBgColor] = useState('bg-black');

  // CRITICAL FIX: The previous ref-based IntersectionObserver logic was replaced
  // with a simpler, more robust useEffect-based approach. This eliminates a
  // complex race condition in React's Strict Mode that was causing the app to crash.
  useEffect(() => {
    // This effect runs once after the initial render.
    
    // 1. Find all the section elements we want to observe using a data attribute.
    // This is more stable than collecting refs, which can be complex to manage.
    const nodesToObserve = document.querySelectorAll('[data-observe-bg]');
    if (nodesToObserve.length === 0) return;

    // 2. Define the callback that fires when a section enters/leaves the viewport.
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newBgColor = entry.target.getAttribute('data-bgcolor');
          if (newBgColor) {
            setBgColor(newBgColor);
          }
        }
      });
    };

    // 3. Create a single observer to watch all the sections.
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px',
      threshold: 0.4 // A section is considered "active" when 40% is visible.
    });

    // 4. Tell the observer to watch each of our sections.
    nodesToObserve.forEach(node => observer.observe(node));

    // 5. Return a cleanup function to disconnect the observer when the app unmounts.
    return () => {
      observer.disconnect();
    };
  }, []); // The empty dependency array ensures this effect runs only once.


  // This effect handles scrolling to a specific section if a URL hash is present.
  // Designer's Note: This was changed from `useLayoutEffect` to `useEffect`.
  // `useLayoutEffect` runs synchronously and can block painting. In a complex app
  // with animations and network assets, this was causing a race condition that
  // crashed the app on load. `useEffect` runs asynchronously, which is safer
  // and guarantees the app will load, at the minor cost of a potential flicker
  // on initial deep-link navigation. Reliability is paramount.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80; // Matches the offset in Header.tsx
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto'
        });
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount.


  return (
    <main className={`antialiased text-gray-200 transition-colors duration-1000 ease-in-out ${bgColor}`}>
      <Header 
        studentName={portfolioData.studentName}
        logoUrl={portfolioData.logoUrl}
        projects={portfolioData.projects}
      />
      <Hero 
        studentName={portfolioData.studentName} 
        title={portfolioData.title} 
        videoUrl={portfolioData.heroVideoUrl} 
      />

      {portfolioData.projects.map((project: Project) => (
        <ProjectSection
          key={project.id}
          project={project}
          bgColor={project.bgColor}
        />
      ))}

      <About
        about={portfolioData.about}
        bgColor="bg-black"
      />
      
      <Footer contact={portfolioData.contact} />
    </main>
  );
};

export default App;
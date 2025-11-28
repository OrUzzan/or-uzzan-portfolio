
import React from 'react';
import type { Project } from '../types';

interface HeaderProps {
  studentName: string;
  logoUrl: string;
  projects: Project[];
}

const Header = ({ studentName, logoUrl, projects }: HeaderProps) => {
  const linkStyles = "relative text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 px-4 md:px-8 py-4 bg-black/30 backdrop-blur-md transition-colors duration-300 animate-fade-in-down">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          aria-label="Homepage" 
          onClick={handleHomeClick} 
          className="block transition-opacity duration-300 hover:opacity-80"
        >
          <img 
            src={logoUrl} 
            alt={studentName} 
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav>
          <ul className="flex items-center gap-6 md:gap-8">
            {projects.length > 0 && (
              <li>
                <a href={`#${projects[0].id}`} onClick={handleNavClick} className={linkStyles}>
                  Projects
                </a>
              </li>
            )}
            <li>
              <a href="#about" onClick={handleNavClick} className={linkStyles}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick} className={linkStyles}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

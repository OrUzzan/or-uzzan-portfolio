
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  mainImage: string; // Added for the collapsed state hero image
  bgColor: string; 
  steps: ProcessStep[];
}

export interface About {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

export interface PortfolioData {
  studentName: string;
  logoUrl: string;
  title: string[];
  heroVideoUrl: string;
  contact: {
    email: string;
    linkedin: string;
    linkedinUrl: string;
  };
  about: About;
  projects: Project[];
}


import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  studentName: "Or Uzzan",
  logoUrl: "https://res.cloudinary.com/dworxaqxs/image/upload/v1763472447/Logo_03_hksre8.png",
  title: [
    "Industrial Designer & Systems Thinker",
    "Turn Vision To Reality"
  ],
  // PASTE YOUR VIDEO URL BELOW. Can be a web link (https://...) or a local file path (/video.mp4)
  heroVideoUrl: "https://res.cloudinary.com/dworxaqxs/video/upload/v1763799009/Portfolio_Background_Video_01_ow6nfv.mp4",
  contact: {
    email: "alex.doe@design.edu",
    linkedin: "linkedin.com/in/alexdoe",
    linkedinUrl: "https://www.linkedin.com"
  },
  about: {
    title: "About Me",
    description: "I am a passionate Industrial Designer dedicated to crafting physical products that blend aesthetic refinement with engineering feasibility. Proficient in SolidWorks, KeyShot, and Adobe Suite, I pride myself on being a self-driven learner who masters new workflows quickly. Uniquely, I integrate AI tools into my design methodology to accelerate iteration and innovation. I am eager to join a collaborative team where I can apply my skills in styling, CAD, and production-ready design to impactful projects.",
    imageUrl: "https://res.cloudinary.com/dworxaqxs/image/upload/v1764276002/Self_02_ecgtap.png",
    skills: [
      "Team Worker",
      "Generative AI Ideation",
      "Rapid Prototyping",
      "SOLIDWORKS",
      "Keyshot",
      "Adobe Programs"
    ]
  },
  projects: [
    {
      id: "project-1",
      title: "eSea",
      subtitle: "Handicap electric mobility solution for the beach.",
      mainImage: "https://res.cloudinary.com/dworxaqxs/image/upload/v1763823504/MicroMobility_In_Environment_01_dcor0g.png",
      bgColor: "bg-gray-900", 
      steps: [
        {
          id: "p1s1",
          title: "01 / Pain Point",
          description: "My team and I, started this journey with the idea for a mobility solution for the beach. We studied in depth about the harsh conditions, the possible users, and found the sad truth about the non suitable beaches for physically disable individuals.",
          images: [
            "https://picsum.photos/seed/p1s1i1/1200/800",
            "https://picsum.photos/seed/p1s1i2/1200/800"
          ]
        },
        {
          id: "p1s2",
          title: "02 / Ideation & Concepting",
          description: "This step included going to the beach in a wheelchair and preforming interviews with handicapped people, looking into what options do they have when it comes to going to have a fun day at the beach. we pinpointed their needs and came up with a bunch of ideas and concepts.",
          images: [
            "https://picsum.photos/seed/p1s2i1/1200/800",
            "https://picsum.photos/seed/p1s2i2/1200/800",
            "https://picsum.photos/seed/p1s2i3/1200/800"
          ]
        },
        {
            id: "p1s3",
            title: "03 / The Final Product",
            description: "From an app, to the mobility device itself, who funds it, where is it stored, is it simple to use? all these topics wer'e on our minds when we developed and designed eSea. We are proud of the result.",
            images: [
              "https://picsum.photos/seed/p1s3i1/1200/800"
            ]
          }
      ]
    },
    {
      id: "project-2",
      title: "LampO",
      subtitle: "A ceramic lamp with magnetic hinge mechanism.",
      mainImage: "https://res.cloudinary.com/dworxaqxs/image/upload/v1763824951/LampO_01_nep8py.png",
      bgColor: "bg-[#0d1b2a]", 
      steps: [
        {
          id: "p2s1",
          title: "01 / The Starting Point",
          description: "The project began with a simple brief, a desk lamp with a magnet. I brainstormed different concepts, finally landed on the simple magnetic Ball-Hinge.",
          images: [
            "https://picsum.photos/seed/p2s1i1/1200/800"
          ]
        },
        {
          id: "p2s2",
          title: "02 / Prototyping",
          description: "Rapis 3D printing of models, gave me the sense of the general composition, deciding where all the right parts go and starting to think about the final materials.",
          images: [
            "https://picsum.photos/seed/p2s2i1/1200/800",
            "https://picsum.photos/seed/p2s2i2/1200/800",
            "https://picsum.photos/seed/p2s2i3/1200/800"
          ]
        },
        {
            id: "p2s3",
            title: "03 / Materials & Design",
            description: "I wanted the lamp to illuminate the desk in a soft, yet sufficient way. The aluminum lamp head was the ideal reflector. The lamp body is made of ceramic. The combination of the materials gives the lamp a boutique feel and inviting the user to touch.",
            images: [
              "https://picsum.photos/seed/p2s3i1/1200/800",
              "https://picsum.photos/seed/p2s3i2/1200/800"
            ]
          }
      ]
    },
    {
      id: "project-3",
      title: "Leatherful",
      subtitle: "A fruit leather kit for a richer experience.",
      mainImage: "https://res.cloudinary.com/dworxaqxs/image/upload/v1763828125/Leather_02_ffuvxq.png",
      bgColor: "bg-[#141414]",
      steps: [
        {
          id: "p3s1",
          title: "01 / Concept",
          description: "Scribe bridges the gap between analog creativity and digital storage. We wanted to retain the visceral feeling of ink on paper while instantly digitizing strokes for cloud-based workflows.",
          images: ["https://picsum.photos/seed/p3s1/1200/800"]
        },
        {
          id: "p3s2",
          title: "02 / Engineering",
          description: "Integrating motion sensors into a balanced, ergonomic barrel required custom PCB design and weight distribution analysis to ensure it felt like a premium writing instrument, not a gadget.",
          images: ["https://picsum.photos/seed/p3s2/1200/800", "https://picsum.photos/seed/p3s2b/1200/800"]
        }
      ]
    },
    {
      id: "project-4",
      title: "PolyLamp",
      subtitle: "Form follows material, polyurethane illuminer.",
      mainImage: "https://res.cloudinary.com/dworxaqxs/image/upload/v1763828172/PolyLamp_01_dkv1nn.png",
      bgColor: "bg-[#0f172a]",
      steps: [
        {
          id: "p4s1",
          title: "01 / Urban Analysis",
          description: "Traffic congestion and carbon emissions are critical issues. Velo was designed as an autonomous cargo pod that utilizes bike lanes to deliver packages efficiently.",
          images: ["https://picsum.photos/seed/p4s1/1200/800"]
        },
        {
          id: "p4s2",
          title: "02 / Form Development",
          description: "The shape was optimized for aerodynamics and approachability. We wanted the vehicle to feel friendly to pedestrians, using soft curves and clear lighting signals.",
          images: ["https://picsum.photos/seed/p4s2/1200/800"]
        }
      ]
    },
    {
      id: "project-5",
      title: "Simple Memory",
      subtitle: "A way to remember those we lost long ago.",
      mainImage: "https://res.cloudinary.com/dworxaqxs/image/upload/v1763832555/PB_Mug_01_rwbyyt.png",
      bgColor: "bg-[#0a0a0a]",
      steps: [
        {
          id: "p5s1",
          title: "01 / Material Study",
          description: "We experimented with various recycled composites to find a material that was acoustically resonant yet structurally sound. The final specked finish celebrates the recycled nature of the product.",
          images: ["https://picsum.photos/seed/p5s1/1200/800"]
        },
        {
          id: "p5s2",
          title: "02 / Sound Design",
          description: "Collaborating with audio engineers, the internal cavity was shaped to maximize bass response in a compact form factor.",
          images: ["https://picsum.photos/seed/p5s2/1200/800"]
        }
      ]
    }
  ]
};

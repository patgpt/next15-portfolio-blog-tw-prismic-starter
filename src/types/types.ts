export interface WorkExperience {
    id: string; // Add unique identifier
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
    logo?: string; // Optional logo URL
    slug: string;  // Add slug for routing
}


export interface ProjectCardProps {
    id: string;    // Add unique identifier
    title: string;
    description: string;
    image: string;
    skills: string[];
    liveUrl: string;
    slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
}
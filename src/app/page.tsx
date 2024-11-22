import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Timeline, type WorkExperience } from "@/components/Timeline";
const projects = [
  {
    title: "Example Project",
    description: "A brief description of the project and its main features",
    image: "/pfp.webp",
    skills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    slug: "example-project"
  },
  {
    title: "Example Project",
    description: "A brief description of the project and its main features",
    image: "/pfp.webp",
    skills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    slug: "example-project"
  },
  {
    title: "Example Project",
    description: "A brief description of the project and its main features",
    image: "/pfp.webp",
    skills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    slug: "example-project"
  },
  // Add more projects as needed
];

const workExperiences: WorkExperience[] = [
  {
    title: "Senior Software Engineer",
    company: "Example Corp",
    duration: "2021 - Present",
    description: [
      "Led development of core platform features",
      "Mentored junior developers",
      "Improved application performance by 40%"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    logo: "/pfp.webp", // Add logo path
  },
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    duration: "2019 - 2021",
    description: [
      "Developed user-facing features",
      "Implemented responsive designs",
      "Worked with cross-functional teams"
    ],
    technologies: ["React", "JavaScript", "CSS", "Git"],
    logo: "/pfp.webp", // Add logo path

  }
];
export default function Home() {
  return <>
    <Hero />
    <section className="px-2 py-16">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="max-w-4xl mx-auto">
        <Timeline experiences={workExperiences} />
      </div>
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  </>
}

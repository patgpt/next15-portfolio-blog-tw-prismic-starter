import { BlogPostsGrid } from "@/components/BlogPostsGrid";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/project-card";
import { Timeline } from "@/components/timeline/Timeline";
import { workExperiences } from '@/data/experiences';
import { getRecentBlogPosts } from "@/lib/blog";
import type { ProjectCardProps } from "@/types/types";


const projects: ProjectCardProps[] = [

  {
    id: '1',
    title: "Example Project",
    description: "A brief description of the project and its main features",
    image: "/pfp.webp",
    skills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    slug: "example-project"
  },
  {
    id: '2',
    title: "Example Project",
    description: "A brief description of the project and its main features",
    image: "/pfp.webp",
    skills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    slug: "example-project"
  },
  {
    id: '3',
    title: "Example Project",
    description: "A brief description of the project and its main features",
    image: "/pfp.webp",
    skills: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    slug: "example-project"
  },
  // Add more projects as needed
].map((project, index) => ({
  ...project,
  id: project.id || `project-${index}`, // Ensure IDs exist
}));

export default function Home() {
  const recentPosts = getRecentBlogPosts();

  return <>
    <Hero />
    <section className="px-2 py-16 space-y-16">
      <div>
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {workExperiences.length > 0 ? (
            <Timeline experiences={workExperiences} />
          ) : (
            <p>No work experience to display.</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        {projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          <p>No projects to display.</p>
        )}
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Recent Blog Posts</h2>
        {recentPosts.length > 0 ? (
          <BlogPostsGrid posts={recentPosts} />
        ) : (
          <p>No blog posts to display.</p>
        )}
      </div>
    </section>
  </>
}

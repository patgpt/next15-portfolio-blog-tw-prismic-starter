import { cn } from '@/utils/cn'
import Link from 'next/link'
import { memo } from 'react'
import { AnimateOnScroll } from '../AnimateOnScroll'
import ProjectContent from './ProjectContent'
import ProjectImage from './ProjectImage'
import type { ProjectCardProps } from '@/types/types'
import ProjectLink from './ProjectLink'






export const ProjectCard = memo(({ title, description, image, skills, liveUrl, slug }: ProjectCardProps) => {
    return (
        <AnimateOnScroll>
            <article
                className={cn(
                    "relative overflow-hidden rounded-xl glass hover:scale-[1.02] transition-all duration-300 glow motion-safe:animate-fade-in"
                )}
            >
                <Link
                    href={`/projects/${slug}`}
                    className="group"
                    aria-labelledby={`project-${slug}`}
                >
                    <ProjectImage image={image} alt={title} />
                    <ProjectContent title={title} description={description} skills={skills} slug={slug} />
                </Link>
                <ProjectLink title={title} liveUrl={liveUrl} />
            </article>
        </AnimateOnScroll>
    );
});
ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
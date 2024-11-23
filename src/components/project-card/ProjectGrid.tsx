import React from 'react';
import { cn } from '@/utils/cn';

import type { ProjectCardProps } from '@/types/types';
import { ProjectCard } from './ProjectCard';

const ProjectGrid = ({ projects }: { projects: ProjectCardProps[] }) => {
    return (
        <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full")}>
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
};

ProjectGrid.displayName = 'ProjectGrid';

export default ProjectGrid;
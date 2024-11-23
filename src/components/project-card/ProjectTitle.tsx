import { cn } from '@/utils/cn'
import React from 'react'

export default function ProjectTitle({ title, slug }: { title: string, slug: string }) {
    return (
        <h3 id={`project-${slug}`} className={cn("text-xl font-semibold text-gray-900 dark:text-white")}>
            {title}
        </h3>
    )
}

ProjectTitle.displayName = 'ProjectTitle';

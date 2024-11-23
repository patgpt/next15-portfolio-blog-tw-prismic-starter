import { cn } from '@/utils/cn'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectLink({ liveUrl, title }: { liveUrl: string, title: string }) {
    return (

        <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm mt-4 p-4")}
            aria-label={`View ${title} project`}
        >
            View Project <FaExternalLinkAlt size={12} aria-hidden="true" />
        </a>

    )
}
ProjectLink.displayName = 'ProjectLink';

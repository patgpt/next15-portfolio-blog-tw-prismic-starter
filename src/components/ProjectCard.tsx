import Link from 'next/link'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'


interface ProjectCardProps {
    title: string
    description: string
    image: string
    skills: string[]
    liveUrl: string
    slug: string
}

export function ProjectCard({ title, description, image, skills, liveUrl, slug }: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="group">
            <div className="relative overflow-hidden rounded-xl glass hover:scale-[1.02] transition-all duration-300 glow">
                <div className="relative aspect-[16/9] w-full">
                    <div className="absolute inset-0 z-10" />
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
                <div className="p-6 pt-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                        {liveUrl && (
                            <a href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
                            >
                                View Project <FaExternalLinkAlt size={12} />
                            </a>
                        )}
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-sm rounded-full glass text-gray-800 dark:text-gray-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}
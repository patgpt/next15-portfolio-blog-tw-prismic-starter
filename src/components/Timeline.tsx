import Image from 'next/image';

export interface WorkExperience {
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
    logo?: string; // Optional logo URL
}

function TimelineItem({ title, company, duration, description, technologies, logo }: WorkExperience) {
    return (
        <div className="relative pl-6 md:pl-10 pb-8 last:pb-0 before:absolute before:left-[5px] md:before:left-[9px] before:top-2 before:h-[calc(100%-20px)] before:w-[2px] before:bg-gray-200 dark:before:bg-white/20">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gray-200 dark:bg-purple-600/20 ring-2 ring-gray-300 dark:ring-purple-500/40" />
            <div className="glass rounded-xl p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                                <p className="text-base text-gray-700 dark:text-white/70">{company}</p>
                                <p className="text-sm text-gray-600 dark:text-white/60">{duration}</p>
                            </div>
                            {logo && (
                                <div className="relative w-16 h-16 md:w-20 md:h-20">
                                    <Image
                                        src={logo}
                                        alt={`${company} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </div>
                        <ul className="space-y-2 list-disc pl-4 marker:text-gray-400">
                            {description.map((item, index) => (
                                <li key={index} className="text-sm md:text-base text-gray-600 dark:text-white/70">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-xs md:text-sm rounded-full glass text-gray-700 dark:text-white/70"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Timeline({ experiences }: { experiences: WorkExperience[] }) {
    return (
        <div className="relative">
            {experiences.map((experience, index) => (
                <TimelineItem key={index} {...experience} />
            ))}
        </div>
    );
}
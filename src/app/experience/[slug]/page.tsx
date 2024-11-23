import { notFound } from 'next/navigation';

import Link from 'next/link';
import { Metadata } from 'next';
import { FaArrowLeft } from 'react-icons/fa';
import { workExperiences } from '@/data/experiences';

interface ExperiencePageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
    const experience = workExperiences.find(exp => exp.slug === params.slug);
    if (!experience) return { title: 'Not Found' };

    return {
        title: `${experience.title} at ${experience.company}`,
        description: experience.description[0],
    };
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
    const experience = workExperiences.find(exp => exp.slug === params.slug);
    if (!experience) notFound();

    return (
        <div className="py-16">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass hover:glow">
                <FaArrowLeft /> Back to Home
            </Link>

            <div className="max-w-4xl mx-auto glass rounded-xl p-6">
                <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">{experience.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">{experience.duration}</p>

                <div className="prose dark:prose-invert">
                    <h2>Responsibilities & Achievements</h2>
                    <ul>
                        {experience.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2>Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 text-sm rounded-full glass">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
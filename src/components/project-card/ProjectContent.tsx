import type { ProjectCardProps } from "@/types/types";
import { cn } from "@/utils/cn";
import TagCloud from "../tag-cloud/TagCloud";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";

const ProjectContent = ({
    title,
    description,
    skills,
    slug,
}: Omit<ProjectCardProps, 'id' | 'image' | 'liveUrl'>) => (
    <div className={cn("p-6 pt-4")}>
        <ProjectTitle title={title} slug={slug} />
        <ProjectDescription description={description} />
        <TagCloud skills={skills} />
    </div>
);

ProjectContent.displayName = 'ProjectContent';

export default ProjectContent;
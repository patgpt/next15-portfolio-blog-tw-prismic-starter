import { cn } from "@/utils/cn";
import Tag from "./Tag";

const TagCloud = ({ skills }: { skills: string[] }) => (
    <div className={cn("mt-4 flex flex-wrap gap-2")}>
        {skills.map((skill) => (
            <Tag key={skill} skill={skill} />
        ))}
    </div>
);
TagCloud.displayName = 'SkillTagCloud';

export default TagCloud;
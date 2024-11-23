import type { WorkExperience } from "@/types/types";
import TimelineItem from "./TimelineItem";
import { memo } from "react";

export const Timeline = memo(({ experiences }: { experiences: WorkExperience[] }) => {
    return (
        <div className="relative" role="list" aria-label="Work Experience Timeline">
            {experiences.map((experience) => (
                <TimelineItem
                    key={experience.id}
                    {...experience}
                />
            ))}
        </div>
    );
});

Timeline.displayName = 'Timeline';
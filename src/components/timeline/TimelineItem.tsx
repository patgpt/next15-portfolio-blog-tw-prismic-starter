
import { memo } from "react";
import { AnimateOnScroll } from "../AnimateOnScroll";
import Link from "next/link";
import TimelineMarker from "./TimelineMarker";
import ContentCard from "./ContentCard";
import type { WorkExperience } from "@/types/types";

const TimelineItem = memo(({ title, company, duration, description, technologies, logo, slug }: WorkExperience) => {
    return (
        <AnimateOnScroll className="group">
            <Link href={`/experience/${slug}`} className="block mb-12 last:mb-0"> {/* Added margin bottom */}
                <div className="relative pl-6 md:pl-32 pb-8 last:pb-0" role="listitem">
                    <TimelineMarker />
                    <div className="flex items-start gap-6">
                        <ContentCard
                            title={title}
                            company={company}
                            duration={duration}
                            description={description}
                            technologies={technologies}
                            logo={logo} id={slug} slug={slug} />
                    </div>
                </div>
            </Link>
        </AnimateOnScroll>
    );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
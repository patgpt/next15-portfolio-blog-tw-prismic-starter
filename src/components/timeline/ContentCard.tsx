import type { WorkExperience } from "@/types/types";
import TagCloud from "../tag-cloud/TagCloud";
import DescriptionList from "./DescriptionList";
import Logo from "./Logo";

const ContentCard = ({ title, company, duration, description, technologies, logo }: WorkExperience) => (
    <div className="mb-6 glass rounded-xl p-4 md:p-6 group-hover:glow transition-all duration-300 flex-1 motion-safe:animate-fade-in">
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-base text-gray-700 dark:text-white/70">{company}</p>
                    <p className="text-sm text-gray-600 dark:text-white/60">{duration}</p>
                </div>
                {logo && <Logo logo={logo} company={company} />}
            </div>
            <DescriptionList description={description} />
            <TagCloud skills={technologies} />
        </div>
    </div>
);


ContentCard.displayName = 'ContentCard';
export default ContentCard;
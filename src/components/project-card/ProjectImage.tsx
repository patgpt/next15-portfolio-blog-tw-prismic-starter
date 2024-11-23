import { cn } from "@/utils/cn";
import Image from "next/image";

const ProjectImage = ({ image, alt }: { image: string; alt: string }) => (
    <div className={cn("relative aspect-[16/9] w-full")}>
        <Image
            src={image}
            alt={alt}
            fill
            className={cn("object-cover group-hover:scale-105 transition-transform duration-300")}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
        />
    </div>
);

ProjectImage.displayName = 'ProjectImage';

export default ProjectImage;
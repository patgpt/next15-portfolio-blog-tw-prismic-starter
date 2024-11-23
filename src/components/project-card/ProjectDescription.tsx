import { cn } from "@/utils/cn";
import React from "react";

const ProjectDescription = ({ description }: { description: string }) => (
    <p className={cn("mt-2 text-gray-600 dark:text-gray-300 line-clamp-2")}>{description}</p>
);

ProjectDescription.displayName = 'ProjectDescription';

export default ProjectDescription;

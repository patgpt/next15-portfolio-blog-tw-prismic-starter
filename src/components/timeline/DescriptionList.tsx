const DescriptionList = ({ description }: { description: string[] }) => (
    <ul className="space-y-2 list-disc pl-4 marker:text-gray-400">
        {description.map((item, index) => (
            <li key={index} className="text-sm md:text-base text-gray-600 dark:text-white/70">
                {item}
            </li>
        ))}
    </ul>
);

export default DescriptionList;
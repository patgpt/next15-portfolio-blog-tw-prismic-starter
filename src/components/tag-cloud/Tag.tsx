
interface TagProps {
    skill: string;
}

const Tag = ({ skill }: TagProps) => {
    return (
        <span className="px-3 py-1 text-sm rounded-full glass text-gray-800 dark:text-gray-200">
            {skill}
        </span>
    );
};


Tag.displayName = 'Tag';
export default Tag;
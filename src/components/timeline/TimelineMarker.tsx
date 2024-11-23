const TimelineMarker = () => {
    const lineClasses =
        "absolute left-[5px] md:left-24 top-0 h-full w-[2px] bg-gray-200 dark:bg-white/20 " +
        "group-hover:bg-primary-light dark:group-hover:bg-primary-light transition-colors duration-300";

    const dotClasses =
        "absolute left-0 md:left-[91px] top-2 h-3 w-3 rounded-full bg-gray-200 " +
        "dark:bg-purple-600/20 ring-2 ring-gray-300 dark:ring-purple-500/40 " +
        "group-hover:bg-primary-light dark:group-hover:bg-primary-light " +
        "group-hover:ring-primary-light dark:group-hover:ring-primary-light " +
        "transition-colors duration-300";

    return (
        <>
            <div className={lineClasses} aria-hidden="true" />
            <div className={dotClasses} aria-hidden="true" />
        </>
    );
};

TimelineMarker.displayName = 'TimelineMarker';
export default TimelineMarker;
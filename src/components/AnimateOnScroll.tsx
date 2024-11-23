"use client"
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const AnimateOnScroll = ({ children, className = '', delay = 0 }: AnimateOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ 
                duration: shouldReduceMotion ? 0 : 0.5,
                delay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
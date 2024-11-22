"use client";
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';
import type { AriaButtonProps } from '@react-aria/button';
import type { FocusRingProps } from '@react-aria/focus';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
    href?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    variant = 'primary',
    href,
    children,
    size = 'md'
}: ButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const { buttonProps } = useButton({ elementType: 'a', href }, ref);
    const { isFocusVisible, focusProps } = useFocusRing();

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg"
    };

    const variants = {
        primary: "glass border-transparent bg-foreground text-background hover:bg-foreground/90 dark:shadow-primary-light/20",
        secondary: "glass border-foreground/10 hover:bg-foreground/5 dark:border-white/20 dark:hover:bg-white/10",
        gradient: "glass backdrop-blur-md bg-white/20 dark:bg-black/20 border-white/30 dark:border-white/10 text-foreground shadow-xl hover:bg-white/30 dark:hover:bg-black/30",
        outline: "glass border-primary-dark dark:border-primary-light text-foreground hover:bg-primary-dark/10 dark:hover:bg-primary-light/10"
    };

    const baseStyles = `rounded-full border border-solid transition-all duration-300 font-medium ${sizes[size]}`;

    const motionProps: HTMLMotionProps<"a"> = {
        whileHover: {
            scale: 1.05,
            boxShadow: variant === 'gradient'
                ? "0 8px 32px rgba(255, 255, 255, 0.3)"
                : "0 8px 32px rgba(var(--primary-light), 0.3)"
        },
        whileTap: { scale: 0.98 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 }
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            className={`${baseStyles} ${variants[variant]} ${isFocusVisible ? 'ring-2 ring-offset-2' : ''}`}
            {...motionProps}
            {...(buttonProps as AriaButtonProps<'a'>)}
            {...(focusProps as FocusRingProps)}
        >
            {children}
        </motion.a>
    );
}
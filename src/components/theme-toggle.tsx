'use client'

import { useButton } from '@react-aria/button'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const iconVariants = {
    initial: { scale: 0, opacity: 0, rotate: -180 },
    enter: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: 180 }
}

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const prefersReducedMotion = useReducedMotion()
    const ref = useRef<HTMLButtonElement>(null)
    const { theme, setTheme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

    const onToggle = useCallback(() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }, [currentTheme, setTheme])

    const { buttonProps } = useButton({
        'aria-label': `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`,
        onPress: onToggle
    }, ref)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-8 h-8" aria-hidden="true" />
        )
    }

    return (
        <button
            ref={ref}
            {...buttonProps}
            className="rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
        >
            <AnimatePresence mode="wait" initial={false}>
                {currentTheme === 'dark' ? (
                    <motion.div
                        key="dark"
                        variants={prefersReducedMotion ? {} : iconVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                    >
                        <RiMoonFill color='yellow' className="w-4 h-4" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="light"
                        variants={prefersReducedMotion ? {} : iconVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                    >
                        <RiSunFill color='purple' className="w-4 h-4" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}
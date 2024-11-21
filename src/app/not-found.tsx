'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import MatrixRain from '@/components/MatrixRain'
/**
 * Custom 404 Not Found page component with interactive animations.
 * 
 * @component
 * @returns {JSX.Element} A styled 404 page with matrix effect and animations
 * 
 * @example
 * ```tsx
 * <NotFound />
 * ```
 * 
 * @description
 * Features:
 * - Interactive matrix rain effect that can be toggled
 * - Animated 404 text with glitch effect
 * - Bouncing emoji character
 * - Animated text reveal
 * - Interactive home button with hover/tap animations
 * - Responsive layout using Tailwind CSS
 */
export default function NotFound() {
    const [showMatrix, setShowMatrix] = useState(false)

    return (
        <>
            <AnimatePresence>
                {showMatrix && <MatrixRain />}
            </AnimatePresence>

            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-6xl font-bold glitch mb-8" data-text="404">
                        404
                    </h1>

                    <motion.div
                        className="character text-6xl mb-8"
                        animate={{
                            rotate: [0, 10, -10, 10, 0],
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        👾
                    </motion.div>

                    <motion.p
                        className="text-2xl font-medium mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Oops! You&apos;ve found a glitch in the{' '}
                        <span
                            className="cursor-pointer hover:text-primary-light transition-colors"
                            onClick={() => setShowMatrix(true)}
                        >
                            matrix
                        </span>
                    </motion.p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/"
                            className="glass px-6 py-3 rounded-full text-lg font-medium glow"
                        >
                            Return Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

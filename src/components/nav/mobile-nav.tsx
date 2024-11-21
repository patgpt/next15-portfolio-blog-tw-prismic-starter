'use client'

import { useButton } from '@react-aria/button'
import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, OverlayContainer } from '@react-aria/overlays'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
import { NavigationItem } from './navigation-item'
import { navItems } from './nav-items'
import { ThemeToggle } from '../theme-toggle'

const drawerVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
}

const navListVariants = {
    closed: { opacity: 0 },
    open: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const navItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
}

/**
 * A mobile navigation component that provides a responsive drawer menu with animations.
 * 
 * @component
 * @example
 * ```tsx
 * <MobileNav />
 * ```
 * 
 * Features:
 * - Animated drawer menu using Framer Motion
 * - Accessible keyboard navigation with FocusScope
 * - Responsive design (hidden on desktop)
 * - Theme toggle integration
 * - Dismissible overlay
 * - ARIA compliant with useButton, useOverlay, and useDialog hooks
 * 
 * @returns A mobile navigation component with a button trigger and animated drawer
 */
export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const { buttonProps } = useButton({
        'aria-label': isOpen ? 'Close menu' : 'Open menu',
        onPress: () => setIsOpen(!isOpen)
    }, buttonRef)

    const { overlayProps } = useOverlay({
        isOpen,
        onClose: () => setIsOpen(false),
        isDismissable: true
    }, overlayRef)

    const { dialogProps } = useDialog({}, overlayRef)

    return (
        <>
            <button
                ref={buttonRef}
                {...buttonProps}
                className="md:hidden z-50"
            >
                {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu4Line className="w-6 h-6" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <OverlayContainer>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <FocusScope contain restoreFocus autoFocus>
                            <motion.div
                                variants={drawerVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                transition={{ type: 'spring', damping: 20 }}
                                className="fixed right-0 top-0 h-full w-[min(20rem,calc(100vw-2rem))] glass z-50"
                            >
                                <div
                                    ref={overlayRef}
                                    {...overlayProps}
                                    {...dialogProps}
                                >
                                    <motion.nav
                                        variants={navListVariants}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="flex flex-col gap-2 p-4 pt-20"
                                    >
                                        {navItems.map((item) => (
                                            <motion.div key={item.href} variants={navItemVariants}>
                                                <NavigationItem
                                                    {...item}
                                                    onClick={() => setIsOpen(false)}
                                                />
                                            </motion.div>
                                        ))}
                                        <ThemeToggle />
                                    </motion.nav>
                                </div>
                            </motion.div>
                        </FocusScope>
                    </OverlayContainer>
                )}
            </AnimatePresence>
        </>
    )
}
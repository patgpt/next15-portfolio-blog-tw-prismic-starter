
'use client'

import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import type { IconType } from 'react-icons'

interface NavItemProps {
    href: string
    icon: IconType
    label: string
    onClick?: () => void
}
/**
 * NavigationItem component renders a navigation link with an icon and label.
 * It uses `next/link` for client-side navigation and `framer-motion` for animations.
 * The component also supports hover and active states.
 *
 * @component
 * @param {string} href - The URL to navigate to when the item is clicked.
 * @param {IconType} icon - The icon to display in the navigation item.
 * @param {string} label - The label to display in the navigation item.
 * @param {() => void} [onClick] - Optional click handler for the navigation item.
 *
 * @returns {JSX.Element} The rendered navigation item component.
 */
export function NavigationItem({ href, icon: Icon, label, onClick }: NavItemProps) {
    const pathname = usePathname()
    const isActive = pathname === href
    const ref = useRef<HTMLSpanElement>(null)
    const { hoverProps, isHovered } = useHover({})
    const { buttonProps } = useButton({
        elementType: 'span',
        onPress: onClick
    }, ref)

    return (
        <Link className='mr-2' href={href}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span
                    ref={ref}
                    {...buttonProps}
                    {...hoverProps}
                    className={`flex items-center gap-2 cursor-pointer
            ${isActive ? 'bg-primary-light/20 border-primary-light' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                >
                    <Icon
                        className={`w-5 h-5 ${isActive || isHovered ? 'text-primary-light' : ''}`}
                    />
                    <span className={`font-medium ${isActive || isHovered ? 'text-primary-light' : ''}`}>
                        {label}
                    </span>
                </span>
            </motion.div>
        </Link>
    )
}

import React, { type ReactNode } from 'react'
import { Navigation } from './nav'
import { settings } from '@/app/layout'
/**
 * Header component that displays the site header with navigation.
 * 
 * @component
 * @returns {ReactNode} A header element containing the site name and navigation
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 * 
 * @description
 * The Header component renders a semantic header element with:
 * - Site name from settings
 * - Navigation component
 * - Responsive layout using Tailwind CSS
 * - Accessibility attributes for better screen reader support
 */
export default function Header(): ReactNode {
    return (
        <header role="banner" aria-label="Site header">
            <div className="container mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap justify-between md:justify-evenly items-center gap-4">
                <h1 className="text-2xl md:text-3xl font-bold truncate">
                    {settings.siteName}
                </h1>
                <Navigation />
            </div>
        </header>
    )
}

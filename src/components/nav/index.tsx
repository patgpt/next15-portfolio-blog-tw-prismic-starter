'use client'

import * as navigationItem from './navigation-item'
import { MobileNav } from './mobile-nav'
import { navItems } from './nav-items'
import { ThemeToggle } from '../theme-toggle'

/**
 * Navigation component that renders the main navigation bar of the application.
 * 
 * The component displays navigation items in two different layouts:
 * - Desktop view (md and larger screens): Shows all navigation items horizontally with a theme toggle
 * - Mobile view: Shows a mobile navigation component
 * 
 * @component
 * @returns {JSX.Element} A navigation bar with glass effect styling, containing navigation items
 * and theme toggle for desktop, and a mobile navigation for smaller screens
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */
export function Navigation() {
    return (
        <nav className="flex items-center gap-4 rounded-full px-4 py-2 glass border-2 border-1 shadow-2xl glow">
            <div className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                    <navigationItem.NavigationItem key={item.href} {...item} />
                ))}
                <ThemeToggle />
            </div>
            <MobileNav />
        </nav>
    )
}
'use client'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaBlog, FaCode } from 'react-icons/fa'

const navLinks = [
    { name: 'Home', href: '/', icon: FaHome },
    { name: 'About', href: '/about', icon: FaUser },
    { name: 'Blog', href: '/blog', icon: FaBlog },
    { name: 'Projects', href: '/projects', icon: FaCode }
]

export default function FooterNav() {
    return (
        <nav className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4 text-primary">Navigation</h3>
            <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                    <motion.li
                        key={link.name}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a href={link.href} className="hover:text-primary flex items-center gap-2">
                            <link.icon className="text-lg" />
                            {link.name}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </nav>
    )
}
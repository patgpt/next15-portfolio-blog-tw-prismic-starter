'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/patgpt' },
    { icon: FaTwitter, href: 'https://twitter.com/AGIManifesto' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/patgpt' }
]

export default function SocialLinks() {
    return (
        <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold mb-4 text-primary">Connect</h3>
            <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="text-2xl hover:text-primary"
                    >
                        <social.icon />
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
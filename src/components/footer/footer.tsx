import React from 'react'
import FooterNav from './FooterNav'
import SocialLinks from './SocialLinks'

export default function Footer() {
    return (
        <footer className="w-full py-8 backdrop-blur-md bg-background/80 border-t border-border supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <FooterNav />

                {/* Copyright */}
                <div className="text-center flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} PatGPT
                        <br />
                        All rights reserved
                    </p>
                </div>

                <SocialLinks />
            </div>
        </footer>
    )
}
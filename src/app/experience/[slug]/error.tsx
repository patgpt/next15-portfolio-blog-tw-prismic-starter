
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="py-16 text-center">
            <div className="max-w-4xl mx-auto glass rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
                <div className="flex gap-4 justify-center">
                    <button onClick={reset} className="px-4 py-2 rounded-full glass hover:glow">
                        Try again
                    </button>
                    <Link href="/" className="px-4 py-2 rounded-full glass hover:glow">
                        Return home
                    </Link>
                </div>
            </div>
        </div>
    )
}
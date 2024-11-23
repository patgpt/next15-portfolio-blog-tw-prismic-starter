
'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
/**
 * MatrixRain component renders a full-screen canvas with a Matrix-style rain animation.
 * 
 * The animation consists of falling characters from a predefined set, with a glowing effect
 * on the first character of each column. The canvas adjusts its size dynamically based on
 * the window size.
 * 
 * @component
 * 
 * @example
 * return (
 *   <MatrixRain />
 * )
 * 
 * @returns {JSX.Element} The MatrixRain component.
 * 
 * @remarks
 * - The component uses the `useRef` hook to reference the canvas element.
 * - The `useEffect` hook is used to initialize and handle the animation and window resize events.
 * - The `motion.div` from `framer-motion` is used to add fade-in and fade-out animations.
 * - Clicking on the component will reload the window.
 * 
 * @dependencies
 * - `react`
 * - `framer-motion`
 */
const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const chars = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number
        let columns: number[] = []
        let drops: number[] = []

        const initMatrix = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            const fontSize = 14
            const columns_count = Math.floor(canvas.width / fontSize)

            columns = Array(columns_count).fill(0)
            drops = Array(columns_count).fill(1)
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.font = '14px matrix'
            ctx.textRendering = 'geometricPrecision'
            ctx.fontStretch = 'ultra-condensed'

            for (let i = 0; i < columns.length; i++) {
                // Pick a random character
                const char = chars[Math.floor(Math.random() * chars.length)]

                // Calculate position
                const x = i * 14
                const y = drops[i] * 14

                // Add glow effect
                ctx.shadowBlur = 0
                ctx.shadowColor = 'transparent'

                // Add gradient effect to first character
                if (columns[i] === 0) {
                    ctx.fillStyle = '#fff' // Bright white for first char
                    ctx.shadowBlur = 10
                    ctx.shadowColor = '#0f0'
                } else {
                    const brightness = Math.max(0.5, (1 - columns[i] / 50))
                    ctx.fillStyle = `rgba(0, ${Math.floor(255 * brightness)}, 0, ${brightness})`
                }

                ctx.fillText(char, x, y)

                // Reset and randomize
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                    columns[i] = 0
                }

                drops[i]++
                columns[i]++
            }

            animationId = requestAnimationFrame(draw)
        }

        // Handle resize
        const handleResize = () => {
            initMatrix()
        }

        initMatrix()
        draw()
        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
        }
    }, [chars])

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.location.reload()}
        >
            <canvas
                ref={canvasRef}
                className="block"
            />
        </motion.div>
    )
}

export default MatrixRain
import { Button } from "@/components/Button";
import Image from "next/image";
export function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 sm:p-20">
            <main className="max-w-4xl mx-auto text-center">
                <Image
                    className="rounded-full mx-auto shadow-2xl animate-glow"
                    alt="Image of Patrick Kelly"
                    src="/pfp.webp"
                    width={350}
                    height={350}
                />
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-600 via-foreground to-purple-600 bg-300 bg-clip-text text-transparent animate-gradient">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                    I craft digital experiences with modern web technologies.
                    Focused on creating beautiful, responsive, and user-friendly applications.
                </p>

                <div className="flex gap-4 items-center justify-center flex-col sm:flex-row animate-fade-in [animation-delay:400ms]">
                    <Button variant="gradient" href="#contact" size="lg">
                        Get in Touch
                    </Button>
                    <Button variant="outline" href="#projects" size="lg">
                        View Projects
                    </Button>
                </div>
            </main>
        </div>
    );
}
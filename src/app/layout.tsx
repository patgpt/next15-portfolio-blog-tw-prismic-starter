import type { Metadata } from "next";
import { ThemeToggle } from '@/components/theme-toggle'

import { geistSans, geistMono } from "./fonts";
import "./globals.css";
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Personal website of Patrick Kelly, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground">
        <Providers>
          <div className="fixed top-4 right-4">
            <ThemeToggle />
          </div>
          <main className="prose dark:prose-invert max-w-none">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

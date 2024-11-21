import type { Metadata } from "next";
import { fontSans, fontMono } from "./fonts";
import "./globals.css";
import { Providers } from './providers'
import Header from "@/components/header";
import Footer from "@/components/footer";
export const settings = {
  siteName: "Patrick Kelly",
  title: "Create Next App",
  description: "Personal website of Patrick Kelly, a software engineer.",
}
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
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="bg-background text-foreground">
        <Providers>
          <Header />
          <main className="container mx-auto px-4 pt-24 prose dark:prose-invert">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}




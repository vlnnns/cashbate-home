// app/layout.tsx

// !!! ЗМІНА: Імпортуємо 'Viewport'
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
})
// !!! ЗМІНА: 'viewport' видалено звідси
export const metadata: Metadata = {
    title: "CASHBATE",
    description: "Risk-free home upgrades to sell your house faster",
};

// !!! ЗМІНА: 'viewport' тепер окремий експорт
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={clsx(`font-sans tracking-tight` , inter.variable,
            lexend.variable)}>
        <div className="flex flex-col min-h-screen">
            <ModalProvider>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </ModalProvider>
        </div>
        </body>
        </html>
    );
}
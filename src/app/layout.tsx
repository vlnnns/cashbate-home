// app/layout.tsx

// !!! ЗМІНА: Імпортуємо 'Viewport'
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins",
});

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
        <body className={`${poppins.variable} font-sans tracking-tight`}>
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
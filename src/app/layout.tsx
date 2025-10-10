import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Импортируем шрифт Poppins
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 2. Настраиваем шрифт Poppins
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-poppins", // Создаем CSS-переменную
});

export const metadata: Metadata = {
    title: "CASHBATE",
    description: "Risk-free home upgrades to sell your house faster",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        {/* 3. Применяем класс шрифта и межбуквенное расстояние */}
        <body className={`${poppins.variable} font-sans tracking-tight`}>
        <div className="flex flex-col min-h-screen">
            {/* Navbar будет на всех страницах */}
            <Navbar />

            {/* Здесь будет отображаться содержимое страницы (page.tsx) */}
            <main className="flex-grow">{children}</main>

            {/* Footer будет на всех страницах */}
            <Footer />
        </div>
        </body>
        </html>
    );
}


// БОЛЬШЕ НЕ 'use client'

import Link from 'next/link'
import Image from 'next/image'
// 1. Импортируем клиентские компоненты
import MainButton from '@/components/ui/MainButton'
import { MobileNavigation } from './MobileMenu'

// Ваши навигационные ссылки
const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: "What's Included", href: '/whats-included' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Why CASHBATE', href: '/why-cashbate' },
]

// 2. Основной компонент Navbar (Серверный)
export default function Navbar() {
    const LOGO_WIDTH = 150
    const LOGO_HEIGHT = 52

    return (
        <header className="relative z-50">
            {/* Этот каркас будет отрендерен на сервере,
                предотвращая сдвиг макета */}
            <div className="max-w-7xl mx-auto px-4">
                <nav className="relative z-50 flex h-20 items-center justify-between">
                    {/* Лого + десктоп-меню (Сервер) */}
                    <div className="flex items-center md:gap-x-12">
                        <Link href="/" className="-m-1.5 p-1.5" aria-label="CASHBATE">
                            <Image
                                src="/logos/logo.webp"
                                alt="CASHBATE logo"
                                // ИСПРАВЛЕНИЕ: 'w-auto' удален отсюда.
                                // h-10 сохраняет высоту.
                                className="h-11"
                                width={LOGO_WIDTH}
                                height={LOGO_HEIGHT}
                                priority
                            />
                        </Link>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-light text-gray-700 hover:text-blue-500"
                                    prefetch={false}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3. Клиентские компоненты, гидрирующиеся "на месте" */}
                    <div className="flex items-center gap-x-5">
                        {/* div-обертка рендерится на сервере, резервируя место */}
                        <div className="hidden lg:block">
                            <MainButton text="Get Started Risk Free >>" />
                        </div>

                        {/* div-обертка рендерится на сервере */}
                        <div className="lg:hidden">
                            <MainButton text="Get Started" />
                        </div>

                        {/* div-обертка рендерится на сервере */}
                        <div className="-mr-1 lg:hidden">
                            <MobileNavigation navigation={navigation} />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


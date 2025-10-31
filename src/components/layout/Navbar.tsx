// БОЛЬШЕ НЕ 'use client'

// Убираем импорты Popover, clsx, MainButton
import Link from 'next/link'
import Image from 'next/image'
// 1. Импортируем новый клиентский компонент
import { MobileMenu } from './MobileMenu'

// Ваши навигационные ссылки
const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: "What's Included", href: '/whats-included' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Why CASHBATE', href: '/why-cashbate' },
]

// 2. Функции MobileNavLink, MobileNavIcon, MobileNavigation ПЕРЕНЕСЕНЫ в MobileMenu.tsx

// 3. Основной компонент Navbar (теперь Серверный)
export default function Navbar() {
    const LOGO_WIDTH = 160
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
                                src="/logos/logo.png"
                                alt="CASHBATE logo"
                                className="h-10 w-auto"
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

                    {/* 4. Вставляем Клиентский компонент,
                        который "гидрируется" на этом месте */}
                    <div className="flex items-center gap-x-5">
                        <MobileMenu navigation={navigation} />
                    </div>
                </nav>
            </div>
        </header>
    )
}


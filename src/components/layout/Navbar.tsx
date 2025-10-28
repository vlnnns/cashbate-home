'use client'

// 1. Імпортуйте 'useState' та 'useEffect'
import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MainButton from '@/components/ui/MainButton'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: "What's Included", href: '/whats-included' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Why CASHBATE', href: '/why-cashbate' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // 2. Додаємо стан, щоб відстежити, чи компонент "змонтований"
    const [isMounted, setIsMounted] = useState(false)

    // 3. Встановлюємо 'isMounted' в 'true' тільки на клієнті
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const LOGO_WIDTH = 160;
    const LOGO_HEIGHT = 52;

    return (
        <header className={`relative z-50 transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto px-4">
                {/* Logo and Desktop Links */}
                <div className="flex items-center gap-x-12">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">CASHBATE</span>
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
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-gray-900 hover:text-blue-500"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- Блок кнопок --- */}
                <div className="flex items-center gap-x-4">

                    {/* Кнопка для ДЕСКТОПУ */}
                    <div className="hidden lg:block">
                        <MainButton text="Get Started Risk Free >>" />
                    </div>

                    {/* Кнопки для МОБІЛЬНОЇ ВЕРСІЇ */}
                    <div className="flex items-center gap-x-2 lg:hidden">

                        {/* 5. ВИПРАВЛЕНО: Текст кнопки скорочено та додано стилі для мобільної версії */}
                        <MainButton
                            text="Get Started"
                            className="py-2 px-4 text-sm" // Робить кнопку меншою
                        />

                        {/* 6. ВИПРАВЛЕНО: Додано 'p-2' для збільшення області кліку */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-700"
                        >
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu (Без змін) */}
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50"
                    onClose={() => setMobileMenuOpen(false)}
                >
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-out duration-300"
                        enterFrom="-translate-y-full opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition ease-in duration-200"
                        leaveFrom="translate-y-0 opacity-100"
                        leaveTo="-translate-y-full opacity-0"
                    >
                        <Dialog.Panel className="fixed inset-0 bg-white flex flex-col p-6">
                            <div className="flex items-center justify-between mb-8">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">CASHBATE</span>
                                    <Image
                                        src="/logos/logo.png"
                                        alt="CASHBATE logo"
                                        className="h-8 w-auto"
                                        width={LOGO_WIDTH}
                                        height={LOGO_HEIGHT}
                                    />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-md p-2.5 text-gray-700 cursor-pointer"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-y-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="cursor-pointer block text-lg font-semibold text-gray-900 hover:text-blue-500"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <MainButton text="Get Started Risk Free >>" />
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </header>
    )
}
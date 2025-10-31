'use client'

import { useState, Fragment } from 'react'
import { Dialog } from '@headlessui/react'
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

    const LOGO_WIDTH = 160
    const LOGO_HEIGHT = 52

    return (
        <header className="relative z-50">
            {/* фиксируем высоту шапки, чтобы не было сдвигов */}
            <nav className="flex h-20 items-center justify-between max-w-7xl mx-auto px-4">
                {/* Лого + десктоп-меню */}
                <div className="flex items-center gap-x-12">
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

                {/* Кнопки */}
                <div className="flex items-center gap-x-4">
                    {/* Десктоп */}
                    <div className="hidden lg:block">
                        <MainButton text="Get Started Risk Free >>" />
                    </div>

                    {/* Мобилка */}
                    <div className="flex items-center gap-x-2 lg:hidden">
                        <MainButton text="Get Started" />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
                            aria-label="Open menu"
                        >
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Мобильное меню БЕЗ анимаций/Transition */}
            {mobileMenuOpen && (
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                >
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                    <Dialog.Panel className="fixed inset-0 bg-white flex flex-col p-6">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" className="-m-1.5 p-1.5" aria-label="CASHBATE">
                                <Image
                                    src="/logos/logo.png"
                                    alt="CASHBATE logo"
                                    className="h-8 w-auto"
                                    width={LOGO_WIDTH}
                                    height={LOGO_HEIGHT}
                                    priority
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-md p-2.5 text-gray-700"
                                aria-label="Close menu"
                            >
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-y-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-lg font-semibold text-gray-900 hover:text-blue-500"
                                    prefetch={false}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <MainButton text="Get Started Risk Free >>" />
                        </div>
                    </Dialog.Panel>
                </Dialog>
            )}
        </header>
    )
}

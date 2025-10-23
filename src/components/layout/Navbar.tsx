'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MainButton from '@/components/ui/MainButton'
import Link from 'next/link'
import Image from 'next/image' // 1. Імпортуйте 'Image'

const navigation = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: "What's Included", href: '/whats-included' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Why CASHBATE', href: '/why-cashbate' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const LOGO_WIDTH = 140;
    const LOGO_HEIGHT = 32;

    return (
        <header className="relative z-50">
            <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto px-4">
                {/* Logo and Desktop Links */}
                <div className="flex items-center gap-x-12">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">CASHBATE</span>
                        <Image
                            src="/logos/logo.png"
                            alt="CASHBATE logo"
                            className="h-8 w-auto"
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

                {/* --- !!! ЗМІНЕНО: Блок кнопок --- */}
                <div className="flex items-center gap-x-4">

                    {/* Кнопка для ДЕСКТОПУ (залишається незмінною) */}
                    <div className="hidden lg:block">
                        <MainButton text="Get Started Risk Free >>" />
                    </div>

                    {/* Кнопки для МОБІЛЬНОЇ ВЕРСІЇ (lg:hidden) */}
                    {/* Додано 'flex' та 'gap-x-2' */}
                    <div className="flex items-center gap-x-2 lg:hidden">
                        {/* 1. Кнопка "Get Started" (маленька) */}
                        <MainButton text="Get Started Risk Free >>" />

                        {/* 2. Кнопка "Бургер" (відкрити меню) */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="cursor-pointer inline-flex items-center justify-center rounded-md text-gray-700"
                        >
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                {/* --- Кінець зміненого блоку --- */}
            </nav>

            {/* Fullscreen Mobile Menu (ТУТ ЗМІН НЕМАЄ) */}
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50"
                    onClose={() => setMobileMenuOpen(false)}
                >
                    {/* Backdrop */}
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
                        {/* Ця панель (відкрите меню) залишається без змін */}
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
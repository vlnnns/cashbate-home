'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MainButton from './MainButton';

const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: "What's Included", href: '#whats-included' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Why CASHBATE', href: '#why-cashbate' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="">
            <nav aria-label="Global" className=" flex  items-center justify-between py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-x-12">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">CASHBATE</span>
                        <img
                            alt="CASHBATE logo"
                            src="/logo.png"  // replace this with your logo image path
                            className="h-8 w-auto"
                        />
                    </a>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-blue-500">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Button on the Right */}
                <div className="flex items-center gap-x-4">
                    <MainButton text="Get Started Risk Free >>" link="#get-started" />

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dialog */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">CASHBATE</span>
                            <img
                                alt="CASHBATE logo"
                                src="/logo.png"  // replace with your logo path
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import MainButton from '@/components/ui/MainButton'; // Исправлен путь на абсолютный
import React from "react";
import Link from 'next/link'; // 1. Не забудьте імпортувати Link

const faqs = [
    {
        question: "Do I have to pay anything upfront?",
        answer:
            "No. CASHBATE covers cosmetic upgrades up to the base solution value, with payment at closing. If costs go beyond that, the seller covers the difference at the time of work.",
    },
    {
        question: 'What happens if my home doesn’t sell?',
        answer:
            'If your qualified home doesn’t sell within 6 months at market price, you owe $0 for our contribution.',
    },
    {
        question: 'Can I use CASHBATE if I already have an agent?',
        answer:
            'Yes. If you already have an agent, we’ll work with them. If not, we’ll connect you with a trusted CASHBATE partner agent.',
    },
]

export default function Faq() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
                        Got Questions?
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <DisclosureButton className="group flex w-full cursor-pointer items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold">{faq.question}</span>
                                                <span className="relative ml-6 flex h-7 w-7 items-center justify-center">
                                                    {/* Плюс: поворачивается и исчезает */}
                                                    <PlusSmallIcon
                                                        aria-hidden="true"
                                                        className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                                                    />
                                                    {/* Минус: появляется и поворачивается в исходное положение */}
                                                    <MinusSmallIcon
                                                        aria-hidden="true"
                                                        className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                                                    />
                                                </span>
                                            </DisclosureButton>
                                        </dt>
                                        <Transition
                                            enter="transition-all duration-300 ease-in-out"
                                            enterFrom="opacity-0 -translate-y-2 max-h-0"
                                            enterTo="opacity-100 translate-y-0 max-h-screen"
                                            leave="transition-all duration-300 ease-in-out"
                                            leaveFrom="opacity-100 translate-y-0 max-h-screen"
                                            leaveTo="opacity-0 -translate-y-2 max-h-0"
                                        >
                                            <DisclosurePanel as="dd" className="mt-2 pr-12 overflow-hidden">
                                                <p className="text-base text-gray-600">{faq.answer}</p>
                                            </DisclosurePanel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                    {/* Контейнер для центрирования кнопки */}
                    <div className="mt-20 flex justify-center">
                        <Link
                            href="/faqs" // 3. Вкажіть ваше посилання (я припустив, що це /faqs)

                            // 4. Ось стилі, скопійовані з вашої основної кнопки
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-12 px-6 sm:px-8 font-medium text-base bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md"
                        >
                            See All FAQs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


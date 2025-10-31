// components/WhatIsIncludedSection.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';

export default function WhatIsIncludedSection() {
    const { openModal } = useModal(); // 3. Отримайте функцію openModal з контексту
    return (
        <section className="relative pt-24 sm:pt-32  overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/included.png" // !!! ШЛЯХ ДО ВАШОГО ЗОБРАЖЕННЯ !!!
                    alt="Happy couple reviewing documents"
                    fill
                    className="object-cover object-[65%_50%] sm:object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>

            {/* Контент секції */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">

                    {/* Блок з текстом (зліва) */}
                    <div className="max-w-2xl">
                        <h2 className="text-4xl sm:text-6xl leading-tight">
                            <span className="font-semibold">What&apos;s <br />
                            Included <br /></span>
                            <span className="font-thin">With CASHBATE</span>
                        </h2>
                        <p className="mt-6 text-sm sm:text-md max-w-xl font-light">
                            Every home is different. CASHBATE covers cosmetic upgrades up to the
                            base package value, with no upfront cost for covered work. The exact
                            scope is determined during your pre-qualification review, based on your
                            home&apos;s condition and what will make the biggest impact on your sale.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <button
                            type="button"
                            onClick={openModal}
                            className="inline-flex items-center justify-center
                       bg-white text-gray-800 font-semibold
                        py-2 px-4 text-sm rounded-full
                       shadow-lg hover:scale-105 transition-transform
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                        >
                            See If Your Home Qualifies
                        </button>
                    </div>
                </div>

                {/* Блок з додатковою інформацією внизу (без змін) */}
                <div className="mt-20 md:mt-40 flex justify-center">
                    <div className="p-4 sm:p-6 bg-white/20 backdrop-blur-sm rounded-t-3xl max-w-lg text-xs text-white/60">
                        If essential updates exceed the package value, those items must be
                        covered by the seller at the time of work. For example, if kitchen flooring
                        needs replacement, we can&apos;t just update the cabinets without it.
                    </div>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import Link from 'next/link';

// Іконка стрілки для кнопки
const ArrowRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default function ReadyToSeeQualifies() {
    return (
        // 1. Зробіть секцію 'relative', щоб дочірні 'absolute' елементи
        //    позиціонувалися відносно неї.
        //    Додано 'bg-gray-900' як запасний фон на час завантаження зображення.
        <section className="relative  overflow-hidden" style={{
            backgroundImage: `url('/blue-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'}}>


            <div className="relative z-10 max-w-3xl mx-auto text-center py-20 sm:py-36 px-4 sm:px-6 lg:px-8 " >

                {/* Заголовок */}
                <h2 className="text-4xl font-medium text-white tracking-tight">
                    Ready to see if your home qualifies?
                </h2>

                {/* Кнопка CTA */}
                <div className="mt-8">
                    <Link
                        href="/check" // Замініть на ваше посилання
                        className="inline-flex items-center justify-center gap-x-2
                                   bg-white text-neutral-700 font-medium
                                   px-8 py-3.5 rounded-full
                                   shadow-lg hover:scale-105 transition-transform"
                    >
                        Get Started Risk Free
                        <ArrowRightIcon />
                    </Link>
                </div>

            </div>
        </section>
    );
}
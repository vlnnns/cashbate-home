"use client";

import React from 'react';
// --- Імпорт Swiper ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Дані для карток (не змінено)
const differenceData = [
    {
        title: "No Credit. No Loan.",
        description: "CASHBATE is not financing. You never take on debt or monthly payments. Our contribution is only repaid if your home sells.",
    },
    {
        title: "Risk-Sharing, Not Contracting.",
        description: "We share the risk with you. If your home doesn’t sell within 6 months at market price, you owe $0 for our contribution.",
    },
    {
        title: "Licensed Contractors, Not DIY.",
        description: "All updates are completed by vetted, licensed, and insured contractors. CASHBATE is not a contractor — we provide the incentive and structure, not the labor.",
    },
    {
        title: "Focused on ROI.",
        description: "We only recommend cosmetic updates that increase your home’s appeal and market value — maximizing results at minimum cost.",
    },
    {
        title: "Free CMA Report",
        description: "If you don’t already have a real estate agent, CASHBATE connects you with a trusted local partner who provides a free Comparative Market Analysis (CMA) report. This shows what similar homes in your neighborhood have sold for, so you know your true market value before listing.",
    },
];

// --- СТРІЛКА ВЛІВО (ОНОВЛЕНО) ---
// Більше не приймає 'onClick'. Swiper керуватиме нею
// через клас "prev-arrow"
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

// --- СТРІЛКА ВПРАВО (ОНОВЛЕНО) ---
// Більше не приймає 'onClick'. Swiper керуватиме нею
// через клас "next-arrow"
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);


// Основний компонент секції
export default function DifferenceSection() {
    // --- useRef та функція scroll() видалені ---

    return (
        <section className=" py-20 sm:py-28 max-w-7xl mx-auto">
            <div className="px-4"> {/* Додано 'px-4' для мобільних */}
                {/* Заголовок */}
                <div className="text-center sm:text-left mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-700 tracking-tight">
                        What Makes
                        <br />
                        CASHBATE <span className="text-blue-600">Different</span>
                    </h2>
                </div>

                {/* --- ВПРОВАДЖЕННЯ SWIPER --- */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".next-arrow-diff", // Унікальні класи для кнопок
                            prevEl: ".prev-arrow-diff",
                        }}
                        loop={true}
                        spaceBetween={16} // Ваш 'space-x-4'
                        slidesPerView={1.2} // Мобільні
                        breakpoints={{
                            640: { // sm
                                slidesPerView: 2.5,
                            },
                            1024: { // lg
                                slidesPerView: 4,
                            },
                        }}
                        // Додаємо відступ знизу для тіні
                        className="pb-8"
                    >
                        {differenceData.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* 'w-72' та 'flex-shrink-0' більше не потрібні,
                                  Swiper керує цим.
                                */}
                                <div
                                    className="flex flex-col justify-between h-96 bg-white rounded-xl p-8 shadow-lg" // Додав 'shadow-lg'
                                >
                                    <div>
                                        <h3 className="text-2xl font-medium text-neutral-700">{item.title}</h3>
                                    </div>

                                    {/* Опис (нижня частина) */}
                                    <div>
                                        <p className="text-xs text-gray-500 leading-tight tracking-tight">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Кнопки навігації (додано унікальні класи) */}
                <div className="mt-8 flex justify-center sm:justify-start space-x-4">
                    <button
                        aria-label="Scroll left"
                        // Унікальний клас "prev-arrow-diff"
                        className="prev-arrow-diff h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500  hover:bg-neutral-300 transition"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        aria-label="Scroll right"
                        // Унікальний клас "next-arrow-diff"
                        className="next-arrow-diff h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500  hover:bg-neutral-300  transition"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}
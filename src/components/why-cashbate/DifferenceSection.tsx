"use client";

import React from 'react';
import Image from 'next/image';
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

// --- СТРІЛКА ВЛІВО (без змін) ---
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

// --- СТРІЛКА ВПРАВО (без змін) ---
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);


// Основний компонент секції
export default function DifferenceSection() {

    return (
        <section className=" py-20 sm:py-28 max-w-7xl mx-auto">
            <div className="px-4">
                {/* Заголовок (без змін) */}
                <div className="text-center sm:text-left mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-700 tracking-tight">
                        What Makes
                        <br />
                        CASHBATE <span className="text-blue-600">Different</span>
                    </h2>
                </div>

                {/* --- SWIPER (без змін) --- */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".next-arrow-diff",
                            prevEl: ".prev-arrow-diff",
                        }}
                        loop={true}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.5,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-8"
                    >
                        {differenceData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="flex flex-col justify-between h-100 bg-white rounded-xl p-6 shadow-lg"
                                >
                                    {/* Верхня частина (Заголовок) */}
                                    <div>
                                        {/* !!! ЗМІНЕНО: 'min-h-20' -> 'min-h-16' (зменшено для економії) */}
                                        <h3 className="text-2xl font-medium text-neutral-700 min-h-16">{item.title}</h3>
                                    </div>

                                    {/* Нижня частина (Іконка + Опис) */}
                                    <div>
                                        <Image
                                            src={`/puzzles/${index + 1}.png`}
                                            alt=""
                                            width={170} // Ваш розмір
                                            height={170} // Ваш розмір
                                            className="mb-3"
                                        />
                                        <p className="text-xs text-gray-500 leading-tight tracking-tight">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Кнопки навігації (без змін) */}
                <div className="mt-8 flex justify-center sm:justify-start space-x-4">
                    <button
                        aria-label="Scroll left"
                        className="prev-arrow-diff h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500  hover:bg-neutral-300 transition"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        aria-label="Scroll right"
                        className="next-arrow-diff h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500  hover:bg-neutral-300  transition"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </section>
    );
}
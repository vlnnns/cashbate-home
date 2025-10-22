"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- Імпорт Swiper ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ВИЗНАЧЕННЯ ТИПУ ДЛЯ АГЕНТА
interface Agent {
    name: string;
    agency: string;
    experience: string;
    image: string; // шлях з /public
}

// --- СТРІЛКА ВЛІВО (ОНОВЛЕНО) ---
const PrevArrow = () => (
    <button
        // Додано клас "prev-arrow" для Swiper
        className="prev-arrow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-neutral-800 bg-neutral-200 transition hover:bg-neutral-300"
        aria-label="Previous slide"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

// --- СТРІЛКА ВПРАВО (ОНОВЛЕНО) ---
const NextArrow = () => (
    <button
        className="next-arrow w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-neutral-800 bg-neutral-200 transition hover:bg-neutral-300"
        aria-label="Next slide"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

// КОМПОНЕНТ СЛАЙДЕРА АГЕНТІВ
const AgentsCarousel = () => {
    // НОВІ ДАНІ ДЛЯ АГЕНТІВ
    const agents: Agent[] = [
        { name: "Sarah Mitchell", agency: "– Keller Williams Realty", experience: "20+ years helping sellers in Northern Virginia", image: "/agent.png" },
        { name: "David Kim", agency: "– Compass", experience: "Top 1% producer, specializes in quick sales", image: "/agent.png" },
        { name: "Michelle Tran", agency: "– RE/MAX", experience: "Expert in digital marketing and staging", image: "/agent.png" },
        { name: "James Brown", agency: "– Long & Foster", experience: "Certified negotiation expert", image: "/agent.png" },
    ];

    return (
        <>
            <div className="w-full py-16 sm:py-24 overflow-hidden">
                <div className="max-w-5xl mx-auto px-4">

                    {/* НОВИЙ ЗАГОЛОВОК */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-700 tracking-normal leading-tight">
                            Top Local Agents,
                            <br />
                            Ready to Help
                        </h2>
                    </div>

                    {/* --- ВПРОВАДЖЕННЯ SWIPER --- */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".next-arrow",
                                prevEl: ".prev-arrow",
                            }}
                            loop={true}
                            spaceBetween={24}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2.2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="pb-8" // Додаємо відступ знизу для тіні
                        >
                            {agents.map((agent, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-2xl overflow-hidden text-center h-96 flex flex-col justify-between shadow-lg">

                                        {/* === ВЕРХНЯ ЧАСТИНА (Зображення + Основний текст) === */}
                                        <div>
                                            <div className="relative h-56 flex justify-center items-end pt-6 bg-white">
                                                <Image
                                                    src={agent.image}
                                                    alt={agent.name}
                                                    width={180}
                                                    height={180}
                                                    className="relative z-10 object-contain object-bottom"
                                                    priority={index < 3}
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="font-semibold text-lg text-gray-900">{agent.name}</h3>
                                                <p className="text-sm text-gray-600">{agent.agency}</p>
                                            </div>
                                        </div>

                                        {/* === НИЖНЯ ЧАСТИНА (Додатковий текст) === */}
                                        <div className="pb-6 px-6">
                                            <p className="text-xs text-gray-500 italic">
                                                &quot;{agent.experience}&quot;
                                            </p>
                                            {/* ^^^ ВИПРАВЛЕНО: Було </D> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* НИЖНІЙ БЛОК: КНОПКИ ТА CTA */}
                    <div className="flex flex-col items-center mt-12">
                        {/* Кнопки прокрутки */}
                        <div className="flex items-center gap-x-4">
                            <PrevArrow />
                            <NextArrow />
                        </div>

                        {/* Кнопка CTA */}
                        <Link
                            href="/connect-agent"
                            className="mt-8 inline-block bg-blue-600 text-white font-semibold px-14 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            No agent yet?
                        </Link>
                        <p className="mt-4 text-xs text-gray-400">
                            We&apos;ll connect you with one of our trusted partners.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AgentsCarousel;
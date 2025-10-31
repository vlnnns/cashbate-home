"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const differenceData = [
    {
        title: "No Credit. No Loan.",
        description:
            "CASHBATE is not financing. You never take on debt or monthly payments. Our contribution is only repaid if your home sells.",
        icon: "/puzzles/1.png",
    },
    {
        title: "Risk-Sharing, Not Contracting.",
        description:
            "We share the risk with you. If your home doesn’t sell within 6 months at market price, you owe $0 for our contribution.",
        icon: "/puzzles/2.png",
    },
    {
        title: "Licensed Contractors, Not DIY.",
        description:
            "All updates are completed by vetted, licensed, and insured contractors. CASHBATE provides structure, not labor.",
        icon: "/puzzles/3.png",
    },
    {
        title: "Focused on ROI.",
        description:
            "We only recommend cosmetic updates that increase your home’s appeal and value — maximizing results at minimum cost.",
        icon: "/puzzles/4.png",
    },
    {
        title: "Free CMA Report",
        description:
            "If you don’t already have an agent, CASHBATE connects you with a partner who provides a free CMA report for your area.",
        icon: "/puzzles/5.png",
    },
];

const ChevronLeftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

export default function DifferenceSection() {
    const [mounted, setMounted] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [slidesOffset, setSlidesOffset] = useState(16);

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            const width = window.innerWidth;
            setIsSmallMobile(width < 430);

            if (titleRef.current) {
                const left = titleRef.current.getBoundingClientRect().left;
                setSlidesOffset(left);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // observer для анимации
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 sm:py-28 overflow-hidden">
            {/* Header */}
            <div ref={titleRef} className="max-w-7xl mx-auto px-4">
                <div className="text-left mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-700 tracking-tight leading-tight">
                        What Makes
                        <br />
                        CASHBATE <span className="text-blue-600">Different</span>
                    </h2>
                </div>
            </div>

            {/* Пока не смонтировался — рисуем сеткой (чтобы не было hydration error) */}
            {!mounted ? (
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-4">
                    {differenceData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white px-5 py-10 rounded-3xl flex flex-col items-center justify-center text-center min-h-[360px]"
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="w-24 h-24 object-contain mb-5"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-[13px] leading-snug max-w-[260px] mx-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".next-arrow-diff",
                            prevEl: ".prev-arrow-diff",
                        }}
                        loop={!isSmallMobile} // отключаем loop на мобилке
                        speed={450}
                        slidesPerView={1.05}
                        spaceBetween={16}
                        slidesOffsetBefore={slidesOffset}
                        slidesOffsetAfter={slidesOffset}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                slidesOffsetBefore: 24,
                                slidesOffsetAfter: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesOffsetBefore: 0,
                                slidesOffsetAfter: 0,
                            },
                        }}
                        className="pb-8"
                    >
                        {differenceData.map((item, index) => {
                            const shouldBounce =
                                isInView && isSmallMobile && (index === 0 || index === 1);

                            const mobileMarginLeft = isSmallMobile ? "ml-4" : "";

                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`bg-white sm:ml-4 px-4 py-8 rounded-3xl flex flex-col items-center justify-center text-center min-h-[360px] h-full ${shouldBounce ? "animate-bounce-hint" : ""} ${mobileMarginLeft}`}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={130}
                                            height={130}
                                            className="w-28 h-28 object-contain mb-6"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-[13px] leading-snug max-w-[280px] mx-auto">
                                            {item.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>



                </div>
            )}

            {/* стрелки */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-8 flex justify-start space-x-4">
                    <button
                        aria-label="Scroll left"
                        className="prev-arrow-diff h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500 hover:bg-neutral-300 transition"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        aria-label="Scroll right"
                        className="next-arrow-diff h-10 w-10 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500 hover:bg-neutral-300 transition"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>


        </section>
    );
}

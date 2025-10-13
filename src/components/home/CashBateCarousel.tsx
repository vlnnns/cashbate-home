"use client"
import React, { useRef } from "react";
import Image from "next/image";

interface Slide {
    title: string;
    image: string; // путь из /public
}

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="custom-arrow prev-arrow" aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="custom-arrow next-arrow" aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const CashBateCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const slides: Slide[] = [
        { title: "Fresh interior paint", image: "/carousel/painting.jpg" },
        { title: "New or refinished flooring", image: "/carousel/flooring.jpg" },
        { title: "Kitchen touch-ups", image: "/carousel/kitchen.jpg" },
        { title: "Bathroom refresh", image: "/carousel/bathroom.jpg" },
        { title: "Minor repairs", image: "/carousel/repair.jpg" },
    ];

    const scroll = (direction: "left" | "right") => {
        const root = carouselRef.current;
        if (!root) return;
        const firstChild = root.children[0] as HTMLElement | undefined; // точнее берём ширину карточки
        const slideWidth = firstChild?.clientWidth ?? 0;
        const gap = 24; // p-3 с двух сторон = 12+12
        root.scrollBy({
            left: direction === "left" ? -(slideWidth + gap) : (slideWidth + gap),
            behavior: "smooth",
        });
    };

    return (
        <>
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .custom-arrow {
                    width: 40px; height: 40px; border-radius: 9999px;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; color: #333; background: #f0f0f0; transition: background-color .2s;
                }
                .custom-arrow:hover { background: #e0e0e0; }
            `}</style>

            <div className="bg-white w-full py-16 sm:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                            What Could Be Included <br /> With CASHBATE
                        </h2>
                        <p className="mt-4 md:mt-0 text-lg text-gray-600 max-w-md">
                            We focus on light cosmetic upgrades that make the biggest impact.
                        </p>
                    </div>

                    <div className="relative">
                        <div
                            ref={carouselRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar -mx-3"
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="flex-none w-full sm:w-[55%] md:w-[40%] lg:w-1/4 p-3 snap-center">
                                    <div className="h-[480px] relative rounded-2xl overflow-hidden text-white shadow-lg group">
                                        {/* ✅ Используем fill + sizes вместо width/height */}
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, (max-width: 1280px) 40vw, 25vw"
                                            className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                                            priority={index === 0} // чуть быстрее для первого
                                        />
                                        <div className="absolute top-0 left-0 p-6 w-full">
                                            <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-3xl font-semibold w-2/3 drop-shadow-sm">{slide.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-16">
                        <p className="text-left text-xs sm:text-sm mr-10 sm:mr-0 text-gray-500 sm:max-w-sm">
                            Final upgrades depend on your home&apos;s condition and the improvements most likely to maximize value.
                        </p>
                        <div className="flex items-center gap-x-4">
                            <PrevArrow onClick={() => scroll("left")} />
                            <NextArrow onClick={() => scroll("right")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CashBateCarousel;

"use client"
import React, { useRef } from 'react';
import Image from 'next/image'

interface CarouselSlide {
    image: string;
    alt: string;
}

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="cursor-pointer w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors flex items-center justify-center shadow-md"
        aria-label="Previous image"
        type="button"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="cursor-pointer w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors flex items-center justify-center shadow-md"
        aria-label="Next image"
        type="button"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const ImageCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const slides: CarouselSlide[] = [
        { image: '/carousel2/1.png', alt: 'Empty room with wooden floor and moving boxes' },
        { image: '/carousel2/2.png', alt: 'Modern living room with kitchen in the background' },
    ];

    const scroll = (direction: 'left' | 'right') => {
        const root = carouselRef.current;
        if (!root) return;
        const amount = root.clientWidth * 0.75;
        root.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <section className="relative bg-black w-full py-16 sm:py-24">
                {/* Контейнер для текста и стрелок */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                            Featured Interiors
                        </h2>
                        <div className="flex items-center gap-x-4">
                            <PrevArrow onClick={() => scroll('left')} />
                            <NextArrow onClick={() => scroll('right')} />
                        </div>
                    </div>
                </div>

                {/* Контейнер карусели — тянется на всю ширину экрана */}
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-black">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory space-x-6 touch-pan-x px-[calc((100vw-80rem)/2)]"
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-none w-[70%]  snap-center"
                            >
                                <div className="relative h-[420px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        sizes="(max-width: 840px) 92vw, (max-width: 1024px) 83vw, (max-width: 1280px) 66vw, 60vw"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImageCarousel;

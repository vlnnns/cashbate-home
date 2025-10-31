"use client"
import React, { useRef } from 'react';
// Removed imports for next/image, swiper/react, and swiper/modules

interface CarouselSlide {
    image: string;
    alt: string;
}

// Reverted to simple arrow components without ref forwarding
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
    // Re-introduced the carouselRef for manual scrolling
    const carouselRef = useRef<HTMLDivElement>(null);

    // Updated slides array based on your query
    const slides: CarouselSlide[] = [
        { image: '/beforeAfter/1.png', alt: 'Empty room with wooden floor and moving boxes' },
        { image: '/beforeAfter/2.png', alt: 'Modern living room with kitchen in the background' },
        { image: '/beforeAfter/3.png', alt: 'Renovation of bathroom' },
    ];


    const scroll = (direction: 'left' | 'right') => {
        const root = carouselRef.current;

        if (!root || root.children.length === 0) return;

        // Get the first slide element to calculate its full width including margin
        const firstSlide = root.children[0] as HTMLElement;
        const slideStyle = window.getComputedStyle(firstSlide);

        // 'space-x-6' (24px) translates to 'margin-right'.
        // getComputedStyle will return this value in pixels.
        const slideMarginRight = parseFloat(slideStyle.marginRight);

        // clientWidth gives the element's width
        const slideWidth = firstSlide.clientWidth;

        // This is the total distance to scroll to get to the *exact* next slide
        const amount = slideWidth + slideMarginRight;

        root.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <style jsx global>{`
                /* Original scrollbar hide styles */
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                /* This CSS replicates the alignment padding from your original code.
                  It ensures the first slide aligns with the 'max-w-7xl' container above.
                */
                .carousel-container {
                    /* Default padding for small screens (matches px-4) */
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                /* On screens wider than 80rem (1280px, the size of max-w-7xl),
                  we calculate the padding needed to align the slides.
                */
                @media (min-width: 80rem) {
                    .carousel-container {
                        /* (100vw - 80rem) / 2 is the empty space on each side */
                        /* We add 1rem to match the px-4 on the text container */
                        padding-left: calc((100vw - 80rem) / 2 + 1rem);
                        padding-right: calc((100vw - 80rem) / 2 + 1rem);
                    }
                }
            `}</style>

            <section className="relative bg-black w-full py-16 sm:py-24 overflow-hidden">
                {/* Контейнер для текста и стрелок */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                            Featured Interiors
                        </h2>
                        <div className="flex items-center gap-x-4">
                            {/* Hooked up arrows to the manual scroll function */}
                            <PrevArrow onClick={() => scroll('left')} />
                            <NextArrow onClick={() => scroll('right')} />
                        </div>
                    </div>
                </div>

                {/* Контейнер карусели — full-width */}
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-black">
                    <div
                        ref={carouselRef}
                        // Added back the original scrolling classes and the new alignment class
                        className="flex overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory space-x-6 touch-pan-x carousel-container"
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                // Restored original slide classes
                                className="flex-none w-[85%] sm:w-[70%] snap-center"
                            >
                                <div className="relative aspect-video sm:aspect-auto sm:h-[420px] rounded-2xl overflow-hidden">
                                    {/* Replaced next/image with a standard <img> tag.
                                      Used CSS to replicate the `fill` and `object-cover` behavior.
                                    */}
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading={'lazy'}
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


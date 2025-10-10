"use client"
import React, { useRef } from 'react';

// Интерфейс для данных слайда
interface Slide {
    title: string;
    image: string;
}

// Компонент для кастомной стрелки "Назад"
const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="custom-arrow prev-arrow"
        aria-label="Previous slide"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

// Компонент для кастомной стрелки "Вперед"
const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="custom-arrow next-arrow"
        aria-label="Next slide"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);


const CashBateCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    // Данные для слайдов
    const slides: Slide[] = [
        {
            title: 'Fresh interior paint',
            image: '/carousel/painting.jpg',
        },
        {
            title: 'New or refinished flooring',
            image: '/carousel/flooring.jpg'
        },
        {
            title: 'Kitchen touch-ups',
            image: '/carousel/kitchen.jpg',
        },
        {
            title: 'Bathroom refresh',
            image: '/carousel/bathroom.jpg',

        },
        {
            title: 'Minor repairs',
            image: '/carousel/repair.jpg',
        },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const slideWidth = carouselRef.current.querySelector('div')?.clientWidth || 0;
            const scrollAmount = slideWidth + 24; // Ширина слайда + отступ

            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };


    return (
        <>
            {/* Глобальные стили для карусели и кнопок */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .custom-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #333;
                    background: #f0f0f0;
                    transition: background-color 0.2s;
                }
                .custom-arrow:hover {
                    background: #e0e0e0;
                }
            `}</style>

            <div className="bg-white w-full py-16 sm:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Заголовок секции */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                            What Could Be Included <br /> With CASHBATE
                        </h2>
                        <p className="mt-4 md:mt-0 text-lg text-gray-600 max-w-md">
                            We focus on light cosmetic upgrades that make the biggest impact.
                        </p>
                    </div>

                    {/* Карусель */}
                    <div className="relative">
                        <div
                            ref={carouselRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar -mx-3"
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="flex-none w-full sm:w-[55%] md:w-[40%] lg:w-1/4 p-3 snap-center">
                                    <div className="h-[480px] relative rounded-2xl overflow-hidden text-white shadow-lg group">
                                        {/* Фоновое изображение */}
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Контент карточки */}
                                        <div className="absolute top-0 left-0 p-6 w-full">
                                            <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-3xl font-semibold w-2/3">{slide.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-16">
                        {/* Нижний текст */}
                        <p className="text-left text-xs sm:text-sm mr-10 sm:mr-0 text-gray-500 sm:max-w-sm">
                            Final upgrades depend on your home&apos;s condition and the improvements most likely to maximize value.
                        </p>
                        {/* Кнопки навигации */}
                        <div className="flex items-center gap-x-4">
                            <PrevArrow onClick={() => scroll('left')} />
                            <NextArrow onClick={() => scroll('right')} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CashBateCarousel;


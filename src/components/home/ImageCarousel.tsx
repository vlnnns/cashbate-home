"use client"
import React, { useRef } from 'react';

// Интерфейс для данных слайда, в данном случае только изображение
interface CarouselSlide {
    image: string;
    alt: string;
}

// Компонент для кастомной стрелки "Назад"
const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors flex items-center justify-center"
        aria-label="Previous image"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

// Компонент для кастомной стрелки "Вперед"
const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors flex items-center justify-center"
        aria-label="Next image"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const ImageCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    // Данные для слайдов
    const slides: CarouselSlide[] = [
        {
            image: '/carousel2/1.png',
            alt: 'Empty room with wooden floor and moving boxes',
        },
        {
            image: '/carousel2/2.png',
            alt: 'Modern living room with kitchen in the background',
        },
    ];

    // Функция прокрутки
    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            // Прокручиваем на 75% ширины контейнера для плавного эффекта
            const scrollAmount = carouselRef.current.clientWidth * 0.75;

            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {/* Глобальные стили для скрытия скроллбара */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <section className="bg-black w-full py-16 sm:py-24 overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="relative">
                        {/* Контейнер карусели */}
                        <div
                            ref={carouselRef}
                            className="flex snap-x snap-mandatory scroll-smooth hide-scrollbar space-x-6"
                        >
                            {slides.map((slide, index) => (
                                // Увеличена ширина слайдов
                                <div key={index} className="flex-none w-11/12 sm:w-5/6 md:w-2/3 lg:w-3/5 snap-center">
                                    {/* Уменьшена высота контейнера изображения */}
                                    <div className="h-[380px] rounded-2xl overflow-hidden">
                                        <img
                                            src={slide.image}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Контейнер для навигации */}
                    <div className="max-w-7xl mx-auto flex items-center gap-x-4 mt-8">
                        <PrevArrow onClick={() => scroll('left')} />
                        <NextArrow onClick={() => scroll('right')} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImageCarousel;


"use client"
// components/CashBateCarousel.tsx
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Динамическая загрузка компонента Slider
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Импортируем стили для Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Slide {
    title: string;
    image: string;
    description: string;
}

const CashBateCarousel = () => {
    useEffect(() => {
        // Добавляем кастомный стиль, чтобы увеличить отступы между карточками
        const style = document.createElement('style');
        style.innerHTML = `
            .slick-slide {
                margin: 0 10px;  /* Увеличиваем расстояние между карточками */
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const slides: Slide[] = [
        {
            title: 'Fresh interior paint',
            image: '/images/paint.jpg', // Замените на правильный путь
            description: 'Brighten up your home with fresh paint.',
        },
        {
            title: 'New or refinished flooring',
            image: '/images/flooring.jpg',
            description: 'Update your space with stylish new floors.',
        },
        {
            title: 'Kitchen touch-ups',
            image: '/images/kitchen.jpg',
            description: 'Minor updates that transform your kitchen.',
        },
        {
            title: 'Bathroom refresh',
            image: '/images/bathroom.jpg',
            description: 'Make your bathroom feel like new again.',
        },
        {
            title: 'Minor repairs',
            image: '/images/repairs.jpg',
            description: 'Fix those little things that make a big difference.',
        },
    ];

    // Настройки слайдера
    const settings = {
        dots: true,  // Показывать точки
        infinite: true,  // Зациклить карусель
        speed: 500,  // Скорость прокрутки
        slidesToShow: 4,  // Отображать по одному слайду
        slidesToScroll: 1,  // Прокручивать по одному слайду
        autoplay: false,  // Автопрокрутка
        arrows: true,  // Показывать стрелки
    };

    return (
        <div className="cashbate-carousel container mx-auto px-6 py-12">
            <h2 className="text-center text-3xl font-semibold mb-6">What Could Be Included With CASHBATE</h2>

            {/* Используем компонент Slider */}
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">{slide.title}</h3>
                            <p className="text-gray-600 text-center">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            <p className="text-center text-sm text-gray-500 mt-4">
                Final upgrades depend on your home&aposs condition and the improvements most likely to maximize value.
            </p>
        </div>
    );
};

export default CashBateCarousel;

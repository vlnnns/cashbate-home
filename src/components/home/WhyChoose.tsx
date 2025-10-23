"use client"
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

// === КОМПОНЕНТ КАРТКИ (FeatureCard) ===
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (

    // !!! ЗМІНЕНО:
    // 1. Прибрано тіні: 'shadow-sm', 'hover:shadow-md', 'transition-all'
    // 2. Зменшено вертикальні відступи (padding) на моб: 'py-14' -> 'py-8 sm:py-12'
    // 3. 'px-6 sm:px-8' -> 'px-6' (однаковий відступ по горизонталі)
    <div className="bg-white px-6 py-8 sm:py-12 rounded-3xl flex flex-col items-center text-center h-full">
        {/* Icon */}
        <div className="mb-6 flex justify-center items-center">
            <Image
                src={icon}
                alt={`${title} icon`}
                width={80} // (Зберігаємо 80, className керуватиме розміром)
                height={80}

                // !!! ЗМІНЕНО: Зменшено розмір іконки на моб: 'w-20 h-20' -> 'w-16 h-16 sm:w-20 sm:h-20'
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
        </div>

        {/* Content */}
        <div className="max-w-[250px]">
            {/* !!! ЗМІНЕНО: Зменшено розмір заголовка на моб: 'text-2xl' -> 'text-xl sm:text-2xl' */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);


// === ОСНОВНИЙ КОМПОНЕНТ СЕКЦІЇ ===
const WhyChooseCashbateSection = () => {
    const features = [
        {
            icon: '/icon1.png',
            title: "Faster Sale",
            description: "Homes sell quicker with upgrades",
        },
        {
            icon: '/icon2.png',
            title: "Higher Offers",
            description: "Updated homes bring stronger comps",
        },
        {
            icon: '/icon3.png',
            title: "No Upfront Cost",
            description: "Pay at closing",
        },
        {
            icon: '/icon4.png',
            title: "Risk-Free Solution",
            description: "If your home doesn't sell, you owe $0 for our contribution",
        },
    ];

    return (
        // !!! ЗМІНЕНО: Зменшено відступи секції на моб: 'py-20' -> 'py-16 sm:py-20'
        <section className="py-16 sm:py-20 antialiased max-w-7xl mx-auto px-4">
            <div>
                {/* !!! ЗМІНЕНО: Зменшено заголовок секції на моб: 'text-4xl sm:text-5xl' -> 'text-3xl sm:text-5xl' */}
                <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-800 mb-12 lg:mb-16 leading-tight text-center">
                    Why Home Sellers <br className="sm:hidden" /> Choose CASHBATE
                </h2>

                {/* !!! ЗМІНЕНО: Зменшено 'gap-8' -> 'gap-6 sm:gap-8' */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseCashbateSection;
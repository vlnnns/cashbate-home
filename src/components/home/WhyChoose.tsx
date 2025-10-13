"use client"
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
    <div className="bg-white px-6 sm:px-8 py-14 rounded-3xl flex flex-col items-center text-center h-full shadow-sm hover:shadow-md transition-all">
        {/* Icon */}
        <div className="mb-6 flex justify-center items-center">
            <Image
                src={icon}
                alt={`${title} icon`}
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
            />
        </div>

        {/* Content */}
        <div className="max-w-[250px]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

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
        <section className="py-20 antialiased max-w-7xl mx-auto px-4">
            <div>
                <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-800 mb-12 lg:mb-16 leading-tight text-center">
                    Why Home Sellers <br className="sm:hidden" /> Choose CASHBATE
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

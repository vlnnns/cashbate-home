"use client";

import React from "react";

// Іконка, створена за допомогою SVG для чіткості та гнучкості.
const CheckCircleIcon = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0" // Запобігає стисканню іконки
    >
        {/* Зовнішнє кільце */}
        <circle cx="14" cy="14" r="13" stroke="white" strokeOpacity="0.9" strokeWidth="2" />
        {/* Внутрішнє коло */}
        <circle cx="14" cy="14" r="6" fill="white" fillOpacity="0.9" />
    </svg>
);


export default function KeyBenefitsSection() {
    const benefits = [
        "Licensed and insured contractors only",
        "Transparent cost coverage (up to base solution)",
        "No debt, no loan, no monthly payments",
    ];

    return (
        // Секція з градієнтним фоном, що відповідає вашому дизайну
        <section className="text-white" style={{
            backgroundImage: `url('/blue-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'}}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="space-y-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-x-4 sm:gap-x-6">
                            <CheckCircleIcon />
                            <p className="text-sm sm:text-xl font-normal leading-tight">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
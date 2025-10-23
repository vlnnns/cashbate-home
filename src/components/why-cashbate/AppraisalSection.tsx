import React from 'react';
import Image from 'next/image';

const appraisalStats = [
    { value: "30%", label: "Faster sales with updated kitchens/baths" },
    { value: "17%", label: "More offers for move-in ready homes" },
    { value: "60-70%", label: "ROI Interior Painting" },
    { value: "80%", label: "ROI Flooring Updates" }
];

export default function AppraisalSection() {
    return (
        // Залишається grid, але тепер без фіксованої висоти для секції
        <section className=" grid grid-cols-1 lg:grid-cols-2">

            {/* === Колонка із зображенням (ліва) === */}
            {/* !!! ЗМІНЕНО: Зменшено висоту на мобільному 'h-64' -> 'h-60'
                і прибрано 'sm:h-96'. 'lg:h-full' залишено для десктопу.
            !!! */}
            <div className="relative h-44 lg:h-full">
                <Image
                    src="/appraisal.png" // Шлях до вашого зображення
                    alt="Home appraisal and financing calculation"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-24 xl:px-20">
                {/* Внутрішній контейнер для обмеження ширини */}
                <div className="max-w-lg mx-auto lg:mx-0"> {/* Додано mx-auto lg:mx-0 для центрування на моб */}
                    <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-800 tracking-tight">
                        Stronger Appraisals,
                        <br />
                        Stronger Offers
                    </h2>

                    <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed"> {/* Змінено text-md на text-base, leading-normal на leading-relaxed */}
                        Small cosmetic upgrades don&apos;t just make your home look
                        better, they can also improve how appraisers view your
                        property. Fresh paint, updated flooring, and modern fixtures
                        align your home with recently sold comparables, which means
                        stronger appraisal support. That helps buyers feel confident,
                        lenders approve faster, and offers come in higher.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8">
                        {appraisalStats.map((stat) => (
                            // !!! ЗМІНЕНО: Класи тепер простіші - просто відступи !!!
                            <div key={stat.label}>
                                    <span className="block text-4xl sm:text-5xl font-medium text-neutral-800">
                                        {stat.value}
                                    </span>
                                <span className="block mt-2 text-sm text-gray-500">
                                        {stat.label}
                                    </span>
                            </div>
                        ))}
                    </div>

                    {/* Джерело */}
                    <p className="mt-12 text-xs text-gray-400 italic">
                        Sources: National Association of Realtors, Zillow Research, Appraisal Institute.
                    </p>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import Image from 'next/image';

// Дані для статистики (не змінилися)
const appraisalStats = [
    {
        value: "30%",
        label: "Faster sales with updated kitchens/baths"
    },
    {
        value: "17%",
        label: "More offers for move-in ready homes"
    },
    {
        value: "60-70%",
        label: "ROI Interior Painting"
    },
    {
        value: "80%",
        label: "ROI Flooring Updates"
    }
];

export default function AppraisalSection() {
    return (
        // ВИПРАВЛЕНО: Секція тепер є 'grid', що розтягується на всю ширину
        <section className=" grid grid-cols-1 lg:grid-cols-2">

            {/* === Колонка із зображенням (ліва) === */}
            {/* Цей 'div' не має відступів і змушує зображення
              прилипати до краю.
              'h-64 sm:h-96' - висота на моб, 'lg:h-full' - на десктопі
            */}
            <div className="relative h-64 sm:h-96 lg:h-full">
                <Image
                    // ЗАМІНІТЬ ЦЕЙ ШЛЯХ НА ВАШЕ ЗОБРАЖЕННЯ
                    src="/appraisal.png"
                    alt="Home appraisal and financing calculation"
                    fill // ВИПРАВЛЕНО: 'fill' заповнює батьківський 'div'
                    className="object-cover" // ВИПРАВЛЕНО: 'object-cover' масштабує
                />
            </div>

            {/* === Текстова колонка (права) === */}
            {/* Цей 'div' тепер має власні відступи 'py-*' та 'px-*',
              щоб вирівняти контент.
            */}
            <div className="px-4 sm:px-6 lg:px-12 xl:px-20">
                {/* Внутрішній контейнер для обмеження ширини тексту */}
                <div className="max-w-lg">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-800 tracking-tight">
                        Stronger Appraisals,
                        <br />
                        Stronger Offers
                    </h2>

                    <p className="mt-6 text-md text-gray-600 leading-normal">
                        Small cosmetic upgrades don&apos;t just make your home look
                        better, they can also improve how appraisers view your
                        property. Fresh paint, updated flooring, and modern fixtures
                        align your home with recently sold comparables, which means
                        stronger appraisal support. That helps buyers feel confident,
                        lenders approve faster, and offers come in higher.
                    </p>

                    {/* Статистика */}
                    {/* ВИПРАВЛЕНО: Прибрано 'gap-*', додано 'border-t border-gray-200' */}
                    <div className="mt-12 grid grid-cols-2 gap-0 border-t border-gray-200">
                        {appraisalStats.map((stat, index) => {
                            // Динамічно додаємо класи для рамок
                            const isRightColumn = (index % 2) !== 0; // Індекси 1, 3
                            const isFirstRow = index < 2; // Індекси 0, 1

                            let classes = "py-6"; // Базовий відступ
                            if (isRightColumn) classes += " pl-6 border-l border-gray-200";
                            if (!isRightColumn) classes += " pr-6"; // Відступ для лівої колонки
                            if (isFirstRow) classes += " border-b border-gray-200";
                            if (!isFirstRow) classes += " pt-6"; // Додатковий відступ для нижнього ряду

                            return (
                                <div key={stat.label} className={classes}>
                                    <span className="block text-4xl sm:text-5xl font-medium text-neutral-800">
                                        {stat.value}
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-500">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
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
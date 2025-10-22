// components/CoverageComparisonSection.tsx
import React from 'react';

// Іконка "Галочка" (синя)
const CheckIcon = () => (
    <svg
        className="h-6 w-6 text-blue-600 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

// Іконка "Не включено" (сіра, коло з мінусом)
const NotCoveredIcon = () => (
    <svg
        className="h-6 w-6 text-neutral-400 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Дані для списків
const coveredItems = [
    { title: "Paint", description: "– neutral tones that refresh the home." },
    { title: "Flooring Refresh", description: "– carpet replacement, refinishing, repairs." },
    { title: "Kitchen Refresh", description: "– cabinet paint/refacing, backsplash, hardware." },
    { title: "Bathroom Updates", description: "– vanities, faucets, mirrors, caulking." },
    { title: "Fixtures & Hardware", description: "– modern lighting, handles, faucets." },
    { title: "Minor Repairs", description: "– patching walls, adjusting doors." },
];

const notCoveredItems = [
    { text: "Structural repairs (roof, HVAC, plumbing, foundation)." },
    { text: "Major renovations or additions." },
    { text: "Full remodels." },
    { text: "Luxury upgrades not tied to marketability." },
    { text: "Luxury upgrades not tied to marketability." },
];

export default function CoverageComparisonSection() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* !!! ЗМІНЕНО: Додано 'lg:items-center' для вертикального центрування
                  на десктопі. 'items-start' залишено для мобільної версії.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center lg:gap-0">

                    {/* === ЛІВА КАРТКА (Біла) === */}
                    <div className="relative z-10 bg-white shadow-2xl rounded-2xl p-8 sm:p-12
                                    lg:scale-105">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                            Updates That <br />
                            <span className="text-blue-600">May Be Covered</span>
                        </h2>

                        <ul className="mt-8 space-y-5">
                            {coveredItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-x-3">
                                    <CheckIcon />
                                    <span className="text-base text-neutral-700">
                                        <strong className="font-semibold text-neutral-900">
                                            {item.title}
                                        </strong>{' '}
                                        {item.description}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-10 text-xs text-neutral-400">
                            These are examples. The actual upgrades depend on your home&apos;s
                            condition and are finalized after your pre-qualification review.
                        </p>
                    </div>

                    {/* === ПРАВА КАРТКА (Темно-сіра) === */}
                    <div className="bg-neutral-600 rounded-2xl p-8 sm:p-12
                                    mt-8 lg:mt-0 lg:-ml-12 lg:pl-20">

                        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-400">
                            What&apos;s Not Covered
                        </h2>

                        <ul className="mt-16 space-y-4">
                            {notCoveredItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-x-3 pb-5 border-b border-neutral-500"
                                >
                                    <NotCoveredIcon />
                                    <span className="text-base text-neutral-400">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
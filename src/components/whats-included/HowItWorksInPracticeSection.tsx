// components/HowItWorksInPracticeSection.tsx
import React from 'react';

// Іконка "Галочка" для списків
const SmallCheckIcon = () => (
    <svg className="h-5 w-5 text-blue-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default function HowItWorksInPracticeSection() {
    return (
        <section className="bg-white py-16 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Головний заголовок та опис */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight">
                        How It Works In Practice.
                    </h2>
                    <p className="mt-6 text-sm sm:text-lg text-neutral-600 leading-relaxed">
                        Every home is different. Our pre-qualification visit, we determine which
                        cosmetic updates make the most sense for your property. The CASHBATE
                        solution anchors the most important update first, and then we decide which
                        additional updates may fit within the solution value. If an essential update
                        goes beyond the limit, the seller may cover that portion directly.
                    </p>
                </div>

                {/* Контейнер для трьох прикладів-карток */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* === Картка 1: Kitchen Refresh (Full Included) === */}
                    <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-neutral-200">
                        <p className="text-sm font-normal text-neutral-500">Example 1</p>
                        <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                            Kitchen Refresh <br />
                            (Fully Included)
                        </h3>
                        <p className="mt-3 text-sm text-neutral-600">
                            The seller&apos;s kitchen was dated but required only light cosmetic updates. Everything fit within the base solution value.
                        </p>

                        <p className="mt-6 text-sm font-semibold text-neutral-700">Included under the CASHBATE solution:</p>
                        <ul className="mt-3 space-y-2">
                            {[
                                "Kitchen refresh (cabinet painting, backsplash, hardware).",
                                "Tailored cosmetic updates based on home evaluation.",
                                "Vetted and trusted local professionals from the CASHBATE-approved network.",
                                "Show-Ready Essentials",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-x-2 text-sm text-neutral-600">
                                    <SmallCheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm font-semibold text-neutral-700">Seller add-on: None – the updates were fully included.</p>

                        <p className="mt-6 text-sm font-semibold text-neutral-900">
                            Result: <span className="font-normal text-neutral-700">A refreshed, move-in-ready kitchen that appeals to a wide range of buyers and supported a higher appraisal value.</span>
                        </p>
                    </div>

                    {/* === Картка 2: Kitchen Refresh with Flooring Add-On === */}
                    <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-neutral-200">
                        <p className="text-sm font-normal text-neutral-500">Example 2</p>
                        <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                            Kitchen Refresh with <br />
                            Flooring Add-On
                        </h3>
                        <p className="mt-3 text-sm text-neutral-600">
                            After the home visit, the kitchen was chosen as the anchor update.
                        </p>

                        <p className="mt-6 text-sm font-semibold text-neutral-700">Included under the CASHBATE solution:</p>
                        <ul className="mt-3 space-y-2">
                            {[
                                "Kitchen refresh (cabinet painting, hardware, lighting).",
                                "Carpet replaced on the 2nd floor",
                                "Tailored cosmetic updates based on home evaluation.",
                                "Vetted and trusted local professionals from the CASHBATE-approved network.",
                                "Show-Ready Essentials",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-x-2 text-sm text-neutral-600">
                                    <SmallCheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm font-semibold text-neutral-700">Seller add-on: Kitchen flooring, required for a cohesive result.</p>

                        <p className="mt-6 text-sm font-semibold text-neutral-900">
                            Result: <span className="font-normal text-neutral-700">A modern, consistent kitchen that lifted buyer interest.</span>
                        </p>
                    </div>

                    {/* === Картка 3: Interior Painting as Anchor, Plus Carpet Replacement === */}
                    <div className="bg-white border-2 border-blue-600 rounded-xl p-6 sm:p-8
                                    lg:scale-105 lg:shadow-xl"> {/* Виділена картка */}
                        <p className="text-sm font-semibold text-blue-600">Example 3</p>
                        <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
                            Interior Painting as Anchor, <br />
                            Plus Carpet Replacement
                        </h3>
                        <p className="mt-3 text-sm text-neutral-600">
                            During the pre-qualification visit, we identified whole-home interior painting as the anchor update to maximize marketability. Seller also wanted to modernize the dotted hall bathroom, which went beyond the base solution value.
                        </p>

                        <p className="mt-6 text-sm font-semibold text-neutral-700">Included under the CASHBATE solution:</p>
                        <ul className="mt-3 space-y-2">
                            {[
                                "Full interior paint in neutral, buyer-friendly tones.",
                                "Tailored cosmetic updates based on home evaluation.",
                                "Vetted and trusted local professionals from the CASHBATE-approved network.",
                                "Show-Ready Essentials",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-x-2 text-sm text-neutral-600">
                                    <SmallCheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm font-semibold text-neutral-700">Seller add-on: Bathroom refresh with new vanity, mirror, faucets, updated light fixture, and caulking.</p>

                        <p className="mt-6 text-sm font-semibold text-neutral-900">
                            Result: <span className="font-normal text-neutral-700">A bright, freshly painted interior combined with a modern bathroom, creating a strong first impression for buyers and supporting a higher sale price.</span>
                        </p>
                    </div>

                </div>

                {/* Нижній текстовий блок */}
                <div className="mt-24 text-center max-w-2xl mx-auto">
                    <p className="text-xs text-neutral-500">
                        Most homes also receive our Show-Ready Essentials – a set of quick cosmetic updates that help your home photograph better and feel move-in ready. These may include minor wall repairs, light professional cleaning, kitchen cabinet cleaning/refresh, bathroom cabinet and vanity cleanout, small caulking refreshes, and a tidy front entry. The exact list varies by home and is finalized after our pre-qualification visit.
                    </p>
                    <p className="mt-8 text-sm font-semibold text-neutral-800">
                        CASHBATE includes cosmetic updates within the solution value. CASHBATE is not a contractor. If additional work is requested beyond the solution value, payment for those services will be your responsibility. The full scope is confirmed after our pre-qualification visit, and all work is performed by licensed and insured contractors.
                    </p>
                </div>
            </div>
        </section>
    );
}
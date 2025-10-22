"use client";

import React from 'react';
import Image from 'next/image';

// Дані для таблиці для легкого редагування
const comparisonHeaders = ["CASHBATE", "Loan / Credit", "Contractor", "Do Nothing"];
const comparisonRows = [
    {
        label: "Upfront Cost",
        values: ["$0", "Yes", "Yes", "$0"]
    },
    {
        label: "Risk if Home Doesn't Sell",
        values: ["$0", "Debt remains", "You pay full cost", "Lower sale price"]
    },
    {
        label: "Who Does the Work",
        values: ["Licensed Contractors", "You hire contractors", "Contractor crew", "N/A"]
    },
    {
        label: "Goal",
        values: ["Faster sale, higher price", "Loan repayment", "Project delivery", "Sell \"as is\""]
    }
];

export default function ComparisonSection() {
    return (
        <section className="relative w-full pt-80 pb-10 overflow-hidden">

            {/* --- Фонове зображення --- */}
            <div className="absolute inset-0 -z-20">
                <Image
                    // ЗАМІНІТЬ ЦЕЙ ШЛЯХ НА ВАШЕ ЗОБРАЖЕННЯ
                    src="/comparison.png"
                    alt="Team reviewing plans"
                    fill
                    className="object-cover"
                />
                {/* Накладання для затемнення та тонування */}
                <div className="absolute inset-0 bg-neutral-900/50 -z-10" />
            </div>

            {/* --- Контент-контейнер --- */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Картка --- */}
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10">

                    <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-8">
                        CASHBATE vs. Alternatives
                    </h2>

                    {/* --- Таблиця (адаптивна) --- */}
                    <div className="overflow-x-auto">
                        <div className="min-w-[700px] lg:min-w-0">

                            {/* Заголовки таблиці */}
                            <div className="grid grid-cols-5 gap-4 pb-4">
                                <div className="text-sm font-semibold text-neutral-900 uppercase opacity-70">
                                    {/* Порожня комірка для вирівнювання */}
                                </div>
                                {comparisonHeaders.map((header) => (
                                    <div key={header} className="text-sm font-semibold text-neutral-900 uppercase text-left">
                                        {header}
                                    </div>
                                ))}
                            </div>

                            {/* Рядки таблиці */}
                            <div className="space-y-2">
                                {comparisonRows.map((row) => (
                                    <div
                                        key={row.label}
                                        className="grid grid-cols-5 gap-4 items-center py-4 border-t border-white/10"
                                    >
                                        {/* Заголовок рядка */}
                                        <div className="text-sm font-medium text-neutral-900">
                                            {row.label}
                                        </div>

                                        {/* Значення */}
                                        {row.values.map((value, idx) => (
                                            <div key={idx} className="text-sm text-neutral-500 text-left">
                                                {value}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Текст під карткою --- */}
                <p className="mt-8 text-left text-xs text-neutral-300 max-w-2xl mx-left">
                    CASHBATE is not a contractor. We partner with licensed and insured contractors who meet strict standards,
                    while we provide the incentive and risk-sharing structure.
                </p>
            </div>
        </section>
    );
}
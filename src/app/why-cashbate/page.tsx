import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DifferenceSection from "@/components/why-cashbate/DifferenceSection";
import AppraisalSection from "@/components/why-cashbate/AppraisalSection";
import AgentsCarousel from "@/components/why-cashbate/AgentsCarousel";
import ComparisonSection from "@/components/why-cashbate/ComparisonSection";
import ReadyToStartSection from "@/components/why-cashbate/ReadyToStartSection";
// Іконка стрілки для кнопки
const ArrowRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);


// Компонент для першої секції сторінки "Why CASHBATE"
const WhyCashbateHero = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* ВИПРАВЛЕНО: 'items-start' змінено на 'items-stretch',
                  щоб обидві колонки мали однакову висоту.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-stretch">

                    {/* === Текстова колонка (ліва) === */}
                    {/* 'flex justify-between flex-col' тепер працюватиме коректно */}
                    <div className="text-left flex justify-between flex-col">

                        {/* === Верхній блок (заголовок і текст) === */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-700 tracking-tight leading-tight">
                                Not Credit.
                                <br/>
                                Not a Loan.
                                <br/>
                                <span className="text-blue-600">A Risk-Sharing Solution.</span>
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                                We share the risk with you, helping your home sell faster and for more — with no upfront
                                cost on qualifying upgrades.
                            </p>
                        </div>

                        {/* === Нижній блок (кнопка і дрібний текст) === */}
                        {/* 'justify-between' притисне цей блок до низу */}
                        <div>
                            <div className="mt-10">
                                <Link
                                    href="/check" // Замініть на ваше посилання
                                    className="inline-flex items-center justify-center gap-x-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Start My Risk-Free Check
                                    <ArrowRightIcon/>
                                </Link>
                            </div>

                            <p className="mt-6 text-xs text-gray-500 max-w-sm mx-auto lg:mx-0">
                                All work is performed by licensed and insured contractors. CASHBATE is not a contractor.
                            </p>
                        </div>
                    </div>

                    {/* === Колонка із зображенням (права) === */}
                    <div className="flex justify-center">
                        <Image
                            src="/why-cashbate.png" // ЗАМІНІТЬ ЦЕЙ ШЛЯХ НА ВАШЕ ЗОБРАЖЕННЯ
                            alt="Happy family in their new home"
                            width={600}
                            height={600}
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};


// Оновлений компонент сторінки, що використовує нову секцію
export default function WhyCashbatePage() {
    return (
        <main>
            <WhyCashbateHero/>
            <DifferenceSection/>
            <AppraisalSection/>
            <AgentsCarousel/>
            <ComparisonSection/>
            <ReadyToStartSection/>


        </main>
    );
};
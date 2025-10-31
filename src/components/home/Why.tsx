"use client";

import React from 'react';
import MainButton from '@/components/ui/MainButton';
import Link from 'next/link';

const cashbateFeatures = [
    "Not credit, not a loan.",
    "No upfront payment with base solution.",
    "Licensed contractors only.",
    "Risk-sharing incentive.",
];


const WhyCashbate: React.FC = () => {
    return (
        <section>
            <div className=" max-w-7xl mx-auto">
                <div className=" rounded-3xl px-4 py-8 sm:py-12">

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div className="flex flex-col space-y-8">
                            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
                                Why CASHBATE
                            </h2>

                            {/* Список преимуществ */}
                            <ul className="space-y-6">
                                {cashbateFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="23" viewBox="0 0 33 23" fill="none" className="flex-shrink-0 mt-1">
                                            <path d="M11.5116 17.9078L28.8148 0.604688C29.2231 0.196355 29.6995 -0.0078125 30.2439 -0.0078125C30.7884 -0.0078125 31.2648 0.196355 31.6731 0.604688C32.0814 1.01302 32.2856 1.49826 32.2856 2.0604C32.2856 2.62253 32.0814 3.10709 31.6731 3.51406L12.9408 22.2974C12.5325 22.7057 12.0561 22.9099 11.5116 22.9099C10.9672 22.9099 10.4908 22.7057 10.0825 22.2974L1.3033 13.5182C0.894965 13.1099 0.698964 12.6253 0.715298 12.0646C0.731631 11.5038 0.944644 11.0185 1.35434 10.6089C1.76403 10.1992 2.24927 9.99499 2.81005 9.99635C3.37083 9.99771 3.85538 10.2019 4.26371 10.6089L11.5116 17.9078Z" fill="#155DFC"/>
                                        </svg>

                                        <span className="text-lg md:text-2xl font-medium text-neutral-900">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Кнопка действия */}
                            <div className="pt-4">

                                <Link
                                    href="/why-cashbate"

                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-12 px-6 sm:px-8 font-medium text-xs sm:text-base bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md"
                                >
                                    Learn Why Sellers Choose Us
                                </Link>
                            </div>
                        </div>


                        <div className="relative h-full w-full overflow-hidden rounded-xl min-h-[300px] md:min-h-full hidden md:block">
                            <img
                                src="/whyCashbate.jpg"
                                alt="Счастливая семья празднует"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyCashbate;
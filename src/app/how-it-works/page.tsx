"use client";

import Image from "next/image";
import Link from "next/link";
import HowItWorksSteps from "@/components/how-it-works/HowItWorksSteps";
import KeyBenefitsSection from "@/components/how-it-works/KeyBenefitsSection";
import EligibilityCheckSection from "@/components/how-it-works/EligibilityCheckSection";
import MainButton from "@/components/ui/MainButton";

export default function HowItWorksPage() {
    return (
        // Прибрано фон, оскільки секція тепер має свій
        <div className=" ">
            <main>
                {/* Hero */}
                <section className="relative flex flex-col justify-center items-center text-center overflow-hidden py-20 sm:py-36">
                    {/* === Background image === */}
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/man-holding-house.png"
                            alt="Man holding paper cutout of a house"
                            fill
                            priority
                            // ЗМІНЕНО: Тепер зображення заповнює весь фон
                            className="object-cover object-top "
                        />
                    </div>

                    {/* === Text block === */}
                    <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-36">
                        {/* ЗМІНЕНО: Колір тексту на білий */}
                        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-700">
                            How CASHBATE Works
                        </h1>

                        {/* ЗМІНЕНО: Колір тексту на світло-сірий */}
                        <p className="mt-5 text-lg sm:text-xl leading-tight text-neutral-500">
                            A simple, step-by-step process to sell faster
                            <br className="hidden sm:block" />
                            and for more — with no upfront cost.
                        </p>

                        <div className="mt-4">
                            <MainButton text="Start My Risk-Free Check" />
                        </div>


                        {/* Стрілка вниз */}
                        {/* ЗМІНЕНО: Колір стрілки на світлий */}
                        <div className="mt-10 sm:mt-12 flex justify-center">
                            <svg
                                // Додано animate-bounce для привернення уваги
                                className="h-12 w-12 text-white/70 animate-bounce"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 18l12 12 12-12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </section>

                <HowItWorksSteps />
                <KeyBenefitsSection />
                <EligibilityCheckSection />
            </main>
        </div>
    );
}
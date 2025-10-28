"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSteps() {
    const steps = [
        {
            id: 1,
            icon: "/icons/1.png",
            title: "Start With Your Address",
            text: "Enter your property details to check if your home may qualify for CASHBATE.",
        },
        {
            id: 2,
            icon: "/icons/2.png",
            title: "Property Review & Agent Alignment",
            text: "We review your home’s details and coordinate with your agent — or connect you with one of our trusted partner agents if you don’t have one.",
        },
        {
            id: 3,
            icon: "/icons/3.png",
            title: "Pre-Qualification Visit",
            text: "A quick visit confirms your home’s condition and eligibility for cosmetic upgrades.",
        },
        {
            id: 4,
            icon: "/icons/4.png",
            title: "Targeted Upgrade Plan",
            text: (
                <>
                    We identify the cosmetic updates most likely to deliver the best ROI for your sale.{" "}
                    <Link href="/#examples-carousel" className="text-blue-600 hover:underline">
                        See examples here ››
                    </Link>
                </>
            ),
        },
        {
            id: 5,
            icon: "/icons/5.png",
            title: "Upgrades Completed",
            text: "Licensed and insured contractors complete the updates, covered up to the base solution value. If costs exceed this, the seller covers the difference.",
        },
        {
            id: 6,
            icon: "/icons/6.png",
            title: "Sell Risk-Free",
            text: "Your refreshed home goes to market. Payment is settled at closing. If your home doesn’t sell within 6 months at market price, you owe $0 for our contribution.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/*
                  ЗМІНЕНО: Додано відступи зліва (ml-*).

                  ml-10 (40px) — це половина ширини мобільної іконки (80px).
                  sm:ml-12 (48px) — трохи більше половини (45px) іконки 90px.
                  lg:ml-14 (56px) — трохи більше половини (55px) іконки 110px.

                  Це гарантує, що ліворуч від лінії ЗАВЖДИ є достатньо місця,
                  щоб іконка, яка центрується (left-[-...]), не обрізалася.
                */}
                <div className="relative border-l-2 border-dashed border-blue-400 ml-10 sm:ml-12 lg:ml-14">
                    {steps.map((step) => (
                        <div key={step.id} className="relative mb-16 sm:mb-20 last:mb-0">
                            {/*
                              Иконка —
                              `bg-gray-50` тут, щоб приховати пунктирну лінію,
                              яка проходить "крізь" іконку.
                            */}
                            <div className="absolute left-[-40px] sm:left-[-45px] lg:left-[-55px] top-0 flex bg-gray-50 justify-center">
                                <Image
                                    src={step.icon}
                                    alt={`Step ${step.id} icon`}
                                    width={80}
                                    height={80}
                                    className="object-contain sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px]"
                                />
                            </div>

                            {/*
                              Контейнер для тексту з відступом.
                              Відступ (pl-*) тепер відраховується від нової позиції лінії.
                            */}
                            <div className="pl-16 sm:pl-20 lg:pl-32">
                                {/* STEP label */}
                                <p className="text-sm sm:text-xl font-light uppercase text-gray-300 tracking-tight">
                                    Step {step.id}
                                </p>

                                {/* Title */}
                                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-700">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 leading-tight max-w-xl">
                                    {step.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
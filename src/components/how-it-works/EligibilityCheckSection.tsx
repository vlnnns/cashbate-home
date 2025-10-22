"use client";

import { useState, FormEvent } from "react";

export default function EligibilityCheckSection() {
    const [address, setAddress] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Тут буде ваша логіка для відправки адреси
        console.log("Checking address:", address);
    }

    return (
        // Секція зі світло-сірим фоном
        <section className="bg-gray-50/70">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
                {/* Заголовок */}
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-700 tracking-tight">
                    What Could Your Home Be Worth?
                </h2>

                {/* Підзаголовок */}
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    Find out with a free pre-qualification check. Enter your address to see if your
                    home qualifies for upgrades under the CASHBATE base solution — and get a free
                    CMA report if you don’t already have an agent.
                </p>

                {/* Форма для вводу адреси */}
                <form
                    onSubmit={handleSubmit}
                    className="relative mt-10 w-full max-w-3xl"
                    aria-label="Property address form"
                >
                    <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2 bg-white/90 backdrop-blur-md shadow-xl rounded-[36px] p-2">
                        <label htmlFor="address" className="sr-only">
                            Enter Property Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            inputMode="text"
                            autoComplete="street-address"
                            placeholder="Enter Property Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="flex-1 h-14 sm:h-16 rounded-full bg-transparent px-5 sm:pl-6 text-[16px] sm:text-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-14 sm:h-16 px-6 sm:px-8 font-medium text-base sm:text-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md"
                        >
                            Check My Eligibility
                        </button>
                    </div>
                </form>

                {/* Маленький текст під формою */}
                <p className="mt-4 text-xs text-neutral-400 max-w-lg text-center mx-auto">
                    No upfront cost. Covered up to the base solution value. If your home doesn&apost
                    sell within 6 months at market price, you owe $0.
                </p>
            </div>
        </section>
    );
}
"use client";

import { useState, FormEvent } from "react";
import HeroAddressForm from "@/components/ui/HeroAddressForm";

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

                <HeroAddressForm ctaLabel="Check My Eligibility" />

                {/* Маленький текст під формою */}
                <p className="mt-4 text-xs text-neutral-400 max-w-lg text-center mx-auto">
                    No upfront cost. Covered up to the base solution value. If your home doesn&apost
                    sell within 6 months at market price, you owe $0.
                </p>
            </div>
        </section>
    );
}
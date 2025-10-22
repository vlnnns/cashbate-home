"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

/**
 * HeroSection — edge-to-edge background image with overlay, centered content, and responsive address form.
 */
export default function HeroSection({
                                        bgSrc = "/home-bg.png",
                                        bgAlt = "Modern living room background",
                                        title = "Sell Your Home Faster —",
                                        highlight = "No Sale, No Pay.",
                                        subtitle = "CASHBATE is an incentive solution that shares risk with you by covering cosmetic upgrades to help your home sell quicker and for more. It's not a credit, not a loan.",
                                        ctaLabel = "See if Your Home Qualifies >>",
                                    }: {
    bgSrc?: string;
    bgAlt?: string;
    title?: string;
    highlight?: string;
    subtitle?: string;
    ctaLabel?: string;
}) {
    const [address, setAddress] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({ address });
    }

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={bgSrc}
                    alt={bgAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Content container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 ">
                <div className="max-w-3xl pb-20">
                    <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
                        {title}
                        <br />
                        <span className="text-blue-600">{highlight}</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-xl leading-relaxed text-gray-700">
                        {subtitle}
                    </p>
                </div>

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
                            {ctaLabel}
                        </button>
                    </div>
                </form>

                <p className="mt-6 max-w-3xl text-xs sm:text-sm leading-snug text-gray-600">
                    CASHBATE covers cosmetic upgrades up to{" "}
                    <b className="font-semibold text-gray-900">$9,888</b> in value, with no upfront cost.
                    Payment is settled at closing. If your home doesn&apos;t sell after 6 months,
                    you owe $0 for our contribution.
                </p>
            </div>
        </section>
    );
}
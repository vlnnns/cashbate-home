"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import HeroAddressForm from '@/components/ui/HeroAddressForm';

/**
 * HeroSection — edge-to-edge background image with overlay, centered content, and responsive address form.
 */
export default function HeroSection({
                                        bgSrc = "/home-bg.png",
                                        bgAlt = "Modern living room background",
                                        title = "Sell Your Home Faster —",
                                        highlight = "No Sale, No Pay.",
                                        subtitle = "CASHBATE is an incentive solution that shares risk with you by covering cosmetic upgrades to help your home sell quicker and for more. It's not a credit, not a loan.",
                                        // 1. 'ctaLabel' видалено, оскільки він не використовується
                                    }: {
    bgSrc?: string;
    bgAlt?: string;
    title?: string;
    highlight?: string;
    subtitle?: string;
    ctaLabel?: string; // (Залишаємо тут для типу, але не в деструктуризації)
}) {
    // Цей код не використовується, але не заважає
    const [address, setAddress] = useState("");
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({ address });
    }

    const [isLoaded, setIsLoaded] = useState(false);

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
                    className={`object-cover object-[50%_30%] sm:object-center transition-opacity duration-1000 ease-in-out ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>

            {/* Content container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

                <div className="max-w-3xl pb-12 sm:pb-20">
                    <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
                        {title}
                        <br />
                        <span className="relative inline-block text-blue-600">{highlight}
                            <svg
                                className="absolute left-0 bottom-[-15px] w-full h-auto z-[-10]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 433 42"
                                fill="none"
                            >
                                <path d="M210.159 0.537216C183.162 -1.52841 130.573 2.48852 80.7115 10.424L68.9416 12.2997C35.8569 17.5811 17.9845 21.263 5.32721 25.4062C0.387174 27.0235 -0.0445603 27.2392 0.0031795 28.0662C0.0758271 29.273 0.862496 29.1806 9.96109 26.8972C19.3762 24.5344 27.7598 23.0006 50.6915 19.4459C127.335 7.5651 162.936 4.09191 202.449 4.64261C210.192 4.74997 222.427 6.32851 222.344 7.20923C222.233 8.38519 214.172 11.4936 195.62 17.5135C172.797 24.9191 158.85 29.9728 157.531 31.3148C155.276 33.609 157.322 35.6955 162.141 36.0206C164.896 36.2065 165.528 36.1766 178.324 35.2452C215.064 32.5752 238.46 31.778 270.031 32.1209C318.11 32.6438 348.616 34.3377 405.766 39.6598C426.301 41.5723 427.367 41.628 431.252 40.9838L431.32 40.9729C432.567 40.7711 432.908 39.1588 431.734 38.6518C428.713 37.3496 426.656 37.0574 408.852 35.4102C349.168 29.8873 317.658 28.0941 271.799 27.6149C247.681 27.3625 236.91 27.4996 219.257 28.2849C207.188 28.8217 175.283 30.7641 170.795 31.2343C168.346 31.4917 179.235 27.6309 198.301 21.4827C222.419 13.7043 227.292 11.3942 227.676 7.56112C228.108 3.23902 224.013 1.59687 210.159 0.537216Z" fill="#8EC5FF" fillOpacity="0.7"/>
                            </svg>
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-xl leading-relaxed text-gray-700">
                        {subtitle}
                    </p>
                </div>

                {/* HeroAddressForm вже має свій 'ctaLabel' всередині */}
                <HeroAddressForm ctaLabel="Start My Risk-Free Check" />

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
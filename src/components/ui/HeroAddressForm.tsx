// components/HeroAddressForm.tsx
"use client";

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext'; // 1. Імпортуємо наш глобальний хук

interface HeroAddressFormProps {
    ctaLabel: string;
}

export default function HeroAddressForm({ ctaLabel }: HeroAddressFormProps) {
    // 2. Локальний стан ТІЛЬКИ для цього поля вводу
    const [localAddress, setLocalAddress] = useState('');

    // 3. Отримуємо контроль над модальним вікном з контексту
    const { openModal, updateField } = useModal();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Запобігаємо перезавантаженню сторінки

        updateField('address', localAddress);

        openModal();
    };

    return (
        <form
            onSubmit={handleSubmit}

            className="relative mt-10 w-full max-w-2xl"
            aria-label="Property address form"
        >
            <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white/90 backdrop-blur-md shadow-xl rounded-4xl sm:rounded-full p-2 sm:p-1.5">
                <label htmlFor="hero-address" className="sr-only">
                    Enter Property Address
                </label>
                <input
                    id="hero-address"
                    type="text"
                    inputMode="text"
                    autoComplete="street-address"
                    placeholder="Enter Property Address"
                    value={localAddress}
                    onChange={(e) => setLocalAddress(e.target.value)}

                    className="flex-1 rounded-full bg-transparent py-3 px-5 sm:pl-6 text-sm sm:text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-12 py-3 px-4 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md"
                >
                    {ctaLabel}
                </button>
            </div>
        </form>
    );
}
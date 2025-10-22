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

        // 4. Оновлюємо поле 'address' у ГЛОБАЛЬНОМУ стані модального вікна
        updateField('address', localAddress);

        // 5. Відкриваємо модальне вікно
        openModal();
    };

    return (
        <form
            onSubmit={handleSubmit} // 6. Використовуємо наш новий обробник
            // !!! ЗМІНЕНО: max-w-3xl -> max-w-2xl (зроблено вужчим)
            className="relative mt-10 w-full max-w-2xl"
            aria-label="Property address form"
        >
            {/* !!! ЗМІНЕНО: rounded-[36px] -> rounded-full, p-2 -> p-1.5 (трохи менше) */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2 bg-white/90 backdrop-blur-md shadow-xl rounded-full p-1.5">
                <label htmlFor="hero-address" className="sr-only">
                    Enter Property Address
                </label>
                <input
                    id="hero-address"
                    type="text"
                    inputMode="text"
                    autoComplete="street-address"
                    placeholder="Enter Property Address"
                    value={localAddress} // 7. Керуємо локальним станом
                    onChange={(e) => setLocalAddress(e.target.value)} // 8. Оновлюємо локальний стан
                    // !!! ЗМІНЕНО: h-14 sm:h-16 -> h-12, text-[16px] sm:text-lg -> text-base (зроблено нижчим)
                    className="flex-1 h-12 rounded-full bg-transparent px-5 sm:pl-6 text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                />
                <button
                    type="submit"
                    // !!! ЗМІНЕНО: h-14 sm:h-16 -> h-12, text-base sm:text-lg -> text-base (зроблено нижчим)
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-12 px-6 sm:px-8 font-medium text-base bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md"
                >
                    {ctaLabel}
                </button>
            </div>
        </form>
    );
}
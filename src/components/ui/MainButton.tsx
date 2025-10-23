// components/MainButton.tsx
"use client"; // 👈 Обов'язково, оскільки ми використовуємо хук

import React from 'react';
import { useModal } from '@/context/ModalContext'; // 1. Імпортуємо наш хук

interface MainButtonProps {
    text: string;
    className?: string;
    // 2. Пропс 'onClick' більше не потрібен
}

const MainButton = ({ text, className = '' }: MainButtonProps) => {
    // 3. Отримуємо функцію openModal з глобального контексту
    const { openModal } = useModal();

    return (
        <button
            type="button"
            onClick={openModal} // 4. Викликаємо її тут
            className={`inline-flex items-center justify-center py-3 px-4 sm:py-4 sm:px-10 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors ${className}`}
        >
            {text}
        </button>
    );
};

export default MainButton;
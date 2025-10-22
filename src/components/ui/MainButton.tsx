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
            className={`inline-flex items-center justify-center py-4 px-10 bg-blue-600 text-white text-sm font-semibold rounded-full border border-gray-300 shadow-[0_3px_7.9px_0_rgba(0,0,0,0.25)] backdrop-blur-[15px] hover:bg-blue-700 transition-colors ${className}`}
        >
            {text}
        </button>
    );
};

export default MainButton;
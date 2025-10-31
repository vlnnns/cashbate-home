// components/MainButton.tsx
"use client"; // 👈 Обов'язково, оскільки ми використовуємо хук

import React from 'react';
import { useModal } from '@/context/ModalContext'; // 1. Імпортуємо наш хук
import clsx from 'clsx'; // 👈 Імпортуємо clsx

// --- Починаються стилі з вашого прикладу ---

const baseStyles = {
    solid:
        'group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors', // 👈 Оновлені відступи, розмір шрифту та transition
    outline:
        'group inline-flex ring-1 items-center justify-center rounded-full py-3 px-4 text-sm font-semibold transition-colors', // 👈 Оновлені відступи, розмір шрифту та transition
};

const variantStyles = {
    solid: {
        slate:
            'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
        blue: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600', // 👈 Оновлений hover:bg-blue-700
        white:
            'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    },
    outline: {
        slate:
            'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
        white:
            'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    },
};
// --- Кінчаються стилі з вашого прикладу ---

interface MainButtonProps {
    text: string;
    className?: string;
    // 'onClick' більше не потрібен, оскільки він жорстко прив'язаний до openModal
}

const MainButton = ({ text, className = '' }: MainButtonProps) => {
    // 3. Отримуємо функцію openModal з глобального контексту
    const { openModal } = useModal();

    // 4. Створюємо рядок класів за допомогою clsx
    const buttonClassName = clsx(
        baseStyles.solid, // Ця кнопка завжди 'solid'
        variantStyles.solid.blue, // Ця кнопка завжди 'blue'
        className, // Додаємо будь-які додаткові класи
    );

    return (
        <button
            type="button"
            onClick={openModal} // 5. Викликаємо openModal
            className={buttonClassName} // 6. Використовуємо згенеровані класи
        >
            {text}
        </button>
    );
};

export default MainButton;
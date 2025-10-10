import React from 'react';

interface MainButtonProps {
    text: string;
    link: string;
    className?: string; // Добавляем возможность передавать дополнительные классы
}

const MainButton = ({ text, link, className = '' }: MainButtonProps) => {
    return (
        <a
            href={link}
            // Используем inline-flex, чтобы ширина кнопки зависела от контента
            className={`inline-flex items-center justify-center py-4 px-10 bg-blue-600 text-white text-sm font-semibold rounded-full border border-gray-300 shadow-[0_3px_7.9px_0_rgba(0,0,0,0.25)] backdrop-blur-[15px] hover:bg-blue-700 transition-colors ${className}`}
        >
            {text}
        </a>
    );
};

export default MainButton;

// components/WhyWeSetLimitsSection.tsx
import React from 'react';
import Image from 'next/image';

export default function WhyWeSetLimitsSection() {
    return (
        <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-blue-500"> {/* Запасний фон */}

            {/* Фонове зображення */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/blue-bg.png" // !!! ЗАМІНІТЬ ЦЕЙ ШЛЯХ ДО ВАШОГО ЗОБРАЖЕННЯ !!!
                    // Переконайтеся, що зображення знаходиться в директорії `/public`
                    alt="Abstract blue gradient background"
                    fill
                    className="object-cover object-center"
                    priority // Додайте, якщо це верхній банер, щоб завантажувався швидше
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>

            {/* Накладання-градієнт для додавання візуального ефекту поверх зображення.
                Він створює більш насичений синій градієнт, як на фото.
            */}
            <div
                className="absolute inset-0 z-0"
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-20">
                    {/* Ліва колонка: Заголовок */}
                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight leading-tight">
                            Why We Set Limits
                        </h2>
                    </div>

                    {/* Права колонка: Опис */}
                    <div>
                        <p className="text-md leading-relaxed max-w-lg lg:ml-auto font-thin">
                            CASHBATE is a risk-sharing solution, not a contractor.
                            We only cover cosmetic updates that deliver maximum
                            value for your sale. If your home qualifies, it means we&apos;re
                            confident our contribution will help it sell faster and for more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client'
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * @typedef {object} Step
 * @property {string} title
 * @property {string} description
 */

/**
 * Компонент для отдельного шага
 * @param {{step: Step, index: number, isActive: boolean}} props
 */
const StepItem = ({ step, index, isActive }: { step: { title: string, description: string }, index: number, isActive: boolean }) => {
    const textColorClass = 'text-white'; // Text color always white

    return (
        <div className="relative py-4 lg:py-6">
            <div
                className={`relative transition-all duration-700 cursor-pointer ${textColorClass}`}
            >
                <div
                    className={`py-6 px-2 rounded-2xl max-w-xl mx-auto
                                transition-all duration-700 text-left`} // Background effect will be handled via GSAP
                >
                    <h3 className="text-2xl font-bold mb-1">
                        {step.title}
                    </h3>
                    <p className="text-base font-light">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

/**
 * Главный компонент "How It Works" с эффектом выделения при прокрутке.
 */
const HowItWorksSection = () => {
    const stepsData = [
        {
            title: "Check Eligibility",
            description: "Enter your address to see if your home qualifies.",
        },
        {
            title: "Review & Plan",
            description: "We identify the upgrades most likely to increase your home's value.",
        },
        {
            title: "Upgrades Completed",
            description: "Licensed contractors refresh your home, covered up to the base solution value.",
        },
        {
            title: "Sell Risk-Free",
            description: "Pay at closing. If your home doesn’t sell within 6 months at market price, you owe $0 for our contribution.",
        },
    ];

    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    // Инициализация Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const target = entry.target;
                    const stepIndex = parseInt(target.dataset.index || '0', 10);

                    // Если элемент ВОШЕЛ в активную зону, делаем его активным.
                    if (entry.isIntersecting) {
                        // Прокручивание вниз или вверх
                        if (stepIndex > activeStepIndex) {
                            // Если скроллим вниз, плавно переходим к следующему шагу
                            setActiveStepIndex(stepIndex);
                        } else if (stepIndex < activeStepIndex) {
                            // Если скроллим вверх, плавно возвращаемся к предыдущему шагу
                            setActiveStepIndex(stepIndex);
                        }

                        // GSAP анимация: плавно подсвечиваем активный элемент
                        gsap.to(target, {
                            backgroundColor: '#ffffff33', // плавное выделение
                            borderRadius: '35px', // Устанавливаем border-radius через GSAP
                            backdropFilter: 'blur(10px)', // Добавляем размытие через GSAP
                            border: '1px solid rgba(255, 255, 255, 0.14)', // Добавляем тонкую белую обводку
                            duration: 1, // Делаем подсветку медленнее
                        });
                    } else {
                        // Сброс фона, если элемент выходит из зоны видимости
                        gsap.to(target, {
                            backgroundColor: 'transparent',
                            borderRadius: '10px', // Default border-radius
                            boxShadow: 'none', // Remove shadow
                            backdropFilter: 'none', // Remove blur
                            duration: 1, // Задержка на сброс
                        });
                    }
                });
            },
            {
                root: null,
                threshold: 0.3,  // Активируем, когда 30% элемента видно
                rootMargin: "-150px 0px -150px 0px",  // Уменьшенный margin, чтобы триггерить раньше
            }
        );

        const currentRefs = stepRefs.current;

        currentRefs.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            currentRefs.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [activeStepIndex]); // Добавление зависимостей для обновления индекса

    return (
        <section className=" py-20 lg:py-32 antialiased" style={{
            backgroundImage: `url('/blue-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    How It Works
                </h2>
                <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-16">
                    A simple, risk-sharing solution to help your home sell faster and for more — with no upfront cost on qualifying upgrades.
                </p>

                <div className="max-w-2xl mx-auto">
                    {stepsData.map((step, index) => (
                        <div
                            key={index}
                            ref={el => stepRefs.current[index] = el}
                            data-index={index}
                            className="mb-8"
                        >
                            <StepItem
                                step={step}
                                index={index}
                                isActive={index === activeStepIndex}
                            />
                        </div>
                    ))}
                    <div className="h-5"></div>  {/* Add space for smoother scrolling */}
                </div>

                {/* Call to Action Button */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center bg-white text-neutral-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        See Full Process
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;

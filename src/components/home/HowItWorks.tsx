'use client'
import React, { useRef, useState, useEffect } from 'react';

// Определяем тип для одного шага
interface Step {
    title: string;
    description: string;
}

// Определяем пропсы для компонента StepItem
interface StepItemProps {
    step: Step;
}

// Определяем тип для стилей плавающего фона
interface HighlighterStyle {
    transform: string;
    height?: string;
    width?: string;
    opacity: number;
}

/**
 * Компонент для отдельного шага (теперь без логики фона)
 */
const StepItem = ({ step }: StepItemProps) => {
    return (
        <div className="relative py-4 lg:py-6">
            <div
                className={`relative cursor-pointer text-white`}
            >
                <div
                    className={`py-6 px-4 sm:px-6 text-left border border-transparent`}
                >
                    <h3 className="text-2xl font-semibold mb-1">
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
 * Главный компонент "How It Works" с плавно перемещающимся фоном.
 */
const HowItWorksSection = () => {
    const stepsData: Step[] = [
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
    const [highlighterStyle, setHighlighterStyle] = useState<HighlighterStyle>({ transform: 'translateY(0px)', opacity: 0 });

    // Эффект для обновления позиции плавающего фона
    useEffect(() => {
        const activeStepElement = stepRefs.current[activeStepIndex];

        if (activeStepElement) {
            setHighlighterStyle({
                transform: `translateY(${activeStepElement.offsetTop}px)`,
                height: `${activeStepElement.offsetHeight}px`,
                width: `${activeStepElement.offsetWidth}px`,
                opacity: 1,
            });
        }
    }, [activeStepIndex]);

    // Инициализация Intersection Observer для отслеживания активного шага
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const stepIndex = parseInt(target.dataset.index || '0', 10);
                        setActiveStepIndex(stepIndex);
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: "-150px 0px -150px 0px",
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
    }, []);

    return (
        <section className=" py-20 lg:py-32 antialiased" style={{
            backgroundImage: `url('/blue-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
                    How It Works
                </h2>
                <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-16">
                    A simple, risk-sharing solution to help your home sell faster and for more — with no upfront cost on qualifying upgrades.
                </p>

                <div className="max-w-2xl mx-auto relative">
                    {/* Плавающий фон */}
                    <div
                        className="absolute top-0 left-0 transition-all duration-500 ease-in-out bg-white/20 backdrop-blur-md border border-white/20 rounded-[35px]"
                        style={highlighterStyle}
                    ></div>

                    {stepsData.map((step, index) => (
                        <div
                            key={index}
                            ref={el => {
                                if (el) stepRefs.current[index] = el;
                            }}
                            data-index={index}
                            className="mb-8 relative"
                        >
                            <StepItem
                                step={step}
                            />
                        </div>
                    ))}
                    <div className="h-5"></div>
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


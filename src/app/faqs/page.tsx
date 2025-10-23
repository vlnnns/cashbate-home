"use client";

import { useState } from 'react';
import MainButton from "@/components/ui/MainButton";

const faqData = [
    {
        question: "What is CASHBATE?",
        answer: (
            <>
                CASHBATE is a risk-reducing incentive solution that helps you sell your home faster and for more. We cover the cost of select cosmetic upgrades up to the base solution value, with payment settled at closing. For covered work, there&apos;s no upfront cost to you.
                <br /><br />
                In some cases, if essential updates go beyond the base solution value, the seller may need to cover those items directly at the time of work. For example, if a kitchen requires new flooring to complete the refresh, that portion would be paid by the seller while the rest of the upgrades remain covered under CASHBATE.
                <br /><br />
                CASHBATE is <strong>not a loan, not credit, and not a contractor</strong> — we partner with licensed and insured professionals while providing the incentive structure that reduces your risk.
            </>
        )
    },
    {
        question: "How does CASHBATE help me sell my home faster and for more?",
        answer: "Our targeted cosmetic upgrades are designed to make your home more appealing to buyers, leading to quicker sales and potentially higher offers by addressing common issues that might deter purchasers."
    },
    {
        question: "What types of upgrades are included?",
        answer: "We focus on high-ROI cosmetic updates like fresh paint, modern light fixtures, minor landscaping, and deep cleaning. The exact upgrades are tailored to what will best enhance your specific property's market appeal."
    },
    {
        question: "What happens if my home doesn't sell?",
        answer: "If your home doesn&apos;t sell within 6 months at the agreed-upon market price after our upgrades are complete, you owe absolutely $0 for our contribution. We share the risk with you."
    },
    {
        question: "Who decides which upgrades my home needs?",
        answer: "Our team, in coordination with you and your real estate agent, will assess your property to identify the cosmetic updates that are most likely to provide the best return on investment for a quick and profitable sale."
    },
    {
        question: "Is my home guaranteed to qualify?",
        answer: "Not all homes will qualify. Qualification depends on a property review and a pre-qualification visit to assess the home&apos;s current condition and its potential for value increase through our program."
    },
    {
        question: "Already listed with an agent — can I still use CASHBATE?",
        answer: "Yes, absolutely. We are designed to work alongside your existing agent. We will coordinate with them to align on the upgrade plan and sales strategy to ensure a seamless process."
    },
    {
        question: "What is a CMA report?",
        answer: "A Comparative Market Analysis (CMA) report is an estimate of a home&apos;s value based on recently sold, similar properties in the immediate area. It&apos;s a key tool for setting a competitive and realistic listing price."
    },
];

interface AccordionItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <dt>
                <button
                    onClick={onClick}
                    className="w-full flex justify-between items-center text-left text-neutral-800"
                    aria-expanded={isOpen}
                >
                    <span className="text-base font-semibold">{question}</span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg
                            className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M18 12H6' : 'M12 6v12m-6-6h12'} />
                        </svg>
                    </span>
                </button>
            </dt>
            <dd className={`mt-4 pr-12 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-base text-gray-600">{answer}</p>
            </dd>
        </div>
    );
};

// Основний компонент сторінки
export default function FaqsPage() {

    // !!! ЗМІНА 1: Стан тепер зберігає МАСИВ індексів. [0] означає, що перший елемент відкритий за замовчуванням
    const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

    // !!! ЗМІНА 2: Нова логіка для додавання/видалення індексів з масиву
    const handleToggle = (index: number) => {
        setOpenIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index) // Видалити, якщо індекс вже є (закрити)
                : [...prevIndexes, index] // Додати, якщо індексу немає (відкрити)
        );
    };

    return (
        <div>
            <main>
                {/* === Hero Section === */}
                <section className="relative py-24 sm:py-32 overflow-hidden" style={{
                    backgroundImage: `url('/faq-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom'}}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" >
                        <div className="max-w-xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-700 tracking-tight">
                                Frequently <br></br>Asked <br></br>Questions
                            </h1>
                        </div>
                    </div>

                </section>

                {/* === FAQs Accordion Section === */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <dl className="space-y-2">
                            {faqData.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}

                                    // !!! ЗМІНА 3: Перевіряємо, чи індекс є в масиві
                                    isOpen={openIndexes.includes(index)}

                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </dl>
                    </div>
                </section>

                {/* === CTA Section === */}
                <section className=" py-16 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-neutral-700">
                            Need more information?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
                            Our team is ready to help you understand how CASHBATE
                            works and see if your home qualifies.
                        </p>
                        <div className="mt-8">
                            <MainButton text=" See If Your Home Qualifies" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
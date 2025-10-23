"use client";

import { useModal } from '@/context/ModalContext';


const ArrowRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2" // Відступ зліва
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default function ReadyToSeeQualifies() {
    const { openModal } = useModal();
    return (

        <section className="relative  overflow-hidden" style={{
            backgroundImage: `url('/blue-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'}}>

            {/* Зменшено відступи */}
            <div className="relative z-10 max-w-3xl mx-auto text-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8 " >

                {/* Зменшено шрифт на мобільному */}
                <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight">
                    Ready to see if your home qualifies?
                </h2>

                <div className="mt-8">
                    <button
                        type="button"
                        onClick={openModal}
                        // ВИПРАВЛЕНО: Коментар видалено з className
                        className="inline-flex items-center justify-center
                       bg-white text-gray-800 font-semibold
                       px-4 py-3 text-xs m:text-base sm:px-8 sm:py-3.5 rounded-full
                       shadow-lg hover:scale-105 transition-transform
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    >
                        Get Started Risk Free
                        <ArrowRightIcon />
                    </button>
                </div>

            </div>
        </section>
    );
}
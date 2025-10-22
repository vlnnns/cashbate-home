"use client"

import { useModal } from '@/context/ModalContext';

// Іконка стрілки для кнопки
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
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default function ReadyToStartSection() {
    const { openModal } = useModal();
    return (

        <section className="relative  overflow-hidden" style={{
            backgroundImage: `url('/blue-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'}}>


            <div className="relative z-10 max-w-3xl mx-auto text-center py-20 sm:py-36 px-4 sm:px-6 lg:px-8 " >

                {/* Заголовок */}
                <h2 className="text-4xl font-medium text-white tracking-tight">
                    Ready to see if CASHBATE
                    <br className="hidden sm:block" />
                    is the right fit for your home?
                </h2>

                <div className="mt-20">
                    <button
                        type="button"
                        onClick={openModal}
                        className="inline-flex items-center justify-center
                       bg-white text-gray-800 font-semibold
                       px-8 py-3.5 rounded-full
                       shadow-lg hover:scale-105 transition-transform
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    >
                        Start My Risk-Free Check
                        <ArrowRightIcon />
                    </button>
                </div>

                <p className="mt-6 text-xs text-white/70 max-w-md mx-auto">
                    No upfront cost. Covered up to the base solution value. If your home doesn&apos;t
                    sell within 6 months at market price, you owe $0.
                </p>
            </div>
        </section>
    );
}
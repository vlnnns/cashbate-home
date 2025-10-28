// components/modals/MultiStepFormModal.tsx
"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import Step1PropertyBasics from './steps/Step1PropertyBasics';
import Step2SellingPlans from './steps/Step2SellingPlans';
import Step3ContactInfo from './steps/Step3ContactInfo';
import Step4Confirmation from './steps/Step4Confirmation';

const CloseIcon = () => (
    // ... (код іконки без змін)
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function MultiStepFormModal() {

    const {
        isModalOpen,
        closeModal: contextCloseModal,
        currentStep,
        isSubmitting,
        nextStep,
        prevStep,
        handleSubmit,
    } = useModal();

    // ... (код closeModal та useEffect без змін)
    const closeModal = () => {
        if (window.history.state && window.history.state.modal === 'open') {
            window.history.back();
        } else {
            contextCloseModal();
        }
    }

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (isModalOpen) {
                contextCloseModal();
            }
        };

        if (isModalOpen) {
            window.history.pushState({ modal: 'open' }, '', window.location.pathname);
            window.addEventListener('popstate', handlePopState);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isModalOpen, contextCloseModal]);


    const steps = [
        <Step1PropertyBasics key={1} />,
        <Step2SellingPlans key={2} />,
        <Step3ContactInfo key={3} />,
        <Step4Confirmation key={4} />,
    ];

    const isConfirmationStep = currentStep === 4;
    const totalSteps = 3;
    const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-start sm:items-center justify-center p-0 sm:p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/* sm:max-h-[90vh] залишається, але оскільки
                              внутрішній div контенту більше не має overflow,
                              це вікно буде прокручуватися цілком (в <div className="fixed inset-0 overflow-y-auto">)
                              якщо контент не влізе.
                            */}
                            <Dialog.Panel className="relative w-full max-w-none sm:max-w-2xl transform rounded-none sm:rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-xl transition-all flex flex-col h-screen sm:h-auto sm:max-h-[90vh]">

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 z-10"
                                >
                                    <span className="sr-only">Close</span>
                                    <CloseIcon />
                                </button>

                                {/* 1. Блок Хедера (Progress Bar + Step) - без змін */}
                                <div>
                                    {!isConfirmationStep && (
                                        <div className="mb-4 mr-8">
                                            <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                                                    style={{ width: `${progressPercent}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {!isConfirmationStep && (
                                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                            STEP {currentStep} / {totalSteps}
                                        </span>
                                    )}
                                </div>

                                {/* !!! ЗМІНЕНО: 2. Блок Контенту
                                  Видалено 'overflow-y-auto'.
                                  Тепер блок буде розширюватися, а прокручуватись буде все вікно.
                                  Це дозволить випадаючим спискам не обрізатись.
                                */}
                                <div className={`
                                    mt-4
                                    ${!isConfirmationStep
                                    ? 'flex-1 pr-2 sm:pr-4 pb-24 sm:pb-4' // 👈 'overflow-y-auto' видалено
                                    : ''}
                                `}>
                                    {steps[currentStep - 1]}
                                </div>

                                {/* 3. Блок Футера (Кнопки) */}
                                <div>
                                    {!isConfirmationStep && (
                                        /* !!! ЗМІНЕНО: Адаптація футера для десктопу
                                          sm:mt-10 -> sm:mt-6 (зменшуємо висоту нижнього блоку)
                                        */
                                        <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-neutral-200
                                                        sm:relative sm:mt-6 sm:p-0 sm:border-t-0 sm:bg-transparent
                                                        flex items-center justify-between">
                                            <button
                                                type="button"
                                                onClick={prevStep}
                                                className={`rounded-full py-3 px-10 text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200
                                                            ${currentStep === 1 ? 'invisible' : 'visible'}`}
                                            >
                                                Back
                                            </button>
                                            <button
                                                type={currentStep === 3 ? 'submit' : 'button'}
                                                onClick={currentStep === 3 ? handleSubmit : nextStep}
                                                disabled={isSubmitting}
                                                className="inline-flex justify-center rounded-full border border-transparent bg-blue-600 py-3 px-10 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                            >
                                                {isSubmitting
                                                    ? 'Submitting...'
                                                    : currentStep === 3
                                                        ? 'Submit'
                                                        : 'Continue'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
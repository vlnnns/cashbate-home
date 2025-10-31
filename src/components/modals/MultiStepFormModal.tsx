"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState, useCallback } from "react";
import { useModal } from "@/context/ModalContext";
import Step1PropertyBasics from "./steps/Step1PropertyBasics";
import Step2SellingPlans from "./steps/Step2SellingPlans";
import Step3ContactInfo from "./steps/Step3ContactInfo";
import Step4Confirmation from "./steps/Step4Confirmation";

const CloseIcon = () => (
    <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
        />
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
        formData,
    } = useModal();

    const [sessionId, setSessionId] = useState<string | null>(null);

    useEffect(() => {
        if (isModalOpen && !sessionId) {
            const id =
                (typeof crypto !== "undefined" && crypto.randomUUID
                    ? crypto.randomUUID()
                    : Math.random().toString(36).slice(2)) + "-" + Date.now();
            setSessionId(id);
        }
    }, [isModalOpen, sessionId]);

    const closeModal = () => {
        if (window.history.state?.modal === "open") {
            window.history.back();
        } else {
            contextCloseModal();
        }
    };

    useEffect(() => {
        const handlePop = () => {
            if (isModalOpen) contextCloseModal();
        };
        if (isModalOpen) {
            window.history.pushState({ modal: "open" }, "", window.location.pathname);
            window.addEventListener("popstate", handlePop);
        }
        return () => window.removeEventListener("popstate", handlePop);
    }, [isModalOpen, contextCloseModal]);

    const steps = [
        Step1PropertyBasics,
        Step2SellingPlans,
        Step3ContactInfo,
        Step4Confirmation,
    ];
    const StepComponent = steps[currentStep - 1];
    const isConfirmation = currentStep === 4;
    const totalSteps = 3;
    const progress = Math.min(
        (Math.min(currentStep, totalSteps) / totalSteps) * 100,
        100
    );

    const savePartial = useCallback(
        async (step: number) => {
            if (!sessionId) return;
            try {
                await fetch("/api/save-partial", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formData,
                        step,
                        sessionId,
                    }),
                });
            } catch (err) {
                console.warn("partial save failed", err);
            }
        },
        [formData, sessionId]
    );

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (currentStep < 3) {
            await savePartial(currentStep);
            nextStep();
            return;
        }

        if (currentStep === 3) {
            await savePartial(currentStep);
            await handleSubmit();
            return;
        }
    };

    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                {/* Overlay */}
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

                <div className="fixed inset-0">
                    <div className="flex h-[100dvh] items-start sm:items-center justify-center p-0 sm:p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/* ВАЖНО: даём скролл ПАНЕЛИ, а не внутренним блокам */}
                            <Dialog.Panel className="relative w-full max-w-none sm:max-w-2xl transform rounded-none sm:rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-xl transition-all flex flex-col h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto">
                                {/* Close */}
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 z-10"
                                >
                                    <span className="sr-only">Close</span>
                                    <CloseIcon />
                                </button>

                                {/* ФОРМА — БЕЗ жесткого flex-1 */}
                                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                                    {!isConfirmation && (
                                        <div className="mr-8">
                                            <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        STEP {currentStep} / {totalSteps}
                      </span>
                                        </div>
                                    )}

                                    {/* Контент шага — просто блок, без scroll внутри */}
                                    <div className="mt-2">
                                        <StepComponent />
                                    </div>

                                    {/* Футер теперь в потоке, под контентом */}
                                    {!isConfirmation && (
                                        <div className="w-full flex items-center justify-between gap-4 pt-2">
                                            <button
                                                type="button"
                                                onClick={prevStep}
                                                className={`rounded-full py-2 px-4 text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 ${
                                                    currentStep === 1 ? "invisible" : "visible"
                                                }`}
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex justify-center rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                            >
                                                {isSubmitting
                                                    ? "Submitting..."
                                                    : currentStep === 3
                                                        ? "Submit"
                                                        : "Continue"}
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

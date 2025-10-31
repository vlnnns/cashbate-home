"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
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
    } = useModal();

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

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep === 3) await handleSubmit();
        else nextStep();
    };

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
                            <Dialog.Panel className="relative w-full max-w-none sm:max-w-2xl transform rounded-none sm:rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-xl transition-all flex flex-col min-h-screen sm:min-h-0 sm:h-auto sm:max-h-[90vh]">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 z-10"
                                >
                                    <span className="sr-only">Close</span>
                                    <CloseIcon />
                                </button>

                                <form onSubmit={onSubmit} className="flex flex-col flex-1">
                                    {!isConfirmation && (
                                        <div className="mb-4 mr-8">
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

                                    <div
                                        className={`mt-4 flex-1 pr-2 sm:pr-4 pb-6 sm:pb-4 ${
                                            !isConfirmation ? "overflow-y-auto" : ""
                                        }`}
                                    >
                                        <StepComponent />
                                    </div>

                                    {!isConfirmation && (
                                        <div className="w-full bg-white p-4 border-t border-neutral-200 sm:mt-6 sm:p-0 sm:border-t-0 sm:bg-transparent flex items-center justify-between">
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

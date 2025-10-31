"use client";

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import MultiStepFormModal from "@/components/modals/MultiStepFormModal";

// --------- TYPES ----------
export interface FormData {
    address: string;
    bedrooms: string;
    bathrooms: string;
    squareFootage: string;
    yearBuilt: string;
    condition: string;
    agent: string;
    timeline: string;
    concern: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const initialFormData: FormData = {
    address: "",
    bedrooms: "1",
    bathrooms: "1",
    squareFootage: "",
    yearBuilt: "",
    condition: "Select condition...",
    agent: "Select an option...",
    timeline: "Select timeline...",
    concern: "Select concern...",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
};

const LOCAL_STORAGE_KEY = "multiStepFormData";

// --- Load initial data safely ---
const getInitialData = (): FormData => {
    if (typeof window === "undefined") return initialFormData;

    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        const data: FormData = saved ? JSON.parse(saved) : initialFormData;

        if (data.agent === "" || data.agent === "yes" || data.agent === "no") {
            data.agent = initialFormData.agent;
        }

        return data;
    } catch {
        return initialFormData;
    }
};

interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    currentStep: number;
    formData: FormData;
    isSubmitting: boolean;
    updateField: (field: keyof FormData, value: string | string[]) => void;
    nextStep: () => void;
    prevStep: () => void;
    handleSubmit: () => Promise<void>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(getInitialData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // persist data
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
        }
    }, [formData]);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);

        if (currentStep === 4) {
            setFormData(initialFormData);
        }

        setCurrentStep(1);
        setIsSubmitting(false);
    };

    const updateField = (field: keyof FormData, value: string | string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () =>
        setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
    const prevStep = () =>
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));

    const handleSubmit = async () => {
        if (currentStep !== 3) return;

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                nextStep(); // go to confirmation
            } else {
                const err = await response.json();
                alert(err.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const value: ModalContextType = {
        isModalOpen,
        openModal,
        closeModal,
        currentStep,
        formData,
        isSubmitting,
        updateField,
        nextStep,
        prevStep,
        handleSubmit,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
            <MultiStepFormModal />
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("useModal must be used within ModalProvider");
    return ctx;
};

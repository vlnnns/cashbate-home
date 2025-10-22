// context/ModalContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import MultiStepFormModal from '@/components/modals/MultiStepFormModal';

// !!! ЗМІНЕНО: Інтерфейс оновлено
export interface FormData {
    address: string;
    bedrooms: string;
    bathrooms: string;
    squareFootage: string;
    yearBuilt: string;
    condition: string;
    agent: string;
    timeline: string;
    concern: string; // 👈 Було 'concerns: string[]'
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

// !!! ЗМІНЕНО: Початкові дані оновлено для 'CustomSelect'
const initialFormData: FormData = {
    address: '',
    bedrooms: '1', // 👈 '1' - це валідна опція
    bathrooms: '1', // 👈 '1' - це валідна опція
    squareFootage: '',
    yearBuilt: '',
    condition: 'Select condition...', // 👈 Плейсхолдер
    agent: '', // 👈 Для радіокнопок 'agent' має бути порожнім
    timeline: 'Select timeline...', // 👈 Плейсхолдер
    concern: 'Select concern...', // 👈 Плейсхолдер
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
    handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentStep(1);
        setIsSubmitting(false);
    };

    const updateField = (field: keyof FormData, value: string | string[]) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const nextStep = () => setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
    const prevStep = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep !== 3) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                nextStep();
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const value = {
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
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
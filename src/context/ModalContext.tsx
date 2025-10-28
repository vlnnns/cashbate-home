// context/ModalContext.tsx
"use client";

// !!! НОВЕ: Імпортуємо useEffect та useState
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect, // 👈 !!! НОВЕ
} from 'react';
import MultiStepFormModal from '@/components/modals/MultiStepFormModal';

// ... (інтерфейс FormData залишається без змін)
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

// ... (initialFormData залишається без змін)
const initialFormData: FormData = {
    address: '',
    bedrooms: '1',
    bathrooms: '1',
    squareFootage: '',
    yearBuilt: '',
    condition: 'Select condition...',
    agent: '',
    timeline: 'Select timeline...',
    concern: 'Select concern...',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

// !!! НОВЕ: Ключ для localStorage
const LOCAL_STORAGE_KEY = 'multiStepFormData';

// !!! НОВЕ: Функція для безпечного отримання початкових даних
const getInitialData = (): FormData => {
    // Перевіряємо, чи ми на клієнті (в браузері)
    if (typeof window === 'undefined') {
        return initialFormData;
    }
    try {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        // Якщо дані є, парсимо їх, інакше повертаємо початкові
        return savedData ? JSON.parse(savedData) : initialFormData;
    } catch (error) {
        console.error('Failed to parse form data from localStorage', error);
        return initialFormData; // Повертаємо початкові у разі помилки
    }
};

// ... (інтерфейс ModalContextType залишається без змін)
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

    // !!! НОВЕ: Використовуємо функцію-ініціалізатор для useState
    const [formData, setFormData] = useState<FormData>(getInitialData);

    const [isSubmitting, setIsSubmitting] = useState(false);

    // !!! НОВЕ: useEffect для збереження даних у localStorage
    // Цей ефект спрацьовує кожного разу, коли `formData` змінюється
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
        }
    }, [formData]); // Залежність - formData

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);

        // !!! НОВЕ: Логіка очищення форми
        // Якщо ми закриваємо модалку *після* успішної відправки (крок 4)
        // то очищуємо форму. В іншому випадку - дані залишаються.
        if (currentStep === 4) {
            setFormData(initialFormData);
            // useEffect вище автоматично оновить localStorage
            // на initialFormData
        }

        setCurrentStep(1);
        setIsSubmitting(false);
    };

    const updateField = (field: keyof FormData, value: string | string[]) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        // Нам не потрібно тут зберігати, useEffect зробить це
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
                nextStep(); // Переходимо на крок 4 (Успіх)
                // !!! НОВЕ: Ми *не* очищуємо форму тут.
                // Ми очистимо її, коли користувач закриє
                // повідомлення про успіх (в `closeModal`).
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
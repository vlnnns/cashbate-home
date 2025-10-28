// components/modals/steps/Step2SellingPlans.tsx
"use client";

import React from 'react';
import { useModal } from '@/context/ModalContext';
import CustomSelect from '../CustomSelect'; // Імпортовано

// Опції для 'Condition'
const conditionOptions = [
    'Select condition...',
    'Move-in ready but could use cosmetic updates',
    'Needs some cosmetic repairs/refresh',
    'Needs major repairs or renovations'
];

// Опції для 'Timeline'
const timelineOptions = [
    'Select timeline...',
    'My property is already listed for sale',
    'Ready to sell now (not yet listed)',
    'Within 3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
];

// Опції для 'Concern'
const concernOptions = [
    'Select concern...',
    'Getting the best price',
    'Selling quickly',
    'My home needs updates',
    'I don’t want to spend money upfront'
];

// !!! НОВЕ: Опції для 'Agent'
const agentOptions = [
    'Select an option...',
    'Yes, I already have an agent',
    'No, I don\'t have an agent yet'
];

export default function Step2SellingPlans() {
    const { formData: data, updateField } = useModal();

    // !!! НОВЕ: Зберігаємо повний текст опції "No" для перевірки
    const agentOptionNo = 'No, I don\'t have an agent yet';

    return (
        <div>
            <h3 className="text-xl font-semibold text-neutral-900">
                Condition & Selling Plans
            </h3>
            <p className="text-neutral-600 mt-1 text-sm">
                A few quick questions about your home’s condition and timeline help us see if CASHBATE is the right solution for you.
            </p>

            <div className="mt-4 space-y-4">

                {/* Condition (без змін) */}
                <div>
                    <CustomSelect
                        id="condition"
                        label="What best describes your home’s condition?"
                        value={data.condition}
                        onChange={(value) => updateField('condition', value)}
                        options={conditionOptions}
                    />
                </div>

                {/* !!! ЗМІНЕНО: Радіокнопки 'Agent' замінено на CustomSelect !!! */}
                <div>
                    <CustomSelect
                        id="agent"
                        label="Are you currently working with a real estate agent?"
                        value={data.agent}
                        onChange={(value) => updateField('agent', value)}
                        options={agentOptions}
                    />
                    {/* !!! ЗМІНЕНО: Умова оновлена, щоб відповідати тексту опції */}
                    {data.agent === agentOptionNo && (
                        <p className="mt-2 text-xs text-neutral-500 bg-neutral-50 p-3 rounded-md">
                            No problem — we’ll connect you with a top local agent and provide a free CMA report so you know your home’s true market value.
                        </p>
                    )}
                </div>

                {/* Timeline (без змін) */}
                <div>
                    <CustomSelect
                        id="timeline"
                        label="When are you planning to sell?"
                        value={data.timeline}
                        onChange={(value) => updateField('timeline', value)}
                        options={timelineOptions}
                    />
                </div>

                {/* Concern (без змін) */}
                <div>
                    <CustomSelect
                        id="concern"
                        label="What’s your biggest concern about selling?"
                        value={data.concern}
                        onChange={(value) => updateField('concern', value)}
                        options={concernOptions}
                    />
                </div>
            </div>
        </div>
    );
}
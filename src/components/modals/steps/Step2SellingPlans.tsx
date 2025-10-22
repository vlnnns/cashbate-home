// components/modals/steps/Step2SellingPlans.tsx
"use client";

import React from 'react';
import { useModal } from '@/context/ModalContext';
import CustomSelect from '../CustomSelect'; // 👈 1. Імпортуємо CustomSelect

// !!! ВИДАЛЕНО: 'inputStyle' більше не потрібен

// 2. Оновлено масиви опцій, щоб вони містили плейсхолдери
const conditionOptions = [
    'Select condition...',
    'Move-in ready but could use cosmetic updates',
    'Needs some cosmetic repairs/refresh',
    'Needs major repairs or renovations'
];

const timelineOptions = [
    'Select timeline...',
    'My property is already listed for sale',
    'Ready to sell now (not yet listed)',
    'Within 3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
];

const concernOptions = [
    'Select concern...',
    'Getting the best price',
    'Selling quickly',
    'My home needs updates',
    'I don’t want to spend money upfront'
];

export default function Step2SellingPlans() {
    const { formData: data, updateField } = useModal();

    return (
        <div>
            <h3 className="text-xl font-semibold text-neutral-900">
                Condition & Selling Plans
            </h3>
            <p className="text-neutral-600 mt-1 text-sm">
                A few quick questions about your home’s condition and timeline help us see if CASHBATE is the right solution for you.
            </p>

            <div className="mt-4 space-y-4">

                {/* !!! ЗМІНЕНО: Використовуємо CustomSelect !!! */}
                <div>
                    <CustomSelect
                        id="condition"
                        label="What best describes your home’s condition?"
                        value={data.condition}
                        onChange={(value) => updateField('condition', value)}
                        options={conditionOptions}
                    />
                </div>

                {/* Agent (Залишається без змін) */}
                <div>
                    <span className="block text-sm font-semibold text-neutral-700 mb-2">
                        Are you currently working with a real estate agent?
                    </span>
                    <fieldset className="space-y-2">
                        <div className="flex items-center gap-x-2">
                            <input id="agent-yes" name="agent" type="radio" value="yes" checked={data.agent === 'yes'} onChange={(e) => updateField('agent', e.target.value)} className="h-4 w-4 border-neutral-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="agent-yes" className="text-sm text-neutral-700">Yes, I already have an agent</label>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input id="agent-no" name="agent" type="radio" value="no" checked={data.agent === 'no'} onChange={(e) => updateField('agent', e.target.value)} className="h-4 w-4 border-neutral-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="agent-no" className="text-sm text-neutral-700">No, I don&apost have an agent yet</label>
                        </div>
                    </fieldset>
                    {data.agent === 'no' && (
                        <p className="mt-2 text-xs text-neutral-500 bg-neutral-50 p-3 rounded-md">
                            No problem — we’ll connect you with a top local agent and provide a free CMA report so you know your home’s true market value.
                        </p>
                    )}
                </div>

                {/* !!! ЗМІНЕНО: Використовуємо CustomSelect !!! */}
                <div>
                    <CustomSelect
                        id="timeline"
                        label="When are you planning to sell?"
                        value={data.timeline}
                        onChange={(value) => updateField('timeline', value)}
                        options={timelineOptions}
                    />
                </div>

                {/* !!! ЗМІНЕНО: Використовуємо CustomSelect !!! */}
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
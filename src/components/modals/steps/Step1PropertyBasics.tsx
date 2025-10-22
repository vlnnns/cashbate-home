// components/modals/steps/Step1PropertyBasics.tsx
"use client";

import React from 'react';
import { useModal } from '@/context/ModalContext';
import CustomSelect from '../CustomSelect';

// !!! ЗМІНЕНО: Оновлено стилі, щоб інпути були більшими та відповідали селектам !!!
const inputStyle = "block w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm";

export default function Step1PropertyBasics() {
    const { formData, updateField } = useModal();
    const data = formData;

    const bedroomOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '9+'];
    const bathroomOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5+'];

    return (
        <div>
            {/* <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                Property Basics
            </h3> */}

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-900">
                    Tell Us About Your Home
                </h3>
                <p className="text-neutral-600 mt-1 text-sm">
                    Enter a few quick details so we can check if your property may qualify for up to the CASHBATE package value in cosmetic.
                </p>
            </div>

            <div className="mt-8 space-y-6">
                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-neutral-700 mb-1">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className={inputStyle} // 👈 Новий стиль застосується тут
                        value={data.address}
                        onChange={(e) => updateField('address', e.target.value)}
                        placeholder="Start typing your address..."
                    />
                </div>

                {/* Bedrooms & Bathrooms */}
                <div className="grid grid-cols-2 gap-x-4">
                    <CustomSelect
                        id="bedrooms"
                        label="Bedrooms"
                        value={data.bedrooms}
                        onChange={(value) => updateField('bedrooms', value)}
                        options={bedroomOptions}
                    />
                    <CustomSelect
                        id="bathrooms"
                        label="Bathrooms"
                        value={data.bathrooms}
                        onChange={(value) => updateField('bathrooms', value)}
                        options={bathroomOptions}
                    />
                </div>

                {/* Обгортка для розміщення в один ряд */}
                <div className="grid grid-cols-2 gap-x-4">
                    {/* Square Footage */}
                    <div>
                        <label htmlFor="squareFootage" className="block text-sm font-semibold text-neutral-700 mb-1">
                            Square Footage (Optional)
                        </label>
                        <input
                            type="text"
                            name="squareFootage"
                            id="squareFootage"
                            className={inputStyle} // 👈 Новий стиль застосується тут
                            value={data.squareFootage}
                            onChange={(e) => updateField('squareFootage', e.target.value)}
                            placeholder="Not sure"
                        />
                    </div>

                    {/* Year Built */}
                    <div>
                        <label htmlFor="yearBuilt" className="block text-sm font-semibold text-neutral-700 mb-1">
                            Year Built (Optional)
                        </label>
                        <input
                            type="text"
                            name="yearBuilt"
                            id="yearBuilt"
                            className={inputStyle} // 👈 Новий стиль застосується тут
                            value={data.yearBuilt}
                            onChange={(e) => updateField('yearBuilt', e.target.value)}
                            placeholder="Not sure"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
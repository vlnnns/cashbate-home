// components/modals/steps/Step3ContactInfo.tsx
"use client";

import React from 'react';
import { useModal } from '@/context/ModalContext';

// !!! ЗМІНЕНО: Стилі оновлено, щоб відповідати Step1 (більші відступи, кращий фокус) !!!
const inputStyle = "block w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm";

export default function Step3ContactInfo() {
    const { formData: data, updateField } = useModal();

    return (
        <div>
            <h3 className="text-xl font-semibold text-neutral-900">
                Let’s prepare your home review
            </h3>

            <p className="text-neutral-600 mt-1 text-sm">
                We’ll use your details to confirm eligibility, arrange a pre-qualification visit, and outline which upgrades may be included in your package.
            </p>

            <div className="mt-4 space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-x-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className={inputStyle} // 👈 Новий стиль застосується тут
                            value={data.firstName}
                            onChange={(e) => updateField('firstName', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-700 mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className={inputStyle} // 👈 Новий стиль застосується тут
                            value={data.lastName}
                            onChange={(e) => updateField('lastName', e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Email Address & Phone Number */}
                <div className="grid grid-cols-2 gap-x-4">
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={inputStyle} // 👈 Новий стиль застосується тут
                            value={data.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className={inputStyle} // 👈 Новий стиль застосується тут
                            value={data.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                        />
                    </div>
                </div>

            </div>

            {/* Important Notes */}
            {/* ЗМІНЕНО: mt-8 -> mt-6, p-4 -> p-3 */}
            <div className="mt-2 p-2 bg-neutral-50 rounded-lg">
                <h4 className="text-sm font-semibold text-neutral-800">Important Notes</h4>

                {/* ЗМІНЕНО: mt-2 -> mt-1.5, space-y-1 -> видалено */}
                <ul className="mt-1.5 list-disc list-inside text-xs text-neutral-600">
                    <li>Covers cosmetic upgrades up to the base solution value (payment at closing).</li>
                    <li>Seller pays any costs above the base solution value.</li>
                    <li>All work done by licensed and insured contractors.</li>
                    <li>CASHBATE is not a contractor.</li>
                </ul>
            </div>

            {/* Disclosure */}
            {/* ЗМІНЕНО: mt-6 -> mt-4 */}
            <p className="mt-4 text-[10px] text-neutral-500">
                By submitting, you acknowledge that CASHBATE covers cosmetic upgrades up to the base solution value (with payment at closing), agree to our Terms of Use and Privacy Policy, and consent to be contacted about your eligibility.
            </p>
        </div>
    );
}
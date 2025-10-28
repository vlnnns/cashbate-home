// components/modals/CustomSelect.tsx
"use client";

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

// Іконка "Галочка" (буде блакитною)
const CheckIcon = () => (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

// Іконка "Стрілки" (шеврон)
const ChevronUpDownIcon = () => (
    <svg className="h-5 w-5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    label: string;
    id: string;
}

export default function CustomSelect({ value, onChange, options, label, id }: CustomSelectProps) {
    return (
        <div>
            <Listbox value={value} onChange={onChange}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-semibold text-neutral-700 mb-1">
                            {label}
                        </Listbox.Label>
                        <div className="relative mt-1">
                            {/* 1. Кнопка (виглядає як інпут) - без змін
                                Тут 'truncate' залишається, це коректно для кнопки */}
                            <Listbox.Button
                                id={id}
                                className="relative w-full cursor-default rounded-lg border border-neutral-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                            >
                                <span className="block truncate">{value}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon />
                                </span>
                            </Listbox.Button>

                            {/* 2. Анімований список опцій */}
                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                {/* !!! ЗМІНЕНО: 'text-base sm:text-sm' -> 'text-sm' (для меншого тексту) */}
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-sm shadow-lg border border-neutral-200 focus:outline-none">
                                    {options.map((option) => (
                                        <Listbox.Option
                                            key={option}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? 'bg-blue-100 text-blue-900' : 'text-neutral-900'
                                                }`
                                            }
                                            value={option}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    {/* !!! ЗМІНЕНО: 'truncate' видалено (для переносу тексту) */}
                                                    <span className={`block ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                        {option}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                            <CheckIcon />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    );
}
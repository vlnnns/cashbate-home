"use client";

// 1. Импорты 'useRef' и 'useEffect'
import React, { useRef, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import CustomSelect from '../CustomSelect';

// --- (Начало) Код, скопированный из HeroAddressForm.tsx ---

// 2. Объявляем типы Google для TypeScript
declare global {
    interface Window {
        google?: { // '?' - так как он загружается динамически
            maps: {
                places: {
                    Autocomplete: new (
                        input: HTMLInputElement,
                        options?: unknown,
                    ) => {
                        addListener: (eventName: string, handler: () => void) => void;
                        getPlace: () => { formatted_address?: string };
                        setBounds: (bounds: unknown) => void;
                    };
                };
                Circle: new (options: {
                    center: { lat: number; lng: number };
                    radius: number;
                }) => {
                    getBounds: () => unknown;
                };
            };
        };
    }
}

// 3. Функция для загрузки Google-скрипта (сделана более надежной)
const loadGoogleScript = (callback: () => void) => {
    const existingScript = document.getElementById('google-places-script');

    // Ключ API должен быть доступен, так как он загружается в HeroAddressForm
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.id = 'google-places-script';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.google) {
                callback();
            }
        };
    } else {
        // Если скрипт уже есть, он мог еще не загрузиться
        if (window.google) {
            callback();
        } else {
            // Если скрипт есть, но 'google' еще не доступен, ждем 'load'
            existingScript.addEventListener('load', () => {
                if (window.google) callback();
            });
        }
    }
};
// --- (Конец) Код, скопированный из HeroAddressForm.tsx ---

const inputStyle = "block w-full rounded-lg border border-neutral-300 bg-white py-2 px-3 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm";

export default function Step1PropertyBasics() {
    const { formData, updateField } = useModal();
    const data = formData;

    // 4. Создаем 'ref' для привязки к полю <input>
    const addressInputRef = useRef<HTMLInputElement>(null);

    // 5. useEffect для инициализации Autocomplete
    useEffect(() => {
        loadGoogleScript(() => {
            // Проверяем, что API загружен и ref существует
            if (!addressInputRef.current || !window.google || !window.google.maps || !window.google.maps.places) {
                console.warn("Google Maps API not loaded correctly for Step 1.");
                return;
            }

            const autocompleteOptions = {
                types: ['address'],
                componentRestrictions: { country: 'us' },
                fields: ['formatted_address'],
            };

            // 6. Инициализируем Autocomplete
            const autocomplete = new window.google!.maps.places.Autocomplete(
                addressInputRef.current,
                autocompleteOptions
            );

            // Геолокация для смещения (bias)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        const circle = new window.google!.maps.Circle({
                            center: geolocation,
                            radius: 50 * 1609.34, // 50 миль
                        });
                        autocomplete.setBounds(circle.getBounds());
                    },
                    (error) => {
                        console.warn("Could not get geolocation for autocomplete bias (Step 1):", error.message);
                    }
                );
            }

            // 7. Обработчик: когда пользователь выбрал адрес
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place && place.formatted_address) {
                    // НАПРЯМУЮ обновляем глобальное состояние (из useModal)
                    updateField('address', place.formatted_address);
                }
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Запускаем один раз при монтировании


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
                        // 8. Привязываем 'ref'
                        ref={addressInputRef}
                        type="text"
                        name="address"
                        id="address"
                        className={inputStyle} // 👈 Новий стиль застосується тут
                        value={data.address}
                        // Этот 'onChange' позволяет пользователю 
                        // редактировать или вводить адрес вручную
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

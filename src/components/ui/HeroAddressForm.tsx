"use client";

// 1. Импортируем 'useRef' и 'useEffect'
import React, { useState, useRef, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

// --- ИСПРАВЛЕНИЕ: (Начало) ---
// Заменили 'any' на более точные типы, чтобы исправить ошибку ESLint
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
// --- ИСПРАВЛЕНИЕ: (Конец) ---

interface HeroAddressFormProps {
    ctaLabel: string;
}

// 2. Функция для загрузки Google-скрипта
// (чтобы избежать дублирования, если он уже загружен)
const loadGoogleScript = (callback: () => void) => {
    const existingScript = document.getElementById('google-places-script');

    if (!existingScript) {
        const script = document.createElement('script');
        // Используем ключ из .env.local
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.id = 'google-places-script';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.google) { // Дополнительная проверка, что 'google' загружен
                callback();
            }
        };
    } else {
        if (window.google) { // Если скрипт уже есть, 'google' тоже должен быть
            callback();
        }
    }
};

export default function HeroAddressForm({ ctaLabel }: HeroAddressFormProps) {
    const [localAddress, setLocalAddress] = useState('');
    const { openModal, updateField } = useModal();

    // 3. Создаем 'ref' для привязки к полю <input>
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // 4. Загружаем скрипт и инициализируем 'Autocomplete'
        loadGoogleScript(() => {
            // Добавили 'window.google.maps' для проверки
            if (!inputRef.current || !window.google || !window.google.maps || !window.google.maps.places) {
                console.warn("Google Maps API not loaded correctly.");
                return; // Выходим, если API не загружен
            }

            // Настройки автодополнения
            const autocompleteOptions = {
                // Только адреса (не бизнесы)
                types: ['address'],
                // Ограничение: только США
                componentRestrictions: { country: 'us' },
                // Поля, которые мы хотим получить (чтобы не платить лишнего)
                fields: ['formatted_address'],
            };

            // 5. Инициализируем Google Autocomplete
            // --- ИСПРАВЛЕНИЕ: Добавлен '!' ---
            const autocomplete = new window.google!.maps.places.Autocomplete(
                inputRef.current,
                autocompleteOptions
            );

            // 6. Пытаемся получить геолокацию для смещения (bias)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const geolocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        // Создаем круг радиусом 50 миль (в метрах)
                        // --- ИСПРАВЛЕНИЕ: Добавлен '!' ---
                        const circle = new window.google!.maps.Circle({
                            center: geolocation,
                            radius: 50 * 1609.34, // 50 миль
                        });
                        // "Смещаем" результаты к этой области
                        autocomplete.setBounds(circle.getBounds());
                    },
                    (error) => {
                        console.warn("Could not get geolocation for autocomplete bias:", error.message);
                    }
                );
            }

            // 7. Устанавливаем обработчик: что делать, когда пользователь выбрал адрес
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place && place.formatted_address) {
                    // Обновляем наш локальный 'state'
                    setLocalAddress(place.formatted_address);
                }
            });
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Пустой массив зависимостей = запустить 1 раз при монтировании

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateField('address', localAddress);
        openModal();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative mt-10 w-full max-w-2xl"
            aria-label="Property address form"
        >
            <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white/90 backdrop-blur-md shadow-xl rounded-3xl sm:rounded-full p-1.5">
                <label htmlFor="hero-address" className="sr-only">
                    Enter Property Address
                </label>
                <input
                    // 8. Привязываем 'ref' к input
                    ref={inputRef}
                    id="hero-address"
                    type="text"
                    inputMode="text"
                    autoComplete="street-address"
                    placeholder="Enter Property Address"
                    value={localAddress}
                    onChange={(e) => setLocalAddress(e.target.value)}
                    className="flex-1 rounded-2xl sm:rounded-full bg-transparent py-2 px-5 sm:pl-6 text-sm sm:text-base text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-9 sm:h-10 py-2 px-4 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md"
                >
                    {ctaLabel}
                </button>
            </div>
            {/* Скрипт-тег <script> отсюда УДАЛЕН. Он загружается через useEffect. */}
        </form>
    );
}


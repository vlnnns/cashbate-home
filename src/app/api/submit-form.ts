// src/app/api/submit-form.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { FormData } from '@/context/ModalContext';

// Імпортуємо модулі Node.js для роботи з файлами
import { promises as fs } from 'fs';
import path from 'path';

// --- (Функція sendConfirmationEmail залишається без змін) ---
const sendConfirmationEmail = async (data: FormData) => {
    const { firstName, email } = data;
    const subject = "Your CASHBATE Pre-Qualification is in Progress";
    const body = `
        Hi ${firstName || 'there'},
        
        We’ve received your information and our team is already reviewing your home.
        A CASHBATE specialist will reach out soon to schedule your Pre-Qualification Visit.
        
        If you don’t have an agent, we’ll connect you with one of our trusted partners to guide the process. Together, we’ll confirm your eligibility and outline which upgrades may be included in your CASHBATE package.
        
        What happens next:
        - A CASHBATE specialist will contact you within 24 hours.
        - We’ll schedule your Pre-Qualification Visit (virtual or in-person).
        - You’ll get a clear plan of the upgrades your home may qualify for — with no upfront cost to you.
        
        Remember: CASHBATE covers cosmetic upgrades up to the base package value, with payment settled at closing. If additional work is needed beyond this, those costs would need to be covered by the seller at the time of work.
        
        Thank you for trusting CASHBATE to help your home sell faster and for more.
        — The CASHBATE Team
    `;

    console.log("--- SENDING EMAIL ---");
    console.log(`To: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(body);
    console.log("---------------------");

    return new Promise(resolve => setTimeout(resolve, 1000));
};


// !!! НОВЕ: Допоміжна функція для CSV-екранування
/**
 * Екранує значення для CSV, якщо воно містить коми, лапки або переноси рядків.
 */
const toCsvValue = (value: string | undefined | null): string => {
    if (value === null || value === undefined) {
        return ''; // Порожнє значення
    }
    const str = String(value);

    // Якщо поле містить "небезпечні" символи, беремо його в лапки
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        // Всередині поля подвійні лапки замінюються на подвійні подвійні лапки
        const escaped = str.replace(/"/g, '""');
        return `"${escaped}"`;
    }

    return str; // Повертаємо як є
};


// !!! ОНОВЛЕНО: Функція для збереження даних у .csv файл
/**
 * Зберігає дані форми у .csv файл у корені проекту.
 */
const saveToCsvFile = async (data: FormData) => {
    // Визначаємо шлях до файлу
    const filePath = path.join(process.cwd(), 'submissions.csv');

    const timestamp = new Date().toISOString();

    // 1. Визначаємо заголовки (всі поля з FormData + час)
    const headers = [
        'timestamp', 'address', 'bedrooms', 'bathrooms', 'squareFootage',
        'yearBuilt', 'condition', 'agent', 'timeline', 'concern',
        'firstName', 'lastName', 'email', 'phone'
    ];
    const headerRow = headers.join(',') + '\n';

    // 2. Готуємо рядок з даними, використовуючи CSV-екранування
    const values = [
        timestamp, data.address, data.bedrooms, data.bathrooms, data.squareFootage,
        data.yearBuilt, data.condition, data.agent, data.timeline, data.concern,
        data.firstName, data.lastName, data.email, data.phone
    ];
    const dataRow = values.map(toCsvValue).join(',') + '\n';

    try {
        let fileExists = false;
        try {
            // Перевіряємо, чи існує файл
            await fs.stat(filePath);
            fileExists = true;
        } catch (e) {
            fileExists = false;
        }

        let contentToAppend = '';
        if (!fileExists) {
            // Якщо файлу немає, спочатку додаємо заголовки
            contentToAppend += headerRow;
        }
        // Додаємо рядок з даними
        contentToAppend += dataRow;

        await fs.appendFile(filePath, contentToAppend, 'utf8');
        console.log(`Form data successfully saved to ${filePath}`);

    } catch (fileError) {
        console.error('Failed to write to CSV file:', fileError);
    }
};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const formData: FormData = req.body;
            console.log("Received form data:", formData);

            // --- 1. Відправляємо Email ---
            await sendConfirmationEmail(formData);

            // --- 2. Зберігаємо у CSV-файл (ОНОВЛЕНО) ---
            await saveToCsvFile(formData);

            // Відправляємо успішну відповідь клієнту
            res.status(200).json({ message: 'Form submitted successfully' });

        } catch (error) {
            console.error('API Error:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
// src/app/api/submit-form.ts
import type { NextApiRequest, NextApiResponse } from 'next';
// !!! ВИПРАВЛЕНО: Імпортуємо 'FormData' з 'ModalContext', а не 'MultiStepFormModal' !!!
import { FormData } from '@/context/ModalContext';

// Заглушка для сервісу email
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

    // --- ЛОГІКА ВІДПРАВКИ EMAIL ---
    console.log("--- SENDING EMAIL ---");
    console.log(`To: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(body);
    console.log("---------------------");

    return new Promise(resolve => setTimeout(resolve, 1000));
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const formData: FormData = req.body;

            await sendConfirmationEmail(formData);

            console.log("Received form data:", formData);

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
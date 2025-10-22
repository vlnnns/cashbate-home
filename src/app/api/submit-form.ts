// pages/api/submit-form.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { FormData } from '../../components/modals/MultiStepFormModal';

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
    // У реальному додатку тут буде інтеграція з SendGrid, Resend, Postmark тощо.
    // Наприклад: await resend.emails.send({ from: '...', to: email, subject, html: body });
    // ---

    console.log("--- SENDING EMAIL ---");
    console.log(`To: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(body);
    console.log("---------------------");

    // Імітуємо затримку мережі
    return new Promise(resolve => setTimeout(resolve, 1000));
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const formData: FormData = req.body;

            // 1. (Заглушка) Надіслати email-підтвердження користувачу
            await sendConfirmationEmail(formData);

            // 2. (Заглушка) Зберегти дані в базі даних
            // await db.collection('leads').insertOne(formData);

            // 3. (Заглушка) Надіслати сповіщення команді
            // await sendInternalNotification(formData);

            console.log("Received form data:", formData);

            // Надіслати успішну відповідь
            res.status(200).json({ message: 'Form submitted successfully' });

        } catch (error) {
            console.error('API Error:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        // Обробляти інші HTTP-методи
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
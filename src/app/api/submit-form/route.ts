// Important: Remove imports for NextApiRequest and NextApiResponse
// import type { NextApiRequest, NextApiResponse } from "next";

// Add this import for NextResponse
import { NextResponse } from "next/server";

import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

interface FormData {
    address?: string;
    bedrooms?: string;
    bathrooms?: string;
    squareFootage?: string;
    yearBuilt?: string;
    condition?: string;
    agent?: string;
    timeline?: string;
    concern?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

const toCsvValue = (v: string | undefined | null): string => {
    if (!v) return "";
    const s = String(v);
    return s.includes(",") || s.includes('"') || s.includes("\n")
        ? `"${s.replace(/"/g, '""')}"`
        : s;
};

const saveToCsvFile = async (data: FormData) => {
    const file = path.join(process.cwd(), "submissions.csv");
    const timestamp = new Date().toISOString();
    const headers = [
        "timestamp",
        "address",
        "bedrooms",
        "bathrooms",
        "squareFootage",
        "yearBuilt",
        "condition",
        "agent",
        "timeline",
        "concern",
        "firstName",
        "lastName",
        "email",
        "phone",
    ];
    const headerRow = headers.join(",") + "\n";
    const values = [
        timestamp,
        data.address,
        data.bedrooms,
        data.bathrooms,
        data.squareFootage,
        data.yearBuilt,
        data.condition,
        data.agent,
        data.timeline,
        data.concern,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
    ];
    const dataRow = values.map(toCsvValue).join(",") + "\n";

    try {
        let exists = true;
        try {
            await fs.stat(file);
        } catch {
            exists = false;
        }
        const content = !exists ? headerRow + dataRow : dataRow;
        await fs.appendFile(file, content, "utf8");
    } catch (err) {
        console.error("CSV write error:", err);
    }
};

const validate = (data: FormData) => {
    const errors: Record<string, string> = {};
    if (!data.firstName) errors.firstName = "First name required";
    if (!data.email) errors.email = "Email required";
    if (!data.phone) errors.phone = "Phone required";
    if (!data.address) errors.address = "Address required";
    return errors;
};

const sendEmails = async (data: FormData) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const adminMail = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "New CASHBATE Submission",
        text: `
New submission from ${data.firstName} ${data.lastName}

Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
Bedrooms: ${data.bedrooms}
Bathrooms: ${data.bathrooms}
Condition: ${data.condition}
Agent: ${data.agent}
Timeline: ${data.timeline}
Concern: ${data.concern}
    `,
    };

    const userMail = {
        from: process.env.EMAIL_FROM,
        to: data.email,
        subject: "Your CASHBATE Pre-Qualification is in Progress",
        text: `
Hi ${data.firstName || "there"},

We’ve received your information and our team is already reviewing your home.

Next steps:
- A CASHBATE specialist will contact you soon.
- We'll schedule your Pre-Qualification Visit.
- You'll get a detailed list of covered upgrades.

— The CASHBATE Team
    `,
    };

    await transporter.sendMail(adminMail);
    if (data.email) await transporter.sendMail(userMail);
};

// --- START OF CHANGES ---

// 1. Change the function signature to export async function POST
//    The 'req' parameter is now a standard Request object.
export async function POST(req: Request) {

    // 2. Remove the method check; this function *only* handles POST
    // if (req.method !== "POST") { ... }

    try {
        // 3. Get the body by calling req.json()
        const data: FormData = await req.json();

        console.log("API: Данные валидны. Начинаю запись в CSV...");
        await saveToCsvFile(data);
        console.log("API: Запись в CSV завершена.");

        // НЕ ЖДЕМ (убираем await)
        // Просто запускаем отправку email в фоновом режиме
        sendEmails(data).catch(err => {
            // Обязательно добавьте .catch, чтобы отловить
            // ошибку, если email не отправится.
            console.error("Ошибка фоновой отправки email:", err);
        });

        console.log("API: Отправляю ответ 200 (email отправляется в фоне).");

        // Сразу отвечаем пользователю, что все хорошо
        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );

    } catch (err) {
        console.error("API error:", err);
        // 6. Return error response
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
// --- END OF CHANGES ---
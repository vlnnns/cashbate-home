// app/api/save-partial/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface PartialFormData {
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
    step?: number; // какой шаг прислал данные
    sessionId?: string; // id сессии/юзера
}

const toCsvValue = (v: string | number | undefined | null): string => {
    if (v === undefined || v === null) return "";
    const s = String(v);
    return s.includes(",") || s.includes('"') || s.includes("\n")
        ? `"${s.replace(/"/g, '""')}"`
        : s;
};

const savePartialToCsv = async (data: PartialFormData) => {
    const file = path.join(process.cwd(), "submissions-partial.csv");
    const timestamp = new Date().toISOString();

    // можно держать отдельный CSV для черновиков,
    // чтобы не смешивать с финальными сабмитами
    const headers = [
        "timestamp",
        "sessionId",
        "step",
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
        data.sessionId,
        data.step,
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
        console.error("CSV partial write error:", err);
    }
};

export async function POST(req: Request) {
    try {
        const body: PartialFormData = await req.json();
        await savePartialToCsv(body);
        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error("partial error", e);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}

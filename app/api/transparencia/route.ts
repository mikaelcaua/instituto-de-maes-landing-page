import { NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

export const runtime = "nodejs";

const Schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  value: z.string().min(1),
  date: z.string().min(1),
});

export type ApiTransparencyItem = z.infer<typeof Schema>;

function getAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!clientEmail || !privateKey) {
    throw new Error(
      "Missing GOOGLE_SHEETS_CLIENT_EMAIL / GOOGLE_SHEETS_PRIVATE_KEY"
    );
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TRANSPARENCIA_TAB || "Transparencia";
  if (!spreadsheetId) throw new Error("Missing GOOGLE_SHEET_ID");
  return { spreadsheetId, tab };
}

function rowToItem(row: any[], rowIndex: number): ApiTransparencyItem | null {
  const [title, value, date] = row ?? [];

  const hasAny = [title, value, date].some(
    (v) => String(v ?? "").trim() !== ""
  );
  if (!hasAny) return null;

  const parsed = {
    id: String(rowIndex + 2),
    title: String(title ?? "").trim(),
    value: String(value ?? "").trim(),
    date: String(date ?? "").trim(),
  };

  const ok = Schema.safeParse(parsed);
  if (!ok.success) return null;
  return ok.data;
}

export async function GET() {
  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const { spreadsheetId, tab } = getConfig();

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${tab}!A2:C`,
    });
    const rows = res.data.values ?? [];

    const parsed = rows
      .map((r, i) => rowToItem(r, i))
      .filter((p): p is ApiTransparencyItem => Boolean(p));

    return NextResponse.json(parsed, {
      headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=240" },
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        message: "Erro ao buscar transparencia",
        error: e?.message ?? String(e),
      },
      { status: 500 }
    );
  }
}
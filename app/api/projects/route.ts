import { NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

export const runtime = "nodejs";

const ProjectSchema = z.object({
  id: z.string().min(1),
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  tags: z.array(z.string()),
  status: z.enum(["Em andamento", "Concluído"]),
  projectDetails: z.string().min(1),
  year: z.string().min(1),
  image: z.string().optional().default(""),
});

export type ApiProject = z.infer<typeof ProjectSchema>;

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
  const tab = process.env.GOOGLE_SHEET_TAB || "Projects";
  if (!spreadsheetId) throw new Error("Missing GOOGLE_SHEET_ID");
  return { spreadsheetId, tab };
}

function rowToProject(row: any[]): ApiProject | null {
  const [
    id,
    icon,
    title,
    description,
    tags,
    status,
    projectDetails,
    year,
    image,
  ] = row ?? [];

  const hasAny = [
    id,
    icon,
    title,
    description,
    tags,
    status,
    projectDetails,
    year,
    image,
  ].some((v) => String(v ?? "").trim() !== "");
  if (!hasAny) return null;

  const parsed: ApiProject = {
    id: String(id ?? "").trim(),
    icon: String(icon ?? "").trim(),
    title: String(title ?? "").trim(),
    description: String(description ?? "").trim(),
    tags: String(tags ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    status: status === "Concluído" ? "Concluído" : "Em andamento",
    projectDetails: String(projectDetails ?? "").trim(),
    year: String(year ?? "").trim(),
    image: String(image ?? "").trim(),
  };

  const ok = ProjectSchema.safeParse(parsed);
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
      range: `${tab}!A2:I`,
    });

    const rows = res.data.values ?? [];

    const parsed = rows
      .map(rowToProject)
      .filter((p): p is ApiProject => Boolean(p));

    const withIndex = parsed.map((p, idx) => ({ p, idx }));
    withIndex.sort((a, b) => {
      const y = (b.p.year || "").localeCompare(a.p.year || "");
      if (y !== 0) return y;
      return b.idx - a.idx;
    });

    const projects = withIndex.map((x) => x.p);

    return NextResponse.json(projects, {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=240",
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { message: "Erro ao buscar projetos", error: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}

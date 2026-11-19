import { NextResponse } from "next/server";
import type { Job } from "@/lib/api";

// Placeholder data matching the design — replace with the real jobs backend.
const JOBS: Job[] = [
  { id: "1", title: "عنوان آگهی", company: "نام شرکت", address: "آدرس", cooperation: "نوع همکاری", city: "tehran", salary: 160000 },
  { id: "2", title: "عنوان آگهی", company: "نام شرکت", address: "آدرس", cooperation: "نوع همکاری", city: "mashhad", salary: 160000 },
  { id: "3", title: "عنوان آگهی", company: "نام شرکت", address: "آدرس", cooperation: "نوع همکاری", city: "isfahan", salary: 160000 },
];

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  const city = searchParams.get("city");

  const items = JOBS.filter(
    (job) => (!q || job.title.includes(q) || job.company.includes(q)) && (!city || job.city === city),
  );

  return NextResponse.json({ items });
}

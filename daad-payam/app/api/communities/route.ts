import { NextResponse } from "next/server";
import type { Community } from "@/lib/api";

// Placeholder data matching the design — replace with the real communities backend.
const COMMUNITIES: Community[] = [
  {
    id: "tech",
    title: "فناوری",
    description: "گفت‌وگو درباره فناوری‌های نو و تأثیرشان بر زندگی",
    category: "more",
    icon: "tech",
    image: null,
  },
  {
    id: "culture",
    title: "فرهنگ",
    description: "تبادل دیدگاه درباره هنر، آداب و زندگی اجتماعی",
    category: "more",
    icon: "culture",
    image: "/images/community-culture.png",
  },
  {
    id: "psychology",
    title: "روان شناسی",
    description: "اشتراک تجربه، حل مسئله و گفت‌وگو درباره کدنویسی",
    category: "legal",
    icon: "psychology",
    image: "/images/community-psychology.png",
  },
  {
    id: "economy",
    title: "اقتصاد و بازار",
    description: "تحلیل روندهای اقتصادی و تبادل دیدگاه درباره بازارها",
    category: "business",
    icon: "economy",
    image: "/images/community-economy.png",
  },
];

export function GET(request: Request) {
  const category = new URL(request.url).searchParams.get("category");
  const items = category ? COMMUNITIES.filter((c) => c.category === category) : COMMUNITIES;
  return NextResponse.json({ items });
}

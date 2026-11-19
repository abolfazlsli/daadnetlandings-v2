import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export type CategoryKey = "all" | "business" | "legal" | "more";

export type Community = {
  id: string;
  title: string;
  description: string;
  category: Exclude<CategoryKey, "all">;
  icon: "tech" | "culture" | "psychology" | "economy";
  image: string | null;
};

export async function fetchCommunities(category: CategoryKey) {
  const { data } = await api.get<{ items: Community[] }>("/communities", {
    params: category === "all" ? undefined : { category },
  });
  return data.items;
}

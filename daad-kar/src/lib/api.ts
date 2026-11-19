import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export type Job = {
  id: string;
  title: string;
  company: string;
  address: string;
  cooperation: string;
  city: string;
  salary: number;
  logo?: string;
};

export type JobQuery = { q?: string; city?: string };

export async function fetchJobs(params: JobQuery) {
  const { data } = await api.get<{ items: Job[] }>("/jobs", { params });
  return data.items;
}

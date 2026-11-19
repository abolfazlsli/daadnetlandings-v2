import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export type ContactPayload = {
  fullName: string;
  phone: string;
  message: string;
};

export async function sendContact(payload: ContactPayload) {
  const { data } = await api.post<{ ok: boolean; message: string }>("/contact", payload);
  return data;
}

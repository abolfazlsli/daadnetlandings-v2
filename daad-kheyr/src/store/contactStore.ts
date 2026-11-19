import { create } from "zustand";
import { isAxiosError } from "axios";
import { sendContact, type ContactPayload } from "@/lib/api";

type Status = "idle" | "loading" | "success" | "error";

type ContactState = {
  status: Status;
  error: string | null;
  submit: (payload: ContactPayload) => Promise<boolean>;
  reset: () => void;
};

export const useContactStore = create<ContactState>((set) => ({
  status: "idle",
  error: null,
  submit: async (payload) => {
    set({ status: "loading", error: null });
    try {
      await sendContact(payload);
      set({ status: "success" });
      return true;
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data as { message?: string } | undefined)?.message ?? "ارسال پیام با خطا مواجه شد"
        : "ارسال پیام با خطا مواجه شد";
      set({ status: "error", error: message });
      return false;
    }
  },
  reset: () => set({ status: "idle", error: null }),
}));

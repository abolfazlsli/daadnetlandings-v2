import { create } from "zustand";
import { fetchJobs, type Job } from "@/lib/api";

type JobState = {
  query: string;
  city: string;
  jobs: Job[];
  loading: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  setCity: (city: string) => void;
  load: () => Promise<void>;
};

export const useJobStore = create<JobState>((set, get) => ({
  query: "",
  city: "all",
  jobs: [],
  loading: false,
  error: null,
  setQuery: (query) => set({ query }),
  setCity: (city) => set({ city }),
  load: async () => {
    const { query, city } = get();
    set({ loading: true, error: null });
    try {
      const jobs = await fetchJobs({ q: query.trim() || undefined, city: city === "all" ? undefined : city });
      set({ jobs, loading: false });
    } catch {
      set({ loading: false, error: "دریافت آگهی‌ها با خطا مواجه شد" });
    }
  },
}));

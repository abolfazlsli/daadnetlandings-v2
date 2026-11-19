import { create } from "zustand";
import { fetchCommunities, type CategoryKey, type Community } from "@/lib/api";

type CommunityState = {
  category: CategoryKey;
  communities: Community[];
  loading: boolean;
  error: string | null;
  followed: string[];
  setCategory: (category: CategoryKey) => Promise<void>;
  load: () => Promise<void>;
  toggleFollow: (id: string) => void;
};

export const useCommunityStore = create<CommunityState>((set, get) => ({
  category: "all",
  communities: [],
  loading: false,
  error: null,
  followed: [],
  setCategory: async (category) => {
    set({ category });
    await get().load();
  },
  load: async () => {
    set({ loading: true, error: null });
    try {
      const communities = await fetchCommunities(get().category);
      set({ communities, loading: false });
    } catch {
      set({ loading: false, error: "دریافت انجمن‌ها با خطا مواجه شد" });
    }
  },
  toggleFollow: (id) =>
    set(({ followed }) => ({
      followed: followed.includes(id) ? followed.filter((f) => f !== id) : [...followed, id],
    })),
}));

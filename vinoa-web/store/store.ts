import { create } from 'zustand';

interface UserStore {
  user: {
    name: string;
    id: string;
  };
  setUser: (user: { name: string; id: string }) => void;
  updateUserName: (name: string) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: {
    name: '',
    id: '',
  },
  setUser: (user) => set({ user }),
  updateUserName: (name) => set((state) => ({ user: { ...state.user, name } })),
}));

interface SanityUserStore {
  sanityUser: {
    name: string;
    uid: string;
    slug: string;
    image: string;
    wines: Wine[];
  };
  setSanityUser: (sanityUser: {
    name: string;
    uid: string;
    slug: string;
    image: string;
    wines: Wine[];
  }) => void;
}

export const useSanityUserStore = create<SanityUserStore>()((set) => ({
  sanityUser: {
    name: '',
    uid: '',
    slug: '',
    image: '',
    wines: [],
  },
  setSanityUser: (sanityUser) => set({ sanityUser }),
}));

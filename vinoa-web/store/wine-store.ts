import { create } from 'zustand';

interface WineStore {
  wines: Wine[];
  setWines: (wines: Wine[]) => void;
}

export const useWineStore = create<WineStore>()((set) => ({
  wines: Array<Wine>(),
  setWines: (wines) => set({ wines }),
}));

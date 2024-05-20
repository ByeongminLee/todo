import { create } from 'zustand';

interface State {
  locale: string;
}

interface Actions {
  actions: {
    setLocale: ({ locale }: { locale: string }) => void;
  };
}

const initialState: State = { locale: 'ko' };

export const useLocaleStore = create<State & Actions>(set => ({
  ...initialState,
  actions: {
    setLocale: ({ locale }) => set({ locale: locale }),
  },
}));

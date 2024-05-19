import { create } from 'zustand';

interface State {
  userId: string;
}

interface Actions {
  actions: {
    setUser: ({ userId }: { userId: string }) => void;
    logoutState: () => void;
  };
}

const initialState: State = { userId: '' };

export const useUserStore = create<State & Actions>(set => ({
  ...initialState,
  actions: {
    setUser: ({ userId }) => set({ userId: userId }),
    logoutState: () => set(initialState),
  },
}));

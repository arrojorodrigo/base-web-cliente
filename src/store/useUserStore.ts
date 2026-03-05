import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            login: (username) => set({ user: username }),
            logout: () => set({ user: null }),
        }),
        {
            name: 'usuario_logueado', // Maintain the same key used in the previous app
        }
    )
);

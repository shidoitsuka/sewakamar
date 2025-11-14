import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
	id: string;
	email: string;
	name: string;
}

interface AuthState {
	user: User | null;
	token: string | null;
	setAuth: (user: User, token: string) => void;
	setToken: (token: string) => void;
	clearAuth: () => void;
	isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set, get) => ({
			user: null,
			token: null,
			setToken: (token: string): void => {
				set({ token });
			},
			setAuth: (user, token): void => {
				set({ user, token });
			},
			clearAuth: (): void => {
				set({ user: null, token: null });
			},
			isAuthenticated: (): boolean => !!get().token,
		}),
		{
			name: "auth-storage",
		}
	)
);

// store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

interface AuthState {
  authToken: string;
  setAuthToken: (token: string) => void;
  logOut: () => void;
}

export const useAuthState = create<AuthState>()(
  persist(
    (set) => ({
      authToken: '',
      setAuthToken: (token: string) => {
        Cookies.set('token', token, { expires: 1, secure: true, sameSite: 'Strict' });
        set({ authToken: token });
      },
      logOut: () => {
        Cookies.remove('token');
        set({ authToken: '' });
      },
    }),
    {
      name: 'auth-store'
    }
  )
);

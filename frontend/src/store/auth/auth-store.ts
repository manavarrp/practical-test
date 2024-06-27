import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
  Name: string;
  Email: string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  exp: number;
  iss: string;
  aud: string;
}

interface AuthState {
  authToken: string;
  user: {id: string; name: string; email: string; role: string } | null;
  setAuthToken: (token: string) => void;
  logOut: () => void;
}

export const useAuthState = create<AuthState>()(
  persist(
    (set) => ({
      authToken: '',
      user: null,
      setAuthToken: (token: string) => {
        Cookies.set('token', token, { expires: 1, secure: true, sameSite: 'Strict' });
        const decoded = jwtDecode<DecodedToken>(token);
        set({
          authToken: token,
          user: {
            id: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
            name: decoded.Name,
            email: decoded.Email,
            role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
          },
        });
      },
      logOut: () => {
        Cookies.remove('token');
        set({ authToken: '', user: null });
      },
    }),
    {
      name: 'auth-store',
    }
  )
);

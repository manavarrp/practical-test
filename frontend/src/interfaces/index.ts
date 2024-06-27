
export interface LoginParams {
    email: string;
    password: string;
}

export interface RegisterParams {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface CustomerParams {
    identificationNumber: string;
    name: string;
    lastName: string;
    occupationId: number;
  }

export interface RegisterResponse {
    flag: boolean;
    message?: string;
    errors?: Record<string, string>;
}

export interface Customer {
    id: number;
    identificationNumber: string;
    name: string;
    lastName: string;
    occupationName: string;
    occupationId: number;
}

export interface Occupations {
    id: number;
    name: string;
}
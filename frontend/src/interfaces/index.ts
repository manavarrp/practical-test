
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
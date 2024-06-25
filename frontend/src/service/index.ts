import axios from "@/axios";

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface CustomerParams {
  identificationNumber: string;
  name: string;
  lastName: string;
  occupationId: number;
}

export const loginService = async ({ email, password }: LoginParams) => {
  const response = await axios.post("/Account/login", {
    email,
    password,
  });
  return response.data;
};

export const registerService = async ({
  name,
  lastName,
  email,
  password,
  confirmPassword,
}: RegisterParams) => {
  const response = await axios.post("/Account/register", {
    name,
    lastName,
    email,
    password,
    confirmPassword,
  });
  return response.data;
};

export const getOccupationService = async () => {
  const response = await axios.get("/Occupation");
  return response.data;
};

export const getCustomersService = async () => {
  const response = await axios.get("/Customer");
  return response.data;
};

export const postCustomerService = async ({
  identificationNumber,
  name,
  lastName,
  occupationId,
}: CustomerParams) => {
  const response = await axios.post("/Customer", {
    identificationNumber,
    name,
    lastName,
    occupationId,
  });
  return response.data;
};

export const putCustomerService = async ({
  identificationNumber,
  name,
  lastName,
  occupationId,
}: CustomerParams) => {
  const response = await axios.put("/Customer", {
    identificationNumber,
    name,
    lastName,
    occupationId,
  });
  return response.data;
}

export const deleteCustomerService = async (id: number) => {
  const response = await axios.delete(`/Customer/delete/${id}`, {
    params: { id },
  });
  return response.data;
};

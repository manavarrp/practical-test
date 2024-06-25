// useGetCustomer.ts
"use client";

import { getCustomersService } from "@/service";
import { useCallback, useEffect, useState } from "react";

export const UseGetCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const getCustomer = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCustomersService();
      setResult(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  return { loading, result, getCustomer };
};

"use client"

import { useCallback, useEffect, useState } from "react";
import { getOccupationService } from '../service/index';

export const UseGetOccupation = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);

    const getOccupation = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getOccupationService();
            setResult(response);
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    },[])

    useEffect(() => {
        getOccupation()
      }, [getOccupation])
    return {loading, result, getOccupation}
}
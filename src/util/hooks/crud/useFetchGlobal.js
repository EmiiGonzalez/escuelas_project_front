/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchGlobal = (url) => {
  const [data , setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataGlobal = async () => {
    setIsLoading(true);
    try{
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
    finally{
      setIsLoading(false);
    }
  }

  const updateData = ( (obj) => {
   setData([...data, obj]);
  })

 useEffect(() => {
   fetchDataGlobal();
 }, [url])

  return { data, error, isLoading, updateData };
};

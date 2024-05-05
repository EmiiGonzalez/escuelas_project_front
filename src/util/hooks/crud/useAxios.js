import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [errorRequest, setErrorRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_base_url + import.meta.env.VITE_base_version_api,
  });

  axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  let controller = new AbortController();

  useEffect(() => {
    return () => controller?.abort();
  }, []);

  const fetchData = async ({ url, method, data = {}, params = {} }) => {
    setIsLoading(true);

    controller.abort();
    controller = new AbortController();
    try {
      const result = await axiosInstance({
        url: url,
        method: method,
        data: data,
        params: params,
        signal: controller.signal,
      });
      setResponse(result.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        setErrorRequest(error.response ? error.response.data.message : error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { response, errorRequest, isLoading, fetchData };
};

export default useAxios;

import axios from "axios";
import { useState } from "react";

export const useFetchData = (url) => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const fetchData = (async () => {
    try {
      setState((prevState) => ({
        ...prevState,
        error: null,
        loading: true,
      }));
      console.log(state);
      const response = await axios.get(url);
      setState((prevState) => ({
        ...state,
        data: response.data,
        loading: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error,
        loading: true,
      }));
    }
  });

  const reloadData = ( () => {
    fetchData();
  });

  return {state, reloadData, fetchData};
};
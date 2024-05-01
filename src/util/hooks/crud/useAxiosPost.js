import { useState } from "react";
import axios from "axios";

export const useAxiosPost = () => {
  const [errorPost, setErrorPost] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [response, setResponse] = useState(null);

  const postData = (url, data) => {
    setIsLoading(true);

    axios.post(url, data)
      .then((response) => {
        setResponse(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorPost(error);
        setIsLoading(false);
        setResponse(null);
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  return  {postData, response, isLoading, errorPost} ;
};
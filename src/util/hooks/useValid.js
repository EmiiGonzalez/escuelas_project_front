import { useState } from "react";

export const useValid = () => {
    const [string, setString] = useState("");
    const [error, setError] = useState({
      state: false,
      message: "",
    });

    return  {
        string, setString, setError, error
    }
}
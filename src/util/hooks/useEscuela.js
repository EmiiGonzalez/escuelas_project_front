import { useState } from "react";

export const useEscuela = () => {
    const [escuela, setEscuela] = useState("");
    const [error, setError] = useState({
      state: false,
      message: "",
    });

    return  {
        escuela, setEscuela, setError, error
    }
}
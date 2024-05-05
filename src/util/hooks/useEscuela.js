import { useState } from "react";

export const useEscuela = () => {
    const [escuela, setEscuela] = useState({
      nombre: "",
      id: 0,
    });
    const [error, setError] = useState({
      state: false,
      message: "",
    });

    return  {
        escuela, setEscuela, setError, error
    }
}
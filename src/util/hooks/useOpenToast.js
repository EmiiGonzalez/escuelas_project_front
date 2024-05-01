import { useState } from "react";
export const useOpenToast = () => {
  const [variante, setVariante] = useState("");
  const [msg, setMsg] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const handleOpenToast = (v, m) => {
    setVariante(v);
    setMsg(m);
    setOpenToast(true);
  };

  return { variante, msg, handleOpenToast, openToast, setOpenToast }; 
};

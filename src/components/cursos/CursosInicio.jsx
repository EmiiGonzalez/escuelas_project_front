import { Box, Typography } from "@mui/material";
import { useFetchGlobal } from "../../util/hooks/crud/useFetchGlobal";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { EscuelaCard } from "./EscuelaCard";

export const CursosInicio = ({ url, handleOpenToast, tema }) => {
  let { escuelaId, year } = useParams();
  let urlEscuela = url + import.meta.env.VITE_api_get_escuela + "/" + escuelaId;
  let urlCursos = url + import.meta.env.VITE_api_get_all_curso + "/" + escuelaId + "/" + year;

  const datosCursos = useFetchGlobal(urlCursos);
  const datosEscuela = useFetchGlobal(urlEscuela);

  if (datosEscuela.isLoading || datosCursos.isLoading) return <CircularProgress/>

  if (datosEscuela.error || datosCursos.error) handleOpenToast("error", datosEscuela.error.message)

  return (
    <Box sx={{ width: "100%" }}>
      <EscuelaCard datosEscuela={datosEscuela} tema={tema} />

      <ul>
        {
          datosCursos.data.map((c) => <li key={c.id}>{c.nombre}</li>)
        }
      </ul>
    </Box>
  );
};

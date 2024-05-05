import { FormInicio } from "./FormInicio";
import { useFetchGlobal } from "../../util/hooks/crud/useFetchGlobal";
import { Alert, CircularProgress } from "@mui/material";
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'


export const Inicio = ({ url, tema, handleOpenToast }) => {
  const urlApi = url + import.meta.env.VITE_api_get_all_escuelas;
  const {data, error, isLoading, updateData} = useFetchGlobal(urlApi);

  if (isLoading && !error) {
    return <CircularProgress />;
  }

  if (error) {
    console.log(error);
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormInicio data={data} tema={tema} updateData={updateData} url={url} handleOpenToast={handleOpenToast}/>
    </Box>
  );
};

Inicio.propTypes = {
  url: PropTypes.string.isRequired,
  tema: PropTypes.string.isRequired,
  handleOpenToast: PropTypes.func.isRequired
}

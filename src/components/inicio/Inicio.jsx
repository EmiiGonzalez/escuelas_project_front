import { FormInicio } from "./FormInicio";
import { useFetchData } from "../../util/useFetchData";
import { Alert, CircularProgress } from "@mui/material";
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { useEffect } from "react";

export const Inicio = ({ url, tema, handleOpenToast }) => {
  const urlApi = url + import.meta.env.VITE_api_get_all_escuelas;

  const {state, reloadData, fetchData} = useFetchData(urlApi);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if (state.loading && state.error === null) {
    return <CircularProgress />;
  }

  if (state.error) {
    console.log(state.error);
  }

  if (state.data) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormInicio data={state.data} tema={tema} reloadData={reloadData} url={url} handleOpenToast={handleOpenToast}/>
      </Box>
    );
  }

  return <Alert severity="error">{state.error.message}</Alert>;
};

Inicio.propTypes = {
  url: PropTypes.string.isRequired,
  tema: PropTypes.string.isRequired,
  handleOpenToast: PropTypes.func.isRequired
}
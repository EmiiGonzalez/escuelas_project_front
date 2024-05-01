import { Button } from "@mui/material";
import { ModalAddEscuela } from "./ModalAddEscuela";
import { AutoCompleteEscuela } from "./AutoCompleteEscuela";
import { useEscuela } from "../../util/hooks/useEscuela";
import { PropTypes } from "prop-types"
import AddIcon from '@mui/icons-material/Add';
import { useHandleOpen } from "../../util/hooks/useHandleOpen";
import Box from "@mui/material/Box";

export const FormInicio = ({ data, tema, reloadData, url, handleOpenToast }) => {
  const { escuela, setEscuela, error, setError } = useEscuela();
  const { open, handleOpen, handleClose } = useHandleOpen();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (escuela == "") {
      setError({
        state: true,
        message: "Por favor, ingrese una escuela de la lista",
      });
      event.target[0].focus();
      return;
    }
  };

  return (
    <Box
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit}
    >
      <AutoCompleteEscuela
        data={data}
        setError={setError}
        escuela={escuela}
        tema={tema}
        error={error}
        setEscuela={setEscuela}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      >
        <Button
          variant={tema === "light" ? "contained" : "outlined"}
          type="submit"
        >
          Buscar
        </Button>
        <Button
          onClick={handleOpen}
          variant={tema === "light" ? "contained" : "outlined"}
          color="success"
          startIcon={<AddIcon />}
          open={open}
          onClose={handleClose}
          tema={tema}
        >
          Añadir
        </Button>
        <ModalAddEscuela open={open} handleClose={handleClose} tema={tema} reloadData={reloadData} url={url} handleOpenToast={handleOpenToast}/>
      </Box>
    </Box>
  );
};

FormInicio.propTypes = {
  data: PropTypes.array.isRequired,
  tema: PropTypes.string.isRequired,
}
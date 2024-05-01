import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { PropTypes } from "prop-types";
import { useEscuela } from "../../util/hooks/useEscuela";
import { useAxiosPost } from "../../util/hooks/crud/useAxiosPost";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const ModalAddEscuela = ({
  tema,
  open,
  handleClose,
  reloadData,
  url,
  handleOpenToast
}) => {

  const { escuela, setEscuela, error, setError } = useEscuela();
  const urlPostEscuela = `${url + import.meta.env.VITE_api_post_escuelas}`;
  const { postData, response, isLoading, errorPost } = useAxiosPost();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (escuela === "") {
      setError({
        state: true,
        message: "Por favor, ingrese una escuela",
      });
      event.target[0].focus();
      return;
    }

    postData(urlPostEscuela, { nombre: escuela });
    console.log(errorPost);

    handleOpenToast("success", `Escuela ${escuela} agregada`);
    handleClose();
    reloadData();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} component={"form"} onSubmit={handleSubmit}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              color: "text.primary",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Agregar escuela
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Escuela"
              variant={tema === "light" ? "filled" : "outlined"}
              sx={{ width: "100%", mb: 2 }}
              error={error.state}
              helperText={error.message}
              autoComplete="off"
              value={escuela}
              onChange={(event) => {
                setEscuela(event.target.value);
                setError({ state: false, message: "" });
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  setError({
                    state: true,
                    message: "Por favor, ingrese una escuela",
                  });
                }
              }}
            />
            <Button
              sx={{ ml: 2 }}
              variant={tema === "light" ? "contained" : "outlined"}
              type="submit"
              color="success"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

ModalAddEscuela.propTypes = {
  tema: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

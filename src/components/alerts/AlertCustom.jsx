import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PropTypes from 'prop-types'

export const AlertCustom = ({ openToast, setOpenToast, variante, msg, tema }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };

  const widthWindow = window.innerWidth;
  let positionY = widthWindow > 500 ? "bottom" : "top";
  const positionX = positionY === "bottom" ? "right" : "center";
  const widthAlert = widthWindow > 500 ? `40vw` : "100%";

  return (
    <Snackbar open={openToast} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: positionY, horizontal: positionX }}>
      <Alert
        onClose={handleClose}
        severity={variante}
        variant={tema === "light" ? "filled" : "outlined"}
        sx={{ width: widthAlert, fontWeight: "bold", minWidth: "300px" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

AlertCustom.propTypes = {
  openToast: PropTypes.bool.isRequired,
  setOpenToast: PropTypes.func.isRequired,
  variante: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  tema: PropTypes.string.isRequired,
}

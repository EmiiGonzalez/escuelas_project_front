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

  return (
    <Snackbar open={openToast} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert
        onClose={handleClose}
        severity={variante}
        variant={tema === "light" ? "filled" : "outlined"}
        sx={{ width: "100%", fontWeight: "bold" }}
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

import PropTypes from "prop-types";
import { Button, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/material";

export const EscuelaCard = ({ datosEscuela, tema }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        height: "15vh",
      }}
    >
      <Box
        sx={{
          marginRight: "2rem",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" color={"text.primary"}>
          {datosEscuela.data.nombre}
        </Typography>
      </Box>
      <Box>
        <IconButton color="success" aria-label="edit" component="label" >
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

EscuelaCard.propTypes = {
  datosEscuela: PropTypes.object,
};

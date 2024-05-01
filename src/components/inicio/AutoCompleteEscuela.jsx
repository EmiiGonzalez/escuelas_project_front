import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types'


export const AutoCompleteEscuela = ( { data, setEscuela, setError, tema, error }) => {
  return (
    <Autocomplete
        freeSolo={false}
        options={data}
        getOptionLabel={(option) => option?.nombre || ""}
        onChange={(event, newValue) => {
          // newValue será null si se borra la selección
          setEscuela(newValue ? newValue.nombre : "");
          setError({
            state: !newValue,
            message: newValue
              ? ""
              : "Por favor, ingrese una escuela de la lista",
          });
        }}
        onInputChange={(event, newInputValue) => {
          // Actualiza el estado de error cuando se escribe en el campo de texto
          if (!newInputValue) {
            setError({
              state: true,
              message: "Por favor, ingrese una escuela de la lista",
            });
          }
        }}
        onBlur={
          (event) => {
            if (!event.target.value) {
              setError({
                state: true,
                message: "Por favor, ingrese una escuela de la lista",
              });
            }
          }
        }
        renderInput={(params) => (
          <TextField
            variant={tema === "light" ? "filled" : "outlined"}
            sx={{color: 'text.primary'}}
            {...params}
            label="Escuela"
            error={error.state}
            helperText={error.message}
          />
        )}
        sx={{ width: 300, mb: 2 }}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.nombre}
          </li>
        )}
      />
  )
}

AutoCompleteEscuela.propTypes = {
  data: PropTypes.array,
  setEscuela: PropTypes.func,
  setError: PropTypes.func,
  tema: PropTypes.string,
  error: PropTypes.object
}
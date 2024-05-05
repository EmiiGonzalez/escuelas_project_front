import { Container } from "@mui/material";
import { useLocalStorage } from "./util/hooks/useLocalStorage";
import { themeOptions } from "./util/themeOptions.js";
import { ThemeProvider } from "@emotion/react";
import { BoxTheme } from "./components/inicio/BoxTheme";
import { Inicio } from "./components/inicio/Inicio";
import { AlertCustom } from "./components/alerts/AlertCustom.jsx";
import { useOpenToast } from "./util/hooks/useOpenToast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CursosInicio } from "./components/cursos/CursosInicio.jsx";

function App() {
  const [tema, setTema] = useLocalStorage("theme", "dark");
  const theme = themeOptions(tema);
  const { variante, msg, handleOpenToast, openToast, setOpenToast } =
    useOpenToast();
  const url =
    import.meta.env.VITE_base_url + import.meta.env.VITE_base_version_api;

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          border: "1px solid black",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "background.default",
        }}
        maxWidth="xl"
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Inicio
                  url={url}
                  tema={tema}
                  handleOpenToast={handleOpenToast}
                />
              }
            />
            <Route
              path="/cursos/:escuelaId/:year"
              element={
                <CursosInicio
                  url={url}
                  tema={tema}
                  handleOpenToast={handleOpenToast}
                />
              }
            />
          </Routes>
        </Router>
        <BoxTheme tema={tema} setTema={setTema} />
      </Container>
      <AlertCustom
        openToast={openToast}
        setOpenToast={setOpenToast}
        variante={variante}
        msg={msg}
        tema={tema}
      />
    </ThemeProvider>
  );
}

export default App;

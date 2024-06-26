import { createTheme } from "@mui/material";

export const themeOptions = (theme) => {
  return createTheme({
    palette: {
      mode: theme,
      ...(theme === "dark"
        ? {
            primary: {
              main: "#1976d2",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
            },
            background: {
              default: "#121212",
              paper: "#121212",
            },
          }
        : {
            primary: {
              main: "#6976d2",
            },
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
              disabled: "rgba(0, 0, 0, 0.38)",
            },
            background: {
              default: "#F5F5F5",
              paper: "#fff",
            },
          }),
    },
  });
};

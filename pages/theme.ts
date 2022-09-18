import { createTheme, ThemeOptions } from "@mui/material";

const theme = createTheme({
  palette: {
    Grass: {
      main: "#9fb641",
      contrastText: "#fff",
    },
    Poison: {
      main: "#8062a0",
      contrastText: "#fff",
    },
  },
});

export default theme;

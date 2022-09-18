import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    Grass?: PaletteOptions["primary"];
    Poison?: PaletteOptions["primary"];
  }
  interface Palette {
    Grass: Palette["primary"];
    Poison: Palette["primary"];
  }
}

declare module "@mui/material" {
  interface ChipPropsColorOverrides {
    Grass: true;
    Poison: true;
  }
}

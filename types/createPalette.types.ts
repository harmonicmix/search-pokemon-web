import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    Grass?: PaletteOptions["primary"];
    Poison?: PaletteOptions["primary"];
    Bug?: PaletteOptions["primary"];
    Dark?: PaletteOptions["primary"];
    Dragon?: PaletteOptions["primary"];
    Electric?: PaletteOptions["primary"];
    Fairy?: PaletteOptions["primary"];
    Fighting?: PaletteOptions["primary"];
    Fire?: PaletteOptions["primary"];
    Flying?: PaletteOptions["primary"];
    Ghost?: PaletteOptions["primary"];
    Ground?: PaletteOptions["primary"];
    Ice?: PaletteOptions["primary"];
    Normal?: PaletteOptions["primary"];
    Psychic?: PaletteOptions["primary"];
    Rock?: PaletteOptions["primary"];
    Steel?: PaletteOptions["primary"];
    Water?: PaletteOptions["primary"];
  }
  interface Palette {
    Grass: PaletteOptions["primary"];
    Poison: PaletteOptions["primary"];
    Bug: PaletteOptions["primary"];
    Dark: PaletteOptions["primary"];
    Dragon: PaletteOptions["primary"];
    Electric: PaletteOptions["primary"];
    Fairy: PaletteOptions["primary"];
    Fighting: PaletteOptions["primary"];
    Fire: PaletteOptions["primary"];
    Flying: PaletteOptions["primary"];
    Ghost: PaletteOptions["primary"];
    Ground: PaletteOptions["primary"];
    Ice: PaletteOptions["primary"];
    Normal: PaletteOptions["primary"];
    Psychic: PaletteOptions["primary"];
    Rock: PaletteOptions["primary"];
    Steel: PaletteOptions["primary"];
    Water: PaletteOptions["primary"];
  }
}

declare module "@mui/material" {
  interface ChipPropsColorOverrides {
    Grass: true;
    Poison: true;
    Bug: true;
    Dark: true;
    Dragon: true;
    Electric: true;
    Fairy: true;
    Fighting: true;
    Fire: true;
    Flying: true;
    Ghost: true;
    Ground: true;
    Ice: true;
    Normal: true;
    Psychic: true;
    Rock: true;
    Steel: true;
    Water: true;
  }
}

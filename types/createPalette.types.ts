import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    Grass?: stylees;
    Poison?: stylees;
    Bug?: stylees;
    Dark?: stylees;
    Dragon?: stylees;
    Electric?: stylees;
    Fairy?: stylees;
    Fighting?: stylees;
    Fire?: stylees;
    Flying?: stylees;
    Ghost?: stylees;
    Ground?: stylees;
    Ice?: stylees;
    Normal?: stylees;
    Psychic?: stylees;
    Rock?: stylees;
    Steel?: stylees;
    Water?: stylees;
  }

  interface stylees {
    main: string;
    contrastText: string;
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

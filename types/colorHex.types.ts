export interface Hex {
  color: colorString;
}

export interface colorString {
  Grass: colorObject;
}

export interface colorObject {
  mainColor: mainColor;
  contrastText: contrastText;
}

export enum mainColor {
  Grass = "#6d8b48",
}

export enum contrastText {
  Grass = "#fff",
}

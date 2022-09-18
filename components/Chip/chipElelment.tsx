import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Chip } from "@mui/material";
import { Type } from "../../types/pokemons.types";
import { OverridableStringUnion } from "@mui/types";

type Props = {
  label: Type[];
};

export interface ChipPropsColorOverrides {}

type NewChipType = OverridableStringUnion<
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning",
  ChipPropsColorOverrides
>;
const ChipElement: React.FC<Props> = ({ label }) => {
  return (
    <>
      {label &&
        label.map((nameType) => (
          <Chip
            key={nameType}
            label={nameType}
            sx={{ marginRight: 0.5 }}
            color={nameType as unknown as NewChipType}
          />
        ))}
    </>
  );
};

export default ChipElement;

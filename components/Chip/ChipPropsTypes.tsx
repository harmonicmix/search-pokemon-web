import { ChipProps } from "@mui/material";

type ChipPropsType = {
  color?: ChipProps["color"];
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
};

export default ChipPropsType;

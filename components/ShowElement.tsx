import * as React from "react";
import { Box, Typography } from "@mui/material";
import ChipElement from "../components/Chip/chipElelment";
import { Resistant } from "../types/pokemons.types";
type Props = {
  elements: Resistant[];
};

const ShowElement: React.FC<Props> = ({ elements }) => {
  return (
    <>
      <Box marginBottom={2}>
        <Typography gutterBottom fontWeight={"bold"}>
          Types
        </Typography>
        <ChipElement label={elements} />
      </Box>
    </>
  );
};

export default ShowElement;

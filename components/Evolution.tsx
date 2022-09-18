import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ChipElement from "../components/Chip/chipElelment";
import Avatar from "@mui/material/Avatar";
import { Evolution } from "../types/pokemons.types";
import AvatarEvoluton from "./AvatarEvolution";
import NextEvolutionIcon from "./NextEvolutionIcon";

type Props = {
  evolutions: Evolution[] | null;
  pokemonNowName: string;
  pokemonNowImage: string;
};

const Evolution: React.FC<Props> = ({
  evolutions,
  pokemonNowName,
  pokemonNowImage,
}) => {
  return (
    <Grid container style={{ marginTop: 15 }} spacing={1}>
      {evolutions ? (
        <>
          <Grid item xs={12} md={4} lg={3}>
            <AvatarEvoluton
              pokemonNowImage={pokemonNowImage}
              pokemonNowName={pokemonNowName}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={1}>
            <NextEvolutionIcon />
          </Grid>
        </>
      ) : (
        <></>
      )}
      {evolutions?.map((evolution, index) => (
        <>
          <Grid item xs={12} md={4} lg={3}>
            <AvatarEvoluton
              pokemonNowImage={evolution.image}
              pokemonNowName={evolution.name}
            />
          </Grid>
          {evolutions.length - 1 !== index ? (
            <Grid item xs={12} md={4} lg={1}>
              <NextEvolutionIcon />
            </Grid>
          ) : (
            <></>
          )}
        </>
      ))}
    </Grid>
  );
};

export default Evolution;

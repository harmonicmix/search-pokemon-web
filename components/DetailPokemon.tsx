import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";

type Props = {
  weightMinimum: string;
  weightMaximum: string;
  heightMinimum: string;
  heightMaximum: string;
  maxCP: number;
  maxHP: number;
};

const DetailPokemon: React.FC<Props> = ({
  weightMinimum,
  weightMaximum,
  heightMinimum,
  heightMaximum,
  maxCP,
  maxHP,
}) => {
  return (
    <>
      <Box
        maxWidth="md"
        sx={{
          background: "#7ed6e5",
          padding: 4,
          borderRadius: 5,
          flexDirection: "row",
          marginBottom: 3,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={6} md={6} lg={6}>
            <Typography fontWeight={"bold"} gutterBottom component="div">
              Weight
            </Typography>
            <Typography gutterBottom component="div">
              {"Minimum: " + weightMinimum}
            </Typography>
            <Typography gutterBottom component="div">
              {"Maximum: " + weightMaximum}
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Typography fontWeight={"bold"} gutterBottom component="div">
              Height
            </Typography>
            <Typography gutterBottom component="div">
              {"Minimum: " + heightMinimum}
            </Typography>
            <Typography gutterBottom component="div">
              {"Maximum: " + heightMaximum}
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Typography fontWeight={"bold"} gutterBottom component="div">
              MaxCP: {maxCP}
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Typography fontWeight={"bold"} gutterBottom component="div">
              MaxHP: {maxHP}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DetailPokemon;

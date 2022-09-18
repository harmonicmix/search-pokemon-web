// components/Post.tsx

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Datum } from "../types/pokemons.types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ChipElement from "./Chip/chipElelment";
import Link from "@mui/material/Link";
type Props = {
  pokemondata: Datum;
};

const Post: React.FC<Props> = ({ pokemondata }) => {
  const data = pokemondata.pokemondata;
  return (
    <Grid
      sx={{ justifyContent: "center", alignItems: "center" }}
      item
      xs={12}
      md={8}
      lg={4}
    >
      <Link href={"/pokemons/" + data.name} underline="none">
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {"#" + data.number}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <ChipElement label={data.types} />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

export default Post;

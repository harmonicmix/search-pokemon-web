// components/Post.tsx

import * as React from "react";
import { Typography, Card, CardContent, Grid, Link } from "@mui/material";
import { Datum } from "../types/pokemons.types";
import ChipElement from "./Chip/chipElelment";
import Image from "next/image";
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
          <Image
            src={data.image}
            alt="a"
            width={"5%"}
            height={"5%"}
            layout="responsive"
            objectFit="contain"
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
        </Card>
      </Link>
    </Grid>
  );
};

export default Post;

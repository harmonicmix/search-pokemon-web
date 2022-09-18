import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Datum, Pokedex } from "../types/pokemons.types";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import PokemonLists from "../components/pokemonLists";
import Grid from "@mui/material/Grid";

interface Props {
  pokemons: Pokedex;
}

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  const { data } = pokemons;
  return (
    <Container>
      <Typography fontWeight={"bold"} variant="h2">
        POKEMON SEARCH
      </Typography>
      <Grid container spacing={2}>
        {data.map((pokemondata: Datum) => {
          return (
            <PokemonLists key={pokemondata.id} pokemondata={pokemondata} />
          );
        })}
      </Grid>
    </Container>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get("http://localhost:5558/pokemons");
  const result = await response.data;
  // console.log(result);
  const pokemons: Pokedex = result;
  return { props: { pokemons } };
};

export default Home;

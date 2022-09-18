import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Datum, Pokemondata } from "../../types/pokemons.types";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

interface Props {
  pokemon: Pokemondata;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon.name);

  return (
    <Container maxWidth="md">
      <Typography fontWeight={"bold"} variant="h1">
        POKEMON SEARCH
      </Typography>

      {/* {data.map((pokemondata: Datum) => {
        // eslint-disable-next-line react/jsx-key
        return <Typography>{pokemondata.pokemondata.name}</Typography>;
      })} */}
    </Container>
  );
};

export async function getStaticProps(context: { params: { name: any } }) {
  const pokemonName = context.params.name;
  const response = await axios.get(
    `http://localhost:5558/pokemons/search?name=${pokemonName}`
  );
  const { data } = await response.data;
  const pokemon: Pokemondata = data[0].pokemondata;
  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:5558/pokemons");
  const result = await response.data.data;
  const paths = result.map((pokemondata: Datum) => {
    const characterId = pokemondata.pokemondata.name;
    return {
      params: {
        name: characterId,
      },
    };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default Pokemon;

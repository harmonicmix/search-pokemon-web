import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from "axios";
import type { NextPage } from "next";
import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import { Datum, Pokemondata } from "../../types/pokemons.types";
import ChipElement from "../../components/Chip/chipElelment";
import DetailPokemon from "../../components/DetailPokemon";
import ShowElement from "../../components/ShowElement";

interface Props {
  pokemon: Pokemondata;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <Container maxWidth="md">
      <Typography fontWeight={"bold"} variant="h1">
        POKEMON SEARCH
      </Typography>
      <Box
        maxWidth="md"
        sx={{ background: "#ffffff", padding: 4, borderRadius: 5 }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} md={4} lg={4}>
            <Image
              src={pokemon.image}
              alt="a"
              width={"10%"}
              height={"10%"}
              layout="responsive"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Typography gutterBottom variant="h5" component="div">
              {"Name: " + pokemon.name}
            </Typography>
            <Typography gutterBottom component="div">
              {"Classification: " + pokemon.classification}
            </Typography>
            <DetailPokemon
              weightMinimum={pokemon.weight.minimum}
              weightMaximum={pokemon.weight.maximum}
              heightMinimum={pokemon.height.minimum}
              heightMaximum={pokemon.height.maximum}
              maxCP={pokemon.maxCP}
              maxHP={pokemon.maxHP}
            />
            <ShowElement elements={pokemon.types} />
            <ShowElement elements={pokemon.resistant} />
            <ShowElement elements={pokemon.weaknesses} />
          </Grid>
        </Grid>
      </Box>
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

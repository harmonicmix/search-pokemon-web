import axios from "axios";
import type { NextPage } from "next";
import {
  Typography,
  Container,
  Box,
  Grid,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Datum, Pokedex } from "../types/pokemons.types";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import { GetStaticProps } from "next";
import PokemonLists from "../components/pokemonLists";
import { debounce } from "lodash";
import { configs } from "../pages/constatns";

interface Props {
  pokemons: Pokedex;
}

const Home: NextPage<Props> = ({ pokemons }) => {
  const { data } = pokemons;
  const [pokemonsList, setPokemonsList] = useState(data);
  const [name, setName] = useState("");
  const debouncedSearch = useRef(
    debounce(async (name) => {
      setPokemonsList(await search(name));
    }, 300)
  ).current;

  async function search(name: string) {
    try {
      const response = await axios.get(
        `${configs.api_client_side}/pokemons/search?name=${name}`
      );
      const result = await response.data.data;

      return result;
    } catch (error) {}
  }

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
    setName(e.target.value);
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Container sx={{ marginBottom: 10 }}>
      <Typography fontWeight={"bold"} variant="h2">
        POKEMON SEARCH
      </Typography>
      <Box sx={{ marginY: 5 }}>
        <Typography fontWeight={"bold"}>search pokemon by name</Typography>
        <TextField
          value={name}
          fullWidth
          id="outlined-basic"
          onChange={handleChange}
          variant="outlined"
        />
      </Box>

      <Grid container spacing={2}>
        {pokemonsList ? (
          pokemonsList.map((pokemondata: Datum) => {
            return (
              <PokemonLists key={pokemondata.id} pokemondata={pokemondata} />
            );
          })
        ) : (
          <>
            <Alert severity="warning" sx={{ width: "100%" }}>
              <AlertTitle>Oh No!!!</AlertTitle>
              We not found pokemon
            </Alert>
          </>
        )}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get(`${configs.api}/pokemons`);
  const result = await response.data;
  const pokemons: Pokedex = result;
  return { props: { pokemons } };
};

export default Home;

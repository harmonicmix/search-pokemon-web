import * as React from "react";
import { Typography, Avatar, Link } from "@mui/material";

type Props = {
  pokemonNowName: string;
  pokemonNowImage: string;
};

const AvatarEvoluton: React.FC<Props> = ({
  pokemonNowName,
  pokemonNowImage,
}) => {
  return (
    <>
      <Link href={"/pokemons/" + pokemonNowName} underline="none">
        <Avatar
          sx={{
            width: 150,
            height: 150,
            border: "2px solid #000",
            boxShadow: 10,
            margin: "auto",
          }}
          alt="Remy Sharp"
          src={pokemonNowImage}
        />
        <Typography
          sx={{
            textAlign: "center",
            marginTop: 2,
            fontWeight: "bold",
          }}
        >
          {pokemonNowName}
        </Typography>
      </Link>
    </>
  );
};

export default AvatarEvoluton;

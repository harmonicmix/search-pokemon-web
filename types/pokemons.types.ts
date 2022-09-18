export interface Pokedex {
  statusName: string;
  data: Datum[];
}

export interface Datum {
  id: string;
  pokemondata: Pokemondata;
}

export interface Pokemondata {
  id: string;
  name: string;
  image: string;
  maxCP: number;
  maxHP: number;
  types: Resistant[];
  height: Eight;
  number: string;
  weight: Eight;
  attacks: Attacks;
  fleeRate: number;
  resistant: Resistant[];
  evolutions: Evolution[] | null;
  weaknesses: Resistant[];
  classification: string;
}

export interface Attacks {
  fast: Fast[];
  special: Fast[];
}

export interface Fast {
  name: null | string;
  type: Resistant | null;
  damage: number | null;
}

export enum Resistant {
  Bug = "Bug",
  Dark = "Dark",
  Dragon = "Dragon",
  Electric = "Electric",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Ghost = "Ghost",
  Grass = "Grass",
  Ground = "Ground",
  Ice = "Ice",
  Normal = "Normal",
  Poison = "Poison",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Water = "Water",
}

export interface Evolution {
  id: string;
  name: string;
  image: string;
  number: string;
  evolutions?: Evolution[] | null;
}

export interface Eight {
  maximum: string;
  minimum: string;
}

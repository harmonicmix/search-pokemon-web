export interface ResponseFromApi {
  statusName: string;
  data: Datum[];
}
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
  types: Type[];
  height: Eight;
  number: string;
  weight: Eight;
  attacks: Attacks;
  fleeRate: number;
  resistant: string[];
  evolutions: Evolution[];
  weaknesses: string[];
  classification: string;
}

export interface Attacks {
  fast: Fast[];
  special: Fast[];
}

export interface Fast {
  name: string;
  type: Type;
  damage: number;
}

export enum Type {
  Grass = "Grass",
  Normal = "Normal",
  Poison = "Poison",
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

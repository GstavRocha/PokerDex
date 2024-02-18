import {getPokemonColors, getPokemonNameFind, getPokeNameAndUrlAll} from "./Gets_Pokemon/getPokemon";

const URL_POKE:string = "https://pokeapi.co/api/v2/pokemon/"
const URL_COLOR: string = "https://pokeapi.co/api/v2/pokemon-color/"

getPokemonColors(URL_COLOR);
// getPokemonNameFind(URL_POKE,'onix')
import {getPokemonColors, getPokemonNameFind, getPokeNameAndUrlAll, findPokeLocalization} from "./Gets_Pokemon/getPokemon";
import { PokeClass } from "./Gets_Pokemon/getPokemon";
const URL_POKE:string = "https://pokeapi.co/api/v2/pokemon/"
const URL_COLOR: string = "https://pokeapi.co/api/v2/pokemon-color/"
const URL_LOCALIZATION = "https://pokeapi.co/api/v2/location/"

getPokemonColors(URL_COLOR, PokeClass);
getPokemonNameFind(URL_POKE,PokeClass,'onix');
findPokeLocalization(URL_LOCALIZATION);
// getLocalization(URL_LOCALIZATION,'onix', PokeClass);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPokemon_1 = require("./Gets_Pokemon/getPokemon");
const URL_POKE = "https://pokeapi.co/api/v2/pokemon/";
const URL_COLOR = "https://pokeapi.co/api/v2/pokemon-color/";
(0, getPokemon_1.getPokemonColors)(URL_COLOR);
// getPokemonNameFind(URL_POKE,'onix')

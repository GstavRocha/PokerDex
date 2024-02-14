"use strict";
const axios = require('axios');
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";
function getName(nom, ind) {
    axios.get(URL_POKEMON + ind)
        .then(function (response) {
        const data = response.data.abilities;
        console.log(data[ind].ability.name);
    });
}
// function getPokeUrl(param: string): any{
//     axios.get(URL_POKEMON)
//         .then(function (response: any):any{
//             const data = response.data.abilities
//             console.log(data[0].ability.url)
//             return data[0].ability.url
//         })
// }
getName(URL_POKEMON, 1);
// getPokeUrl(URL_POKEMON)

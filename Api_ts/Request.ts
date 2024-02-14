const axios = require('axios');

const URL_POKEMON: string = "https://pokeapi.co/api/v2/pokemon/";

function getName(nom: string, ind: number): any{
    axios.get(URL_POKEMON+ind)
        .then(function (response: any){
            const data = response.data.abilities
            console.log(data[ind].ability.name)
        })

}
// function getPokeUrl(param: string): any{
//     axios.get(URL_POKEMON)
//         .then(function (response: any):any{
//             const data = response.data.abilities
//             console.log(data[0].ability.url)
//             return data[0].ability.url
//         })
// }
getName(URL_POKEMON, 1)
// getPokeUrl(URL_POKEMON)
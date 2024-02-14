const axios = require('axios');

const URL_POKEMON: string = "https://pokeapi.co/api/v2/pokemon/35";

function getName(nom: string){
    axios.get(URL_POKEMON)
        .then(function (response: any){
            const data = response.data.abilities
            console.log(data[0].ability)
        })

}
getName(URL_POKEMON);
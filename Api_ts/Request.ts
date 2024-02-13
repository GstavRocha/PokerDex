const axios = require('axios');

const URL_POKEMON: string = "https://pokeapi.co/api/v2/pokemon/35";

axios.get(URL_POKEMON)
.then(function(response: any){
    console.log(response.status)
})
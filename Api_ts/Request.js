var axios = require('axios');
var URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/35";
axios.get(URL_POKEMON)
    .then(function (response) {
    console.log(response.status);
});

var axios = require('axios');
var URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/35";
function getName(nom) {
    axios.get(URL_POKEMON)
        .then(function (response) {
        var data = response.data.abilities;
        console.log(data[0].ability);
    });
}
getName(URL_POKEMON);

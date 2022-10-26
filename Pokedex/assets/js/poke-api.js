

const pokeapi = {};

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types= pokeDetail.types.map((typeSlot)=> typeSlot.type.name)

    const [type] = types

    pokemon.types=types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).
    then((response)=>response.json())
    .then(convertPokeApiDetailToPokemon)
}
pokeapi.getPokemons = (offset=0,limit=5) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)

    // Podemos simplificar ainda mais usando arrowfunctions, quando não há nenhum além do retorno, podemos usa-la em apenas uma linha

    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)

    // Lista transformada em uma nova lista com promisses com detalhes do pokemon e transformada novamente em json
    .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))

    // requisitamos a lista detalhada dos pokemons e esperamos todas serem realizadas
    .then((detailRequests) => Promise.all(detailRequests))

    .then((pokemonsDetails)=>pokemonsDetails)

    .catch((error) => console.log(error));
}
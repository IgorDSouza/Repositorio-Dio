const pokeapi = {};

pokeapi.getPokemons = (offfset=0,limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)

    // Podemos simplificar ainda mais usando arrowfunctions, quando não há nenhum além do retorno, podemos usa-la em apenas uma linha



    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error));
}

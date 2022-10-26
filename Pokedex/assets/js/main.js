
const pokemonOl = document.getElementById('pokemonList');


function convertPokemonToLi(pokemon){
    return `<li class="pokemon ${pokemon.type}" >
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type)=> `<li class="type  ${type}" > ${type} </li>`).join('')} 
                        </ol>
    
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
    </li>`
    }
    

    pokeapi.getPokemons().then((pokemons = []) => {
         // Recebendo os dados da api e transformandos em 'uma lista com .map no lugar do 'for'.

         //transforma esses dados da lista em uma lista de 'li's html

        // Transformando a nova lista em uma unica string com o join('divisao')

   pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');

    
    
    // for(let i=0; i < pokemonList.length ; i++){
    //     const pokemon = pokemonList[i];
    //     pokemonOl.innerHTML+=(convertPokemonToLi(pokemon));

    // }
})





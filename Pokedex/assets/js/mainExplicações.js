const offset=0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
//Se a requisição for um sucesso
.then(function(response){ 
    //A response retornada é uma ReadableStream e não conseguimos trabalhar com ela dessa forma, vamos transforma-la em um obj json
    
    // response.json().then(function (responseBody){
    //     console.log(responseBody)

    // }) No lugar de criar mais uma estrutura de callback (.then,.catch e finaly) podemos encadear os .thens pois eles sempre apontam o ultimo resultado.

    return response.json();

})
.then(function(response){
    console.log(response)
})

//Se a requisição falhar
.catch(function (error){
    console.log(error)
})
// A requsição falhando ou sendo um sucesso, passará por aqui
.finally(function (){
    console.log('Requisição concluida')
})





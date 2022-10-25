const offset=0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
//Se a requisição for um sucesso
.then(function(response){ 
    //A response retornada é uma ReadableStream e não conseguimos trabalhar com ela dessa forma, vamos transforma-la em um obj json
    response.json().then(function (responseBody){
        console.log(responseBody)

    })
    .catch(function(error){
        console.log(error);
    })
})
//Se a requisição falhar
.catch(function (error){
    console.log(error)
})
// A requsição falhando ou sendo um sucesso, passará por aqui
.finally(function (){
    console.log('Requisição concluida')
})


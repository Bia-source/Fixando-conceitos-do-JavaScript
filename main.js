// REQUISIÇÃO JAVASCRIPT PURO
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://localhost:3001/products');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }
//----------------------------------------------------------------//

// FAZENDO UMA REQUISIÇÃO DO TIPO GET QUE RETORNA UM OBJETO JSON 
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:3001/products');
        xhr.send(null);

        xhr.onreadystatechange = function(){
          if (xhr.readyState === 4){
           //console.log(JSON.parse(xhr.responseText));
           if (xhr.status === 200){
               resolve(JSON.parse(xhr.responseText));
           } else{
               reject('Erro na requisição');
           }
           }
         }
    });

    }

// CHAMANDO FUNÇÃO E TRATANDO O SUCESSO DA REQUISIÇÃO '.THEN ' ||  ERRO NA REQUISIÇÃO '.CATCH'
 minhaPromise()
 .then(function(response){
     console.log(response);
 })
 .catch(function(error){
     console.log(error);
 })
 ;

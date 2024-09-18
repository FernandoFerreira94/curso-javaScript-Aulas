
// ------------------ Arrays ---------------
console.log('-------Array-----------')
var lista_salada =['alface','tomate','rucula','mandioca']
console.log(lista_salada[2]) // == 'rucula'
console.log(lista_salada[2] = 500) // == 500

console.log('')
console.log('')
console.log('-------Criando array-----------')
// --------------- criando array ----------------

var lista_FrutaPessoas = []
lista_FrutaPessoas['frutas'] =['banana','uva','maça','goiaba']
lista_FrutaPessoas['pessoas'] = ['Fernando','Marcela','Yumi','Gabriel']
console.log(lista_FrutaPessoas)
console.log(lista_FrutaPessoas['frutas'][3]) // Goiaba
console.log(lista_FrutaPessoas['pessoas'][3]) // Gabriel

console.log('')
console.log('')
console.log('')
console.log('-------criando array(2)-----------')
//--------------- criando array(2) ------------

var volvo = ['mazzada','x1','bola']
var chevrollet = ['chevette','monza','celta']
var carros = [volvo,chevrollet]
console.table(carros)
console.log(carros[0][0]) // mazzada
console.table(carros[1]) // chevrollet

console.log('')
console.log('')
console.log('---------Inlcuindo elemento--------')

var lista_nomes = []
lista_nomes['first'] = ['fernando','marcos','rodrigo','fabio']
lista_nomes['last'] = ['ferreira','perroti','faro','melo']
console.table(lista_nomes)


console.log('')
console.log('')
console.log('')
console.log('')
console.log('---------excluindo elemento---------')

lista_nomes['first'].push('octavio') // acrecenta no ultimo indice do arrat selecionado
lista_nomes.unshift('null') // acrecenta no primeiro indice, nao acessa array dentro de array
console.table(lista_nomes)
lista_nomes.pop() // remove primeiro indice do array - nao acessa array dento de array
lista_nomes['last'].shift() // remove ultimo indice do array selecionado

console.table(lista_nomes)


console.log('')
console.log('')
console.log('')
console.log('')
// --------------- pesquisar elementos dentro do array ----------

console.log('------- pesquisa array indexOf()----------')

var cerveja = ['brhama','skol','henique','sol']
//indexOf('valor a ser procurado') true retorna posiçao no array / false retorna -1
console.table(cerveja.indexOf('sol')) // pesquisa dentro do array se existe 'sol' retornara posiçao do indice (3) se false (-1)

// podemos usar uma logica para isso

var pesquisar = function (nome) {
  return  cerveja.indexOf(nome)
}

if(pesquisar('sol') == -1) { // true
    console.log('elemento nao existi')
} else {
    console.log(`elemento existe e esta  no indice ${pesquisar('sol')}`)
}

// ----------- ou --------

var serch = cerveja.indexOf('imperio')
switch (serch) {
    case -1:
        console.log('elemento nao existi')
        break;

    default:
        console.log(`elemento existe e esta  no indice ${serch}`)
        break;
}


console.log('')
console.log('')
console.log('')
console.log('')
// ---------- ordenação de elemento -------
console.log('--------- ordenando elementos--------')
//sort() ordena alfa numerico, retorna uma ordenação parti da 1 caracter (18,19,21,26,27,7)
var num = [18,26,19,27,21,7];
var nome = ['Fernando', 'wesley', 'fabrina', 'antoio'];

var fisrtUp = nome.map(nome => { // função para transforma todas a primeiras letra do nome em UpCase
   return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
   //chartAt() retorna 
});
nome = fisrtUp

var firstNum = function (a,b) { // função para acerta a ordenação (7,18,19,21,26,27)
    return a-b
}
console.table(num.sort(firstNum)) // passar função como callBack sem as'()'
console.table(nome.sort()) // se exister nome com primeira letra maisculo ou minuscula vai ter ordenaçoes diferentes

console.log('')
console.log('')
console.log('')
console.log('')



var nomes = ['Fernando', 'Wesley', 'Fabrina', 'Antoio'];

// Gera o HTML para a lista de nomes usando template literals
var listaHTML = `
    <ul>
        ${nomes.map(nome => `<li>${nome}</li>`).join('')}
    </ul>
`;

// Insere o HTML gerado dentro do elemento com o ID "nomes-container"
document.getElementById('nomes-container').innerHTML = listaHTML;


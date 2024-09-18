
var lista_frutas = ['banana','maça','uva']
var div = document.getElementById('div')

console.log(lista_frutas.length)
for (let i = 0; i < lista_frutas.length; i++) {
    const element = lista_frutas[i];
    div.innerHTML += `<li>${element}</li>`
    console.log(element)
}

//--------- tabuada ----------
var ul = document.getElementById('ul')

function tabuada(num1) { 
    document.getElementById('num1').value = ''
    for (let x = 1; x <= num1; x++) {  
        for (let y = 1; y <= 10; y++) {
             ul.innerHTML += `<li>${x} x ${y} = ${res = x * y}</li>`;   
        }
        ul.innerHTML += `<hr>`
    }
};

function limpar(   ) {
   return ul.innerHTML = ''
}

// ------------- forEach -------------

var listaConvidado = ['Jorge','Fernando','Marcelo','Bia']

//forEach função com 3 parametros (valor = 'jorge), (indice = [0], (array todo))
listaConvidado.forEach(function (valor,indice,array) {
    if (valor == 'Fernando') { // procurar se existe marcelo no array
        array[indice] = 'Antonio' // array[indice] indica o indice que foi procurado
    } 
})

var search = function (valor, indice,array) {
    if (valor == 'Jorge' ) {
        array[indice] = ''
    }
}
listaConvidado.forEach(search)
console.log(listaConvidado)

function tabuadaWhile() {
    var b = 1
    while (b <= 10) {
        a = 1
        while (a <=10) {
            console.log(`${b} x ${a} = ${re = b*a}`)
            a++
        }
        console.log('' )
        b++
    }
}



//----------------- arguments ------------------------

function soma() {
    var resutado = 0
    for (const i in arguments) { // arguments recupera os valores passdo como parametros em forma de array
        resutado += arguments[i] // arguments[i] ira percorrer todos os indices dos parametros da função
            
        }
        return resutado
    }


console.log(soma(7,5,' fernando')) // = 12fernando
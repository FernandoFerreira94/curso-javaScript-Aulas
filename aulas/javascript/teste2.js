//-----------Funçoes de callBack --------
//--------- inicio Div clima ------------
let idClima = document.getElementById('idClima')
let texto = document.getElementById('text')


//função criada para callbackSucesso
let daySunny = function (nome) /*parametro passado dentro da função exibirArtigo */ {
    texto.innerText = 'hoje o dia está ensolarado ' + nome
    idClima.value = ''
}

//Função criada para callbackErro
let dayRaining = function (nome)/*parametro passado dentro da função exibirArtigo */ {
    texto.innerText = 'hoje o dia está chuvoso ' + nome
    idClima.value = ''

}

/* passar a função como parametro precisar ser sem '()',
para que o javascript entenda que nao é pra executar a função, apenas usar
como parametro */

function exibirArtigo(id, callBackSucesso, callBackErro) {
    if (id == 1) {
        callBackSucesso('Fernando') // função callback sucesso 

    } else if (id == 2) {
        callBackErro('Paulo') // função callbacke erro
    }
}

//---------Fim Div clima ------------

//----------Inicio string ---------

let poesia = 'you know wHat we be it'
let length = poesia.length // conta quantas strings existe!
console.log(length)
let char = poesia.charAt(4) // retorna a letra da posição 4
console.log(poesia.at(5)) // // retorna a letra da posição 5
console.log(char)
console.log(poesia.indexOf('k'))// retorna qual posição está o 'k'
console.log(poesia.replace('you', 'your')) // troca a palavra pela outra
console.log(poesia.startsWith('you')) // verifica se comeca com 'you' retorna TRUE
console.log(poesia.endsWith('it')) // verifica se termina com 'it' retorna TRUE
console.log(poesia.match('wHat')) // retorna onde esta a palavra procurada
console.log('123'.padEnd(6, '1')) // acrecenta '1'no final ate completa campo de 6 string
console.log('123'.padStart(6, '1')) // acrecenta '1' no inicio ate completa campo de 6 string
console.log('---------------------------')
var num = 10.410
console.log(Math.ceil(num)) //Math.ceil() retorna arredonta pra cima = 11
console.log(Math.floor(num)) //Match.floor() retorna arredonta para baixo = 10
console.log(Math.round(num)) //Match.round() retorna verifica se esta acima de 501 para arredonta pra cima se estiver 499 arredonta para baixo
console.log(Math.random())// retorna numero aleatorio
console.log('---------------------------')

//-------------- fim string ---------------

//-------------inicio datas ---------------

let horario = function () {
    let data = new Date()
    let day = data.getDate(); // dia
    let month = data.getMonth() + 1; //mês precisa +1 pois janeiro comeca no indoxe '0'
    let year = data.getFullYear(); // ano
    let horas = data.getHours(); // horas
    let minute = data.getMinutes(); // minutos
    let segundos = data.getSeconds();//segundos

    document.getElementById('data').innerHTML = `${day} / ${month} / ${year} ` // data
    document.getElementById('horario').innerHTML = `${horas}:${minute}:${segundos}`; // horario
}
setInterval(horario) // fica ativado infinito a função

document.write('<hr>')
let data = new Date()
//set ele acrecenta o valor na data
//get recupera o valor da data atualmente
document.write(data.toString()) // data em formato string.
data.setDate(data.getDate() + 3) // add ou remover dias
data.setMonth(data.getMonth() + 2) // add ou remover meses
data.setFullYear(data.getFullYear() + 2) // add ou remover anos
document.write('<br>')
document.write(data.toString()) // data em formato string.
document.write('<br>')
document.write('------------------')

//-------------final datas ---------------

//--------- Inicio Calcular diferenca de datas -----------
// criar uma data new Date(year, month(0a11), day, hours, minutes, sencond, millisedonds)
let data1 = new Date(2023, 10, 5, 12, 30, 10); //data criada
let data2 = new Date(); // data atual

let dataInicial = document.getElementById('dataInicial')
let dataAtual = document.getElementById('dataAtual')
let dateFinal = document.getElementById('dateFinal')

dataInicial.innerHTML = data1
dataAtual.innerHTML = data2

document.write('<br>')
document.write(data1.getTime()) // retorna quantos segundos se passaram desde 01/01/1970 ate a data atual
document.write('<br>')
document.write(data2.getTime())// retorna quantos segundos se passaram desde 01/01/1970 ate a data atual
document.write('<br>')

let dataFinal = data2 - data1
document.write(dataFinal) // calculo para saber diferenca de milisegundos diferenca
document.write('<br>')

// dia = 24 horas = 60 minutos = 1000 millisegundos
let dayTotal = 1 * 24 * 60 * 60 * 1000 // calculo para saber quantos millisegundos tem no dia
document.write('um dia tem: ' + dayTotal + ' de millisegundos')
document.write('<br>')
let dataDifenca = dataFinal / dayTotal

let Final = Math.ceil(dataDifenca) // Math.ceil arredonta para cima
document.write('diferença de dias: ' + Final)
document.write('<br>')
dateFinal.innerHTML = Final

//--------- Final Calcular diferenca de datas -----------


//-------------- eventos --------------
/*
        Mouse
onclick =  curso clica 1vez
ondbclick = curso clica 2vezes
onmouseover = curso passa pelo elemento
onmouseout = curso sai do elemento

        Teclado
onKeyDown = tecla e pressionada
oneKeypress = tecla pressionada
oneKeyup = tecla e liberada

        Formulario
onfocus = aciona quando recebe o foco do mouse
onblur = aciona quando o elemento perde o foco
onchange = aciona quando elemente e modificado
        Janela
onresize = aciona quando pagina muda o tamanho
onscroll = scroll do mouse e acionado

*/
//-------------Mouse-------------
function mouse1() {
    document.getElementById('div').style.background = 'black'
}

function mouse2() {
    document.getElementById('div').style.background = '#ccc'
}

function mouse3() {
    document.getElementById('div').style.background = 'blue'
}

function mouse4() {
    document.getElementById('div').style.background = 'red'
}

//------------Teclado--------------
function teclado1() {
    document.getElementById('div1').style.background = 'black'
}

function teclado2() {
    document.getElementById('div1').style.background = 'blue'
}

function teclado3() {
    document.getElementById('div1').style.background = 'green'
}

//
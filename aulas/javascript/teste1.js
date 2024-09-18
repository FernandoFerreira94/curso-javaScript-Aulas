let curso = '<h5 style="text-align: center;"> Curso JavaScript</h5>';
document.write('<hr>')
document.write(curso); //*write escreve direto na web

//var nome = prompt('Digite seu nome') //*prompt abre uma tela para escrever o valor, antes de mostrar na web
//var idade = prompt('Digite sua idade')
//document.write(`<p> Hello ${nome} tudo bem? vc tem ${idade} ?</p>`)

let a = 10;
let b = 20;
let c = null;
document.write(`<p> A: ${a} </p> <p> B: ${b} </p> <p> C: ${c} </p>`)
// podemes ultilizar tags html 
document.write('<hr>')

//------ comandos IF e ELSE -----
/*      Condiçoes
== igual,   === identico
!= diferente    !== nao identico
 < menor    <= menor ou igual   > maior     >= maior ou igual
*/

//--------- logica verficar nota e frequencia-------------

let matematica = document.getElementById('matematica')
let porturgues = document.getElementById('portugues')
let ciencia = document.getElementById('ciencia')
let geografia = document.getElementById('geografia')
let historia = document.getElementById('historia')
let frequencia = document.getElementById('frequencia')
let textResultado = document.getElementById('resultado')

let mediaNota = 7
let frequenciaMeida = 70
//document.getElementById('name').innerHTML = prompt('digite seu nome')

$('#calcular').click(() => {
    //Number converte value em string para efetuar calculo
    //parseInt copnverte string para numeros 
    let freqeunciaFinal = parseInt((130 - parseInt(frequencia.value)) / 1.3)
    let nota = (parseInt(matematica.value) + parseInt(porturgues.value) + parseInt(ciencia.value) + parseInt(geografia.value) + parseInt(historia.value)) / 5

    if (mediaNota <= nota && frequenciaMeida <= freqeunciaFinal) {
        document.getElementById('nota1').innerText = 'Sua nota:' + nota;
        document.getElementById('aula').innerText = 'Sua frequencia: ' + freqeunciaFinal + '%';
        textResultado.classList.add('aprovado') // adiciona class no HTML
        document.getElementById('resultado').innerText = 'Aprovado'
    } else {
        document.getElementById('aula').innerText = 'Sua frequencia: ' + freqeunciaFinal + '%';
        document.getElementById('nota1').innerText = 'Sua nota:' + nota;
        textResultado.classList.add('reprovado') // adiciona class no HTML
        document.getElementById('resultado').innerText = 'Reprovado'
    }
})

//------------fim------------

//---------parseInt parsFloat------------

let num1 = '12'
let num2 = '15'
//parseInt converte string para numeros
soma = parseInt(num1) + parseInt(num2) // = 27

let num3 = '7.56'
let num4 = '9.5'
//parseFloat mantem as fraçoes 12,015 converte string para numeros
soma1 = parseFloat(num3) + parseFloat(num4) // = 17.06

let num5 = 87
let num6 = 85
// toString converte numero para string concatetando as duas string
soma2 = num5.toString() + num6.toString() // = 8785

//----------operador ternario ---------
let notaA172 = 15
let notaB172 = 20
//operador ternario e uma outra forma de escrever IF e ELSE
// <condiçao> ? <true> : <false>
//let resultado = notaA172 <= notaB172 ? console.log('true') : console.log('false')


//-----------------Switch----------------

let idade = 16
// retorna true apenas quando e identico a condição
switch (idade) {
    case idade:
        console.log('criança')  // true
        break;  // interrompe o codigo
    case 16:
        console.log('jovem')
        break;
    case 3:
        console.log('idoso')
        break;
    default:
        console.log('erro')
        break
}

// ---------------- Funçoes --------------

// calcular area de um terreno
let largura = document.getElementById('largura')
let comprimento = document.getElementById('comprimento')

//metodo WRAPPER, usar variavel para guarda as funções
var calTerreno = function (lar, comp) {
    return lar * comp;
}

let calArea = function () {
    document.getElementById('resultadoCal').innerText = calTerreno(largura.value, comprimento.value) + 'mts';
    largura.value = '';
    comprimento.value = '';
}


var bomDia = function (name) {
    document.write('bom dia ' + name)
}

console.log(bomDia('Fernando'))

//------------ Função callback -----------
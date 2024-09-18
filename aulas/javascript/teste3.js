//------------------ separando string e numero -----------

var caracter = function () { // usando onkeyup a função e ativada toda vez que uma tecla e acionada
let texto = document.getElementById('text').value
document.getElementById('text').value = ''
switch (texto) {
    case '0': 
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    document.getElementById('numero').value += texto 
    break;
    default:
        document.getElementById('letra').value += texto 
        break;
}
}

//------------- manipulaçao style JavaScript ------------

var mudarCor = function (cor, width,height) {
    switch (cor) {
        case 'red':
            document.getElementById('divCor').style.background = cor
            document.getElementById('divCor').style.width = width
            document.getElementById('divCor').style.height = height
            break;
            case 'blue':
                document.getElementById('divCor').style.background = cor
                document.getElementById('divCor').style.width = width
                document.getElementById('divCor').style.height = height
                break;
                case 'green':
                    document.getElementById('divCor').style.background = cor
                    document.getElementById('divCor').style.width = width
                    document.getElementById('divCor').style.height = height
            break;
        default:
            break;
    }
}

function clearCamp(id) {
        document.getElementById(id).value = ''
}

//------------- manipulando class javascript -------------------

function fontDecoratio(decoratio) {
    if (decoratio == 'bold' || decoratio=='italic' || decoratio =='normal') {
        document.getElementById('h3').className = decoratio; // atribuindo class no id selecionado
    }
}
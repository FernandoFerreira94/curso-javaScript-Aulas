//----------------- paraemtros defaut -------------

const contaHistoria = (
  nameDog = "Fuba",
  dogHooby = "passear",
  dogDono = "Fernando"
) => {
  // parametro defaut, caso algum parametro nao for passado, valores ja pre-escritos nos parametro da funlçao assumirar o valor
  document.write(`era uma vez um cachorro que se chama ${nameDog}, 
        gostava de ${dogHooby}, junto com seu dono ${dogDono} `);
};
contaHistoria("william", undefined, "Octavio"); // caso nao queira passa um parametro, so usar underfind

//----------- arrow function -------------

const soma = (x, y) => {
  return x + y;
};

console.log(soma(1, 4));

const quadrado = (x) => x * x; // return implicido,  quando é apenas uma tratativa simples na função podemos ultilzar esse escropo
console.log(quadrado(3));

/*
let imparPar = function (n) {
    if (n % 2 === 0) {
        'par'
    } else {
        'impar'
    }
}
*/
// ------ ou -----

let imparPar = (n) => (n % 2 === 0 ? "Par" : "impar"); // return implicito

console.log(imparPar(2));

//----------- orientação ao objeto -----------

//paradigma procedual

let a = 10;
let b = 5;
let operador = "mult";

function calcular(a, b, operador) {
  if (operador == "mult") {
    console.log(a * b);
  }
}
calcular(a, b, operador);

// paradigma orientação objeto

class Calculadora {
  constructor() {
    this.a = 10;
    this.b = 7;
    this.operador = "*";
  }
  calcular() {
    if (this.operador == "*") {
      console.log(this.a * this.b);
    }
  }
}

calculadora = new Calculadora();
calculadora.calcular();

//--------  orientaçao objeto -------------

class ContaBancaria {
  // modelo da entidade/objeto

  constructor() {
    // contrução do objeto
    this.agencia = 1715;
    this.numeroConta = 3030;
    this.saldo = 25.5;
    this.limite = 500;
  }

  // açoes
  // metodos sao funçoes

  depositar(valorDeposito) {
    this.saldo += valorDeposito;
  }

  sacar(valorSacar) {
    this.saldo -= valorSacar;
  }

  consultaSaldo() {
    return this.saldo;
  }
}

x = new ContaBancaria(); // criação do Objeto
console.log(x.saldo);
x.depositar(50);
console.log(x.saldo);
x.sacar(38.9);
console.log(x.saldo);

// ------------ software marcenaria

// paradigma procedual

// cadeira

let cadeiras = [];

function add_Cadeiras(pernas, giratoria, cor) {
  // função de criacao de cadeira
  let cadeira = []; // criando array

  cadeira["qtd_pernas"] = pernas; // add valores no array
  cadeira["giratoria"] = giratoria;
  cadeira["cor"] = cor;

  cadeiras.push(cadeira); // incremeando cadeira no array cadeiras
}

const girar = (i) => {
  // funçao para verificar se cadeira e giratoria
  if (cadeiras[i]["giratoria"] === true) {
    console.log("cadeira gira");
  } else {
    console.log("cadeira nao gira");
  }
};

add_Cadeiras(4, false, "black"); // criando cadeiras
add_Cadeiras(1, true, "red");
add_Cadeiras(4, true, "green");

console.log(cadeiras);

// paradigma orientação objeto
class Cadeiras {
  constructor(pernas, giratoria, cor) {
    // paraemtros esperados quando for criado o objeto
    this.pernas = pernas;
    this.giratoria = giratoria;
    this.cor = cor;
  }

  girar() {
    if (this.giratoria === true) {
      // função verificar se cadeira gira ou nao
      console.log("cadeira gira");
    } else {
      console.log("nao gira");
    }
  }
}

let cadeirasB = []; // criando lista de cadeiras
cadeirasB.push(new Cadeiras(5, true, "gold"));
cadeirasB.push(new Cadeiras(1, true, "black"));
cadeirasB.push(new Cadeiras(4, false, "pink"));

console.log(cadeirasB);
cadeirasB[1].girar();

// ---------------- desafio criar objeto para (SOFA)

class SOFA {
  constructor(lugares, reclinavel, cor) {
    this.lugares = lugares;
    this.reclinavel = reclinavel;
    this.cor = cor;
  }

  reclinavel1() {
    if (this.reclinavel === true) {
      console.log("sofa reclinavel");
    } else {
      console.log("sofa nao reclinavel");
    }
  }
}

let sofa = [];
sofa.push(new SOFA(3, true, "row"));
sofa.push(new SOFA(2, false, "white"));
sofa.push(new SOFA(5, true, "bege"));

console.log(sofa);
sofa[1].reclinavel1();

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

// ------------ software marcenaria ----------------------

// paradigma procedual -----------------

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

// paradigma orientação objeto -------------------

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

// ---------------- desafio criar objeto para (SOFA) -------------------------

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
let count = 0;
let sofa = [];
function addSofa(lugares, reclinavel, cor) {
  sofa.push(new SOFA(lugares, reclinavel, cor));
  count++;
}

addSofa(5, true, "preto");
addSofa(3, false, "marrom");
addSofa(4, true, "bege");
addSofa(3, false, "branco");
console.log(sofa);

sofa[1].reclinavel1();
sofa[2].reclinavel1();

// ------------- orientaçao objeto ENCAPSOLAMENTO -----------------

class TV {
  constructor() {
    this._relacao_Canais = [2, 4, 5, 7, 10];
    this._canal_Ativo = 5; // usando o '_' nao conseguimos acessar de forma direto, precisamos usar metodos get e set
    this._volume = 5;
  }

  // metodo para recuperar um valor private ou '_', quando for chama a função get nao ultilizar os '()', para que o metodo entenda que esta sendo chamado o GET
  get canal_Ativo() {
    return this._canal_Ativo;
  }

  // metodo para alterar valor.
  set canal_Ativo(canal) {
    // indexOf verifica onde esta o idice do paraemto passado no array, caso nao existe retorna -1
    if (this._relacao_Canais.indexOf(canal) !== -1) {
      //_canal_Ativo so vai ser modificado caso o parametro passa existir na _relacao_Canais
      this._canal_Ativo = canal; // alterando o valor usando o parametro do metodo set
    }
  }
}

let tv = new TV();
//tv._canal_Ativo = 10; // podemos alterar o valor, mesmo que seja private ou '_', mas não e recomedavel
tv.canal_Ativo = 8; // ultilizando o metodo set podemos alterar valores, jeito recomendavel
console.log(tv.canal_Ativo);

// -------------- orientação objeto HERANÇA ---------------

//---- animal;
// class PAI
class Animal {
  //operador super() vai passando herança para cada class herdada
  constructor(cor, tamanho, peso) {
    this.cor = cor;
    this.tamanho = tamanho;
    this.peso = peso;
  }

  // metodo
  dormir() {
    console.log("dormir");
  }
}

// ------ passaro
// class herdada animal
class Passaro extends Animal {
  constructor(bico, cor, tamanho, peso, voar) {
    // passar metodo super() para que a herança seja herdada
    // herdada parametros
    super(cor, tamanho, peso, voar);
    this.bico = bico;
    this.voar = voar;
  }

  // metodo
  sabeVoar(nome) {
    if (this.voar) {
      console.log(`${nome} sabe voar`);
    } else {
      console.log(`${nome} nao sabe voar`);
    }
  }
}

//------ papagaio
class Papagaio extends Passaro {
  constructor(sabeFalar, cor, tamanho, peso, voar) {
    super("curto", cor, tamanho, peso, voar);
    this.fala = sabeFalar;
  }

  falar() {
    if (this.falar === true) {
      console.log("sabe falar");
    }
  }
}

//----- Avestruz
class Avestrus extends Passaro {
  constructor(cor, tamanho, peso, voar) {
    super("curto", cor, tamanho, peso, voar);
  }

  //metodos
  enterrarCabeca() {
    console.log("enterrar cabeca");
  }
}

//craindo objeto
let animais = [];
animais["aves"] = [];
animais["aves"].push(new Papagaio(true, "amarelo", "50cm", "98g", true));
animais["aves"].push(new Avestrus("brancom-preto", "2.3M", "115Kg", false));
animais["aves"][0].sabeVoar("Papagio");
animais["aves"][1].sabeVoar("Avestrus");
animais["mamiferos"] = [];
console.log(animais);

// ------------------- orientação objeto literais ---------

class Produto {
  constructor(descricao, valor) {
    this.descricao = descricao;
    this.valor = valor;
  }

  verProduto() {
    console.log(`${this.descricao} por apenas ${this.valor}$`);
  }
}

let produto = new Produto("notebook", 1900);
produto.verProduto();

//----- objeto literal
let produtoLiteral = {
  descricao: "Geladeira",
  preco: 1800,

  verDercricao: function () {
    console.log(`${this.descricao} por apenas ${this.preco}$`);
  },
};

produtoLiteral.verDercricao();

// ---- dados html
let nome = document.getElementById("nome").innerHTML;
let idade = document.getElementById("idade").innerHTML;
let sexo = document.getElementById("sexo").innerHTML;
let job = document.getElementById("job").innerHTML;
let p = document.getElementById("resumo");

// ---- objeto literal
let formulario = {
  nome: nome, // nao tem necessidade de colocar nome: valor
  idade,
  sexo,
  job,

  exibirResumo() {
    return `I'm ${this.nome} have ${this.idade} old year, Im ${this.sexo}, work at profis ${this.job} `;
  },
};

console.log(formulario.exibirResumo());
p.innerHTML = formulario.exibirResumo();

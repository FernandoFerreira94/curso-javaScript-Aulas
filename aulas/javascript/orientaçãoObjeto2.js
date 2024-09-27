// ----------- padrao FACTORY ----

// ------ criando biclicleta manualmente ----
let bicicleta1 = {
  cor: "Red",
  marcha: 18,
  aro: 29,
  pedalar: function () {
    console.log("pedalar");
  },
};

let bicicleta2 = {
  cor: "white",
  marcha: "sem marcha",
  aro: 26,
  pedalar: function () {
    console.log("pedalar");
  },
};

// ------- ultilizando metodo FACTORY (fabrica)

//bicilcetaFactory(cor,marcha,aro)

let bicicletas = []; // array onde vai ser guardadas as biciletas craidas
let idCount = 1; // id das biciletas

// função de craição
let bicilcetaFactory = function (cor, marcha, aro) {
  return {
    // variaveis
    id: idCount++,
    cor,
    marcha,
    aro,

    // metodos
    pedalar: function () {
      console.log("ação pedalar");
    },

    // detalhes da bicicleta
    detalhes: function () {
      console.log(
        `Bicicleta ID ${this.id}: Cor ${this.cor}, Aro ${this.aro}, Marchas ${this.marcha}`
      );
    },
  };
};

// função de armazenar
let criarBicicletas = function (cor, marcha, aro) {
  bicicletas.push(bicilcetaFactory(cor, marcha, aro));
};

// criando as biclicletas
criarBicicletas("verde", "sem marcha", 15);
criarBicicletas("preta", 12, 21);
criarBicicletas("branca", 12, 21);
criarBicicletas("branca-verde", 8, 14);

console.table(bicicletas);

// protype

// avião / cor modelo / levantarVoo

// objeto literal
let a1 = {
  cor: "white",
  modelo: "Airbus a380",

  levantarVoo: function () {
    console.log("levantando voo");
  },
};
console.log(a1);

// objeto Class

class A2 {
  constructor(cor, modelo) {
    this.cor = cor;
    this.modelo = modelo;
  }

  levantarVoo() {
    console.log("levantando voo");
  }
}

let a2 = new A2("gold", "a110");
console.log(a2);

// objeto contrutor função

let AviaoF = function (cor, modelo) {
  (this.cor = cor),
    (this.modelo = modelo),
    (this.levantarVoo = () => {
      console.log("levantando voo");
    });
};

let a3 = new AviaoF("blue-dark", "boeng 157");

console.log(a3);

// ----------Objeto.prototype---------------

Object.prototype.attr5 = "e"; // todos os objetos tera essa variavel e esse valor.

let Animal = { attr1: "a" };

let Vertebrado = { attr2: "b" };

let Ave = { __prot__: Vertebrado, attr3: "c" }; // atraves do __prot__: Vertebrado, podemos acessar valores de outro objeto

console.log(Ave.attr3, Ave.attr5); // acessando valores de outro objeto atreves do prototype

//---------- Operador REST/SPREAD (...) ---------

// Spread = Espalhar dados
// Rest = Juntar dados

// ------------- Spread -----------
// usando spread com strings
let tituloArtigo = "Como ultilizar o operador Spread";
console.log(tituloArtigo); // = "Como ultilizar o operador Spread"
// operador Spread ultilizar com (...Variavel) ultiliza os 3 ponots antes da viravel
console.log(...tituloArtigo); // = "c o m o  u l t i l i z a r  o  o p e r a d o r  S p r e a d"

// Usando Spread com Array

let listaCurso1 = ["NodeJs", "ES6", "TypeScript"];
let lsitaCruso2 = ["Android/IOS", "Linux", "React.js"];

let listaCursoCompleto = [
  "Web Completo",
  "Android Completo",
  ...listaCurso1, // (...) ira acrecentar os valores do array listaCurso1 e listaCurso2 dentro do array listaCompletoCurso
  ...lsitaCruso2,
];
console.log(listaCursoCompleto);

// Usando Spread com Objeto

let pessoa = { nome: "Joáo", idade: 27 };
// usando (...) retorna o Objeto com os valores de pessoa dentro do clone
let clone = { endereço: "Rua av. Jk", ...pessoa };
console.log(clone); // = endereço: "Rua av. Jk", nome: "Joáo", idade: 27;

// ------------- Rest ----------

//contestp Rest

function soma(...param) {
  let resultado = 0;
  param.forEach((v) => (resultado += v)); // retornara uma conta de soma usando os parametros passado no função
  return resultado;
}
console.log(soma(3, 8, 5, 7)); // soma([3,8,5,7]) retorna em Array

// m e o multiplicador
let mult = {
  // (...Variavel) retorna os valores passado em forma de Array
  x: function (m, ...param) {
    let resultado = 0;
    param.forEach((v) => (resultado += m * v)); // resultado vai soma cada multipicação que o forEach retornara
    return resultado;
  },
};

console.log(mult.x(2, 5, 7, 6));

// -------- Desreucturing Assignment -----
// extraindo valores dentro do Array

let listFruit = ["apple", "orange", "grape", "melon"];
let [, a, b, c] = listFruit; // usando o [] antes do (=) metodo destruturação
// retornara variaveis com os indices (vaziu[0],a=[1], b=[2], c=[3])
console.log(a, b, c);

let coisas = [
  ["pc", "mouse", "teclado"],
  ["Fernando", "Maria", "Jose"],
];
//[[1Array],[2array]]
let [[b1, b2], [, b4]] = coisas; // recuperar um valor de array dentro de outro array
console.log(b1, b2, b4); // [['pc','mouse'],[,'maria]]

// Extraindo valores dentro de Objetos

let produto = {
  descricao: "Notebook",
  preço: 1500,
  detalhes: {
    fabricante: "mac",
    modelo: "Mac pro 10",
  },
};

console.table(produto);
// extrair valores de um Objeto precisamos citar o valor a uma variavel
let {
  descricao: c1,
  preço: c2,
  detalhes: { modelo: c3 },
} = produto;
console.log(c1, c2, c3);

// Array

let arr = [10, 15, 87, 65, 71];

function teste([a, b, , c]) {
  console.log(a, b, c);
}

teste(arr); // retorna 10,15,65

// Objeto

let obj = {
  a: "primeiro",
  b: "segundo",
  c: "terceiro",
  d: "quarto",
};

// extraindo valor do obj
function teste1({ a: pr, c: ter }) {
  console.log(pr, ter); // retorna 'primeiro','terceiro'
}

// porem ficamos preso ao parametros que cita o OBJ.
teste1(obj);

// ----------------------

// array - Rest
let array1 = [10, 11, 13, 15, 17];
let [q, ...resto] = array1; // ultilizando o (...) para juntar os valores em um array
console.log(q); // retorna arra1[0] = 10
console.log(resto); // retorna array[resto] = 11,13,15,17

//Objeto - Rest
let obj1 = {
  a: "hello",
  b: "world",
  c: "how",
  d: "you",
};

let { a: p1, ...p2 } = obj1;

console.log(p1); // 'hello'
console.log(p2); // world,how,you

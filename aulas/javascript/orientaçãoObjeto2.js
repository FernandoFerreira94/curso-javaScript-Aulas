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
    id: idCount++,
    cor,
    marcha,
    aro,
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
